import React, { useEffect, useState } from "react";
import {
    Typography,
    Button,
    CircularProgress,
    Box,
} from "@mui/material";

import NotificationsActiveRoundedIcon
    from "@mui/icons-material/NotificationsActiveRounded";

import ArrowUpwardRoundedIcon
    from "@mui/icons-material/ArrowUpwardRounded";

import { getToken } from "firebase/messaging";
import { messaging } from "../../../firebase";
import axios from "axios";

import notificationGuide
    from "./../../../../img/users/gide-allow-notification-imag.png";


function NotificationPermissionDialog({
    open,
    onClose,
    uuid,
    fromBooking = false,
    onTokenReady,
}) {

    const [loading, setLoading] = useState(false);

    // هل نعرض خطوات تفعيل الإشعارات من إعدادات المتصفح؟
    const [showGuide, setShowGuide] = useState(false);


    /*
    |--------------------------------------------------------------------------
    | عند فتح Dialog
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (!open) {
            return;
        }

        // إذا كانت الإشعارات محظورة مسبقاً
        if (Notification.permission === "denied") {

            if (fromBooking) {
                setShowGuide(true);
            } else {
                setShowGuide(false);
            }

            return;
        }

        // إذا كانت السماحية ما زالت default
        setShowGuide(false);

    }, [open, fromBooking]);


    /*
    |--------------------------------------------------------------------------
    | تفعيل الإشعارات
    |--------------------------------------------------------------------------
    */

    const handleEnableNotifications = async () => {

        try {

            setLoading(true);


            /*
            |--------------------------------------------------------------------------
            | محظورة مسبقاً
            |--------------------------------------------------------------------------
            */

            if (Notification.permission === "denied") {

                setLoading(false);

                if (fromBooking) {

                    // لا نغلق Dialog
                    // نعرض خطوات التفعيل
                    setShowGuide(true);

                    return;
                }

                onClose();

                return;
            }


            /*
            |--------------------------------------------------------------------------
            | طلب السماح
            |--------------------------------------------------------------------------
            */

            const permission =
                await Notification.requestPermission();

            console.log(
                "NOTIFICATION PERMISSION:",
                permission
            );


            /*
            |--------------------------------------------------------------------------
            | المستخدم اختار Block
            |--------------------------------------------------------------------------
            */

            if (permission === "denied") {

                setLoading(false);

                if (fromBooking) {

                    // مهم جداً:
                    // لا نغلق Dialog
                    // ننتقل إلى خطوات التفعيل

                    setShowGuide(true);

                    return;
                }

                onClose();

                return;
            }


            /*
            |--------------------------------------------------------------------------
            | لم يسمح
            |--------------------------------------------------------------------------
            */

            if (permission !== "granted") {

                setLoading(false);

                onClose();

                return;
            }


            /*
            |--------------------------------------------------------------------------
            | Service Worker
            |--------------------------------------------------------------------------
            */

            const registration =
                await navigator.serviceWorker.register(
                    "/firebase-messaging-sw.js"
                );


            /*
            |--------------------------------------------------------------------------
            | FCM Token
            |--------------------------------------------------------------------------
            */

            const newToken =
                await getToken(
                    messaging,
                    {
                        vapidKey:
                            "BMrlXhCM4FvgLg4dhS1qIRdWG_-0dzrH4p6goE2Gm5vOKP_TwkWVFmjsv2G-Bts2Jny0NBf0OHMd6OY6MTeLLUw",

                        serviceWorkerRegistration:
                            registration,
                    }
                );


            console.log(
                "FCM TOKEN:",
                newToken
            );


            if (!newToken) {

                console.error(
                    "FCM TOKEN WAS NOT GENERATED"
                );

                setLoading(false);

                return;
            }


            /*
            |--------------------------------------------------------------------------
            | إرسال Token إلى CreateBookPlace
            |--------------------------------------------------------------------------
            */

            if (onTokenReady) {

                onTokenReady(newToken);

            }


            /*
            |--------------------------------------------------------------------------
            | Ticket ID
            |--------------------------------------------------------------------------
            */

            const ticketId =
                localStorage.getItem(
                    `ticket_id_${uuid}`
                );


            /*
            |--------------------------------------------------------------------------
            | حفظ Token في Laravel
            |--------------------------------------------------------------------------
            */

            if (ticketId) {

                const response =
                    await axios.post(
                        "/api/web/save-fcm-token",
                        {
                            ticket_id: ticketId,
                            fcm_token: newToken,
                        }
                    );

                console.log(
                    "FCM TOKEN SAVED:",
                    response.data
                );
            }


            /*
            |--------------------------------------------------------------------------
            | نجاح
            |--------------------------------------------------------------------------
            */

            setLoading(false);

            setShowGuide(false);

            onClose();

        } catch (error) {

            console.error(
                "FCM ERROR:",
                error
            );

            setLoading(false);
        }
    };


    /*
    |--------------------------------------------------------------------------
    | Dialog مغلق
    |--------------------------------------------------------------------------
    */

    if (!open) {
        return null;
    }


    /*
    |--------------------------------------------------------------------------
    | الواجهة
    |--------------------------------------------------------------------------
    */

    return (

        <Box
            sx={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                backgroundColor:
                    "rgba(0,0,0,0.65)",

                backdropFilter:
                    "blur(5px)",

                p: 2,
            }}
        >

            <Box
                sx={{
                    width: "100%",
                    maxWidth: 420,

                    maxHeight: "90vh",
                    overflowY: "auto",

                    backgroundColor: "#fff",

                    borderRadius: 4,

                    py: 3,
                    px: 2,

                    textAlign: "center",

                    boxShadow:
                        "0 25px 70px rgba(0,0,0,.35)",
                }}
            >

                <NotificationsActiveRoundedIcon
                    sx={{
                        fontSize: 70,
                        color: "#0ab7ab",
                    }}
                />


                <Typography
                    sx={{
                        fontSize: 22,
                        fontWeight: 900,
                        mb: 1,
                    }}
                >
                    فعّل الإشعارات
                </Typography>


                {showGuide ? (

                    /*
                    |--------------------------------------------------------------------------
                    | خطوات التفعيل
                    |--------------------------------------------------------------------------
                    */

                    <>

                        <Box
                            sx={{
                                position: "fixed",

                                top: 8,
                                left: "50%",

                                transform:
                                    "translateX(-50%)",

                                zIndex: 10001,

                                display: "flex",

                                flexDirection: "column",

                                alignItems: "center",

                                pointerEvents: "none",

                                animation:
                                    "browserArrow 1.2s ease-in-out infinite",

                                "@keyframes browserArrow": {

                                    "0%, 100%": {
                                        transform:
                                            "translate(-50%, 0)",
                                    },

                                    "50%": {
                                        transform:
                                            "translate(-50%, -7px)",
                                    },
                                },
                            }}
                        >

                            <Typography
                                sx={{
                                    color: "#fff",

                                    fontSize: {
                                        xs: 14,
                                        sm: 16,
                                    },

                                    fontWeight: 900,

                                    background:
                                        "rgba(0,0,0,.75)",

                                    px: 2,
                                    py: 0.7,

                                    borderRadius: 2,

                                    whiteSpace: "nowrap",
                                }}
                            >
                                👆 انظر إلى أعلى المتصفح
                            </Typography>


                            <ArrowUpwardRoundedIcon
                                sx={{
                                    color: "#ff5252",

                                    fontSize: {
                                        xs: 48,
                                        sm: 58,
                                    },
                                }}
                            />

                        </Box>


                        <Typography
                            sx={{
                                color: "#64748b",

                                lineHeight: 1.7,

                                fontSize: 15,

                                mb: 2,
                            }}
                        >
                            الإشعارات محظورة حالياً.
                            <br />

                            لتفعيلها، استخدم إعدادات الموقع
                            الموجودة بجانب عنوان الصفحة.
                        </Typography>


                        <Box
                            sx={{
                                background: "#f8fafc",

                                border:
                                    "1px solid #e2e8f0",

                                borderRadius: 3,

                                p: 1.5,
                            }}
                        >

                            <Typography
                                sx={{
                                    fontWeight: 900,

                                    color: "#334155",

                                    fontSize: 14,
                                }}
                            >
                                اضغط على أيقونة بجانب اسم الموقع
                                <br />

                                ثم اختر:
                            </Typography>


                            <Typography
                                sx={{
                                    color: "#0ab7ab",

                                    fontWeight: 900,

                                    fontSize: 14,
                                }}
                            >
                                السماح → الإشعارات
                            </Typography>

                        </Box>


                        <Box
                            sx={{
                                width: "100%",

                                display: "flex",

                                justifyContent:
                                    "center",

                                mt: 2,
                            }}
                        >

                            <Box
                                component="img"

                                src={notificationGuide}

                                alt="طريقة السماح بالإشعارات"

                                sx={{
                                    width: "100%",

                                    maxWidth: 400,

                                    height: "auto",

                                    borderRadius: 3,

                                    display: "block",
                                }}
                            />

                        </Box>


                        <Typography
                            sx={{
                                color: "#3e5471",

                                lineHeight: 2,

                                fontSize: 16,

                                fontWeight: 700,

                                mt: 2,
                            }}
                        >
                            بعد اختيار السماح،
                            حدث الصفحة وستتمكن من استقبال
                            إشعارات دورك.
                        </Typography>

                    </>

                ) : (

                    /*
                    |--------------------------------------------------------------------------
                    | الواجهة الأولى
                    |--------------------------------------------------------------------------
                    */

                    <>

                        <Typography
                            sx={{
                                color: "#64748b",

                                lineHeight: 2,

                                mb: 2,
                            }}
                        >
                            يجب تفعيل الإشعارات حتى تتمكن
                            من استقبال تنبيهات دورك
                            عندما يقترب دورك أو يحين دورك.
                        </Typography>


                        <Box
                            sx={{
                                border:
                                    "1px solid #f1b5b5",

                                backgroundColor:
                                    "#fff7f7",

                                borderRadius: 2.5,

                                p: 1.5,

                                mb: 3,

                                textAlign: "right",
                            }}
                        >

                            <Typography
                                sx={{
                                    color: "#d32f2f",

                                    fontSize: 14,

                                    fontWeight: 700,
                                }}
                            >
                                ⚠️ تنبيه
                            </Typography>


                            <Typography
                                sx={{
                                    color: "#d32f2f",

                                    fontSize: 13.5,

                                    lineHeight: 1.8,

                                    mt: 0.3,
                                }}
                            >
                                إذا اخترت
                                <strong> "حظر"</strong>،
                                فلن تتمكن من استقبال
                                إشعارات دورك،
                                ولن يستطيع الموقع طلب
                                السماح بها مرة أخرى تلقائياً.
                            </Typography>

                        </Box>


                        <Button
                            fullWidth

                            variant="contained"

                            disabled={loading}

                            onClick={
                                handleEnableNotifications
                            }

                            sx={{
                                py: 1.3,

                                borderRadius: 3,

                                fontWeight: 800,

                                background:
                                    "linear-gradient(90deg,#0ab7ab,#4cc9f0,#9d4edd)",

                                "&:hover": {
                                    background:
                                        "linear-gradient(90deg,#09a99e,#3ebbdc,#8d43c9)",
                                },
                            }}
                        >

                            {loading ? (

                                <CircularProgress
                                    size={24}
                                    sx={{
                                        color: "#fff",
                                    }}
                                />

                            ) : (

                                "تفعيل الإشعارات"

                            )}

                        </Button>

                    </>

                )}

            </Box>

        </Box>
    );
}

export default NotificationPermissionDialog;
