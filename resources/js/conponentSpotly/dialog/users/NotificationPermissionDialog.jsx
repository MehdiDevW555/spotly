import React, { useState } from "react";

import {
    Dialog,
    DialogContent,
    Typography,
    Button,
    CircularProgress,
} from "@mui/material";

import NotificationsActiveRoundedIcon
    from "@mui/icons-material/NotificationsActiveRounded";

import { getToken } from "firebase/messaging";

import { messaging } from "../../../firebase";

import axios from "axios";


function NotificationPermissionDialog({
    open,
    onClose,
    uuid,
}) {

    const [loading, setLoading] = useState(false);


    const handleEnableNotifications = async () => {

        try {

            setLoading(true);


            // -------------------------------------------------
            // 1. طلب إذن الإشعارات
            // -------------------------------------------------

            const permission =
                await Notification.requestPermission();


            console.log(
                "NOTIFICATION PERMISSION:",
                permission
            );


            if (permission !== "granted") {

                setLoading(false);

                return;
            }


            // -------------------------------------------------
            // 2. تسجيل Firebase Service Worker
            // -------------------------------------------------

            const registration =
                await navigator.serviceWorker.register(
                    "/firebase-messaging-sw.js"
                );


            console.log(
                "SERVICE WORKER REGISTERED:",
                registration
            );


            // -------------------------------------------------
            // 3. الحصول على FCM Token
            // -------------------------------------------------

            const newToken =
                await getToken(
                    messaging,
                    {
                        vapidKey:
                            "BMrlXhCM4FvgLg4dhS1qIRdWG_-0dzrH4p6goE2Gm5vOKP_Tw kWVFmjsv2G-Bts2Jny0NBf0OHMd6OY6MTeLLUw"
                                .replace(" ", ""),

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


            // -------------------------------------------------
            // 4. الحصول على Ticket ID
            // -------------------------------------------------

            const ticketId =
                localStorage.getItem(
                    `ticket_id_${uuid}`
                );


            console.log(
                "TICKET ID:",
                ticketId
            );


            // -------------------------------------------------
            // 5. حفظ Token في Laravel
            // -------------------------------------------------

            if (ticketId) {

                const response =
                    await axios.post(
                        "/api/web/save-fcm-token",
                        {
                            ticket_id:
                                ticketId,

                            fcm_token:
                                newToken,
                        }
                    );


                console.log(
                    "FCM TOKEN SAVED:",
                    response.data
                );

            } else {

                console.warn(
                    "NO TICKET ID FOUND"
                );

            }


            // -------------------------------------------------
            // 6. حفظ Token في state
            // -------------------------------------------------

            // لا نحتاج state هنا، لكن نغلق الـDialog
            // بعد نجاح العملية

            setLoading(false);

            onClose();


        } catch (error) {

            console.error(
                "FCM ERROR:",
                error
            );

            setLoading(false);

        }

    };


    return (

        <Dialog
            open={open}

            disableEscapeKeyDown

            onClose={() => {}}
        >

            <DialogContent
                sx={{
                    p: 4,

                    textAlign: "center",

                    width: {
                        xs: "calc(100vw - 40px)",
                        sm: 420,
                    },

                    maxWidth: 420,
                }}
            >

                <NotificationsActiveRoundedIcon
                    sx={{
                        fontSize: 80,

                        color: "#0ab7ab",

                        mb: 2,
                    }}
                />


                <Typography
                    sx={{
                        fontSize: 24,

                        fontWeight: 900,

                        mb: 1,
                    }}
                >
                    فعّل الإشعارات
                </Typography>


                <Typography
                    sx={{
                        color: "#64748b",

                        lineHeight: 2,

                        mb: 3,
                    }}
                >
                    فعّل الإشعارات حتى نتمكن
                    من إعلامك عندما يقترب دورك أو يحين دورك.
                </Typography>


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

            </DialogContent>

        </Dialog>

    );

}

export default NotificationPermissionDialog;
