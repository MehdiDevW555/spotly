import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import CreateBookPlace from "./bookPlace/CreateBookPlace";
import MyTurn from "./myTurn/MyTurn";
import ServingTicket from "./servingTicket/ServingTicket";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
    shop_selector,
    ticketStatus_selector,
    queue_selector,
} from "../../../redux/selectors/users/Users_selector";

import {
    changeTicketStatus,
    changeQueue,
} from "../../../redux/slices/users/Users_slice";

import API_TICKET_STATUS from "../../api/users/API_TICKET_STATUS";
import API_GET_SHOP_QUEUE_STATUS from "../../api/users/API_GET_SHOP_QUEUE_STATUS";
import API_GET_SERVICES from "../../api/shopAdmin/services/API_GET_SERVICES";

import { useParams } from "react-router-dom";

import "../../../echo";

import { playTicketSound } from "../../../ticketSound";

import Loading from "../../otherFiles/loading/Loading";

import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../../../firebase";

// import NotificationPermissionDialog from "../../dialog/users/NotificationPermissionDialog";


function Users() {

    const { uuid } = useParams();

    const dispatch = useDispatch();


    const [token, setToken] = useState(null);
    const [soundReady, setSoundReady] = useState(false);
    const [alarmAudio, setAlarmAudio] = useState(null);

    // const [openNotificationDialog, setOpenNotificationDialog] =
    //     useState(false);


    const ticketStatus = useSelector(ticketStatus_selector);
    const queue = useSelector(queue_selector);
    const shop = useSelector(shop_selector);


    const queueOpen = queue?.queueOpen;

    const checking = ticketStatus?.checking;
    const activeTicket = ticketStatus?.activeTicket;
    const status = ticketStatus?.status;
    const tUEFF = ticketStatus?.TUEFF;

    const currentNumber = ticketStatus?.currentNumber;

    const lastTicketNumber = queue?.lastTicketNumber;
    const waitingCount = queue?.waitingCount;
    const lastCustomer = queue?.lastCustomer;
    const lastServedNumber = queue?.lastServedNumber;

    const peopleBeforeMe = ticketStatus?.peopleBeforeMe;


    // -------------------------------------------------------------------------
    // تحميل الصوت
    // -------------------------------------------------------------------------

    useEffect(() => {

        const audio = new Audio(
            "/sounds/ticket-call.mp3"
        );

        audio.load();

    }, []);



    // -------------------------------------------------------------------------
    // Notification Dialog
    // -------------------------------------------------------------------------

    // useEffect(() => {

    //     if (Notification.permission === "granted") {
    //         return;
    //     }

    //     setOpenNotificationDialog(true);

    // }, []);



    // -------------------------------------------------------------------------
    // FCM
    // -------------------------------------------------------------------------
    useEffect(() => {

        let unsubscribeMessage = null;

        const initFCM = async () => {

            try {

                // 1. Service Worker
                const registration =
                    await navigator.serviceWorker.register(
                        "/firebase-messaging-sw.js"
                    );

                console.log(
                    "🔥 FCM SERVICE WORKER:",
                    registration
                );

                // 2. Permission
                if (Notification.permission !== "granted") {

                    console.log(
                        "❌ Notification permission:",
                        Notification.permission
                    );

                    return;
                }

                // 3. Get FCM token
                const currentToken = await getToken(
                    messaging,
                    {
                        vapidKey:"BMrlXhCM4FvgLg4dhS1qIRdWG_-0dzrH4p6goE2Gm5vOKP_TwkWVFmjsv2G-Bts2Jny0NBf0OHMd6OY6MTeLLUw",

                        serviceWorkerRegistration:
                            registration,
                    }
                );

                if (!currentToken) {

                    console.log(
                        "❌ FCM TOKEN NOT FOUND"
                    );

                    return;
                }

                console.log(
                    "🔥 CURRENT FCM TOKEN:",
                    currentToken
                );

                setToken(currentToken);

                // 4. Get ticket ID directly from localStorage
                const ticketId =
                    localStorage.getItem(
                        `ticket_id_${uuid}`
                    );

                console.log(
                    "🎫 CURRENT TICKET ID:",
                    ticketId
                );

                // لا توجد تذكرة بعد
                if (!ticketId) {

                    console.log(
                        "⏳ No ticket yet"
                    );

                } else {

                    // 5. Save FCM token
                    const saveResponse =
                        await axios.post(
                            "/api/web/save-fcm-token",
                            {
                                ticket_id: Number(ticketId),
                                fcm_token: currentToken,
                            }
                        );

                    console.log(
                        "✅ FCM TOKEN SAVED:",
                        saveResponse.data
                    );
                }

                // 6. Listen for foreground messages
                unsubscribeMessage = onMessage(
                    messaging,
                    (payload) => {

                        console.log(
                            "🔥🔥 FCM MESSAGE RECEIVED:",
                            payload
                        );

                        const title =
                            payload?.notification?.title ||
                            payload?.data?.title ||
                            "Spotlly";

                        const body =
                            payload?.notification?.body ||
                            payload?.data?.body ||
                            "";

                        const icon =
                            payload?.notification?.icon ||
                            payload?.data?.icon ||
                            "/images/slogo.png";

                        console.log(
                            "🔔 TITLE:",
                            title
                        );

                        console.log(
                            "🔔 BODY:",
                            body
                        );

                        if (Notification.permission === "granted") {

                            const notificationType = payload?.data?.type;

                            const notification = new Notification(title, {
                                body: body,
                                icon: "/images/slogo.png",
                                badge: "/images/slogo.png",
                                tag: `spotlly-${payload?.messageId || Date.now()}`,
                                requireInteraction: true,
                            });

                            // ==========================================
                            // 🔊 اختيار صوت الإشعار
                            // ==========================================

                            let soundFile = "/sounds/sound-notification2.mp3";

                            // 🔴 حان دور العميل-
                            if (
                                notificationType === "turn_called" ||
                                notificationType === "service_started"
                            ) {
                                soundFile = "/sounds/sound-notification1.mp3";
                            }

                            console.log("🔊 Notification type:", notificationType);
                            console.log("🔊 Sound:", soundFile);

                            const audio = new Audio(soundFile);

                            audio.volume = 1.0;

                            audio.play().catch((error) => {
                                console.log("🔇 SOUND BLOCKED:", error);
                            });

                            // ==========================================
                            // 🔗 الضغط على الإشعار
                            // ==========================================

                            notification.onclick = () => {

                                notification.close();

                                const url =
                                    `${window.location.origin}/q/${uuid}`;

                                window.open(url, "_blank");
                            };
                        }
                    }
                );

                console.log(
                    "✅ FCM ONMESSAGE LISTENER READY"
                );

            } catch (error) {

                console.error(
                    "❌ FCM INIT ERROR:",
                    error.response?.data ||
                    error
                );
            }
        };

        initFCM();

        return () => {

            if (unsubscribeMessage) {
                unsubscribeMessage();
            }

        };

    }, [uuid]);


    // -------------------------------------------------------------------------
    // Reverb
    // -------------------------------------------------------------------------

    useEffect(() => {

        if (!shop?.id) {
            return;
        }

        const channel =
            window.Echo.channel(
                `shop.${shop.id}`
            );


        // Queue status changed
        channel.listen(
            ".queue.status.changed",
            (e) => {

                dispatch(
                    changeQueue({
                        queueOpen:
                            e.queue_open,
                    })
                );

            }
        );


        // Ticket created
        channel.listen(
            ".ticket.created",
            () => {

                API_GET_SHOP_QUEUE_STATUS(
                    dispatch,
                    uuid
                );

            }
        );


        // Ticket status changed
        channel.listen(
            ".ticket.status.changed",
            (e) => {

                const ticketUuid =
                    localStorage.getItem(
                        `ticket_uuid_${uuid}`
                    );


                if (
                    ticketUuid &&
                    e.ticket_uuid === ticketUuid
                ) {

                    API_TICKET_STATUS(
                        dispatch,
                        ticketUuid,
                        uuid
                    );


                    if (
                        e.status === "serving"
                    ) {

                        setSoundReady(true);

                        playTicketSound();

                    }

                }


                API_GET_SHOP_QUEUE_STATUS(
                    dispatch,
                    uuid
                );

            }
        );


        window.Echo.connector.pusher.connection.bind(
            "connected",
            () => {

                console.log(
                    "REVERB CONNECTED"
                );

            }
        );


        window.Echo.connector.pusher.connection.bind(
            "disconnected",
            () => {

                console.log(
                    "REVERB DISCONNECTED"
                );

            }
        );


        return () => {

            window.Echo.leave(
                `shop.${shop.id}`
            );

        };

    }, [
        shop?.id,
        uuid
    ]);


    // -------------------------------------------------------------------------
    // Queue + Services
    // -------------------------------------------------------------------------

    useEffect(() => {

        API_GET_SHOP_QUEUE_STATUS(
            dispatch,
            uuid
        );

        API_GET_SERVICES(
            dispatch,
            uuid
        );

    }, [
        uuid,
        tUEFF
    ]);


    // -------------------------------------------------------------------------
    // Ticket status
    // -------------------------------------------------------------------------

    useEffect(() => {

        const ticketUuid =
            localStorage.getItem(
                `ticket_uuid_${uuid}`
            );


        if (!ticketUuid) {

            dispatch(
                changeTicketStatus({
                    checking: false,
                    activeTicket: false,
                    status: null,
                    ticketNumber: null,
                    peopleBeforeMe: 0,
                })
            );

            return;
        }


        dispatch(
            changeTicketStatus({
                checking: true,
            })
        );


        API_TICKET_STATUS(
            dispatch,
            ticketUuid,
            uuid
        );

    }, [
        uuid,
        tUEFF
    ]);


    // -------------------------------------------------------------------------
    // Loading
    // -------------------------------------------------------------------------

    if (checking) {

        return (
            <div>
                <Loading />
            </div>
        );

    }


    if (queueOpen === null) {

        return <Loading />;

    }


    // -------------------------------------------------------------------------
    // Shop closed
    // -------------------------------------------------------------------------

    if (!queueOpen) {

        return (

            <Box
                sx={{
                    minHeight: "100dvh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 3,

                    background:
                        "linear-gradient(135deg,#743DB1 0%,#47CBE4 50%,#3989EC 100%)",
                }}
            >

                <Box
                    sx={{
                        width: "100%",
                        maxWidth: 500,

                        bgcolor: "#fff",

                        borderRadius: 5,

                        p: 4,

                        textAlign: "center",

                        boxShadow:
                            "0 25px 60px rgba(0,0,0,.15)",
                    }}
                >

                    <Box
                        sx={{
                            width: 90,
                            height: 100,

                            borderRadius: "50%",

                            bgcolor: "#fee2e2",

                            display: "flex",

                            alignItems: "center",

                            justifyContent: "center",

                            mx: "auto",

                            mb: 3,
                        }}
                    >

                        <Box
                            sx={{
                                fontSize: 40,
                            }}
                        >
                            🔒
                        </Box>

                    </Box>


                    <Box
                        sx={{
                            fontSize: 28,
                            fontWeight: 900,
                            color: "#111827",
                            mb: 1,
                        }}
                    >
                        المحل مغلق حالياً
                    </Box>


                    <Box
                        sx={{
                            color: "#6b7280",
                            lineHeight: 2,
                            fontSize: 15,
                        }}
                    >
                        يرجى المحاولة لاحقاً.
                    </Box>

                </Box>

            </Box>

        );

    }


    // -------------------------------------------------------------------------
    // Main
    // -------------------------------------------------------------------------

    return (

        <Box>

            {/* <NotificationPermissionDialog
                open={openNotificationDialog}

                uuid={uuid}

                onClose={() =>
                    setOpenNotificationDialog(false)
                }
            /> */}
            {/* <NotificationPermissionDialog
                open={openNotificationDialog}
                uuid={uuid}
                onClose={() =>
                    setOpenNotificationDialog(false)
                }
            /> */}


            {
                status === "serving" ?

                    <ServingTicket
                        shop={shop}

                        ticketNumber={
                            ticketStatus.ticketNumber
                        }

                        lastCustomer={
                            ticketStatus?.customer
                        }
                    />

                    :

                    activeTicket ?

                        <MyTurn
                            shop={shop}

                            currentNumber={
                                currentNumber
                            }

                            peopleBeforeMe={
                                peopleBeforeMe
                            }

                            lastTicketNumber={
                                ticketStatus.ticketNumber
                            }

                            waitingCount={
                                waitingCount
                            }

                            lastCustomer={
                                ticketStatus?.customer
                            }

                            lastServedNumber={
                                lastServedNumber
                            }
                        />

                        :

                        <CreateBookPlace
                            uuid={uuid}

                            tUEFF={tUEFF}

                            lastTicketNumber={
                                lastTicketNumber
                            }

                            waitingCount={
                                waitingCount
                            }
                            fcmToken={token}
                        />
            }

        </Box>

    );

}

export default Users;
