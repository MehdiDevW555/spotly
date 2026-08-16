import { Box, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreateBookPlace from './bookPlace/CreateBookPlace'
import MyTurn from './myTurn/MyTurn'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {
    shop_selector,
    ticketStatus_selector,
    queue_selector
} from '../../../redux/selectors/users/Users_selector'

import {
    changeTicketStatus,
    changeQueue
} from '../../../redux/slices/users/Users_slice'
import API_TICKET_STATUS from '../../api/users/API_TICKET_STATUS'
import API_GET_SHOP_QUEUE_STATUS from '../../api/users/API_GET_SHOP_QUEUE_STATUS'
import API_GET_SERVICES from '../../api/shopAdmin/services/API_GET_SERVICES'
import { useParams } from 'react-router-dom'
import "../../../echo";
import { playTicketSound } from '../../../ticketSound'
import ServingTicket from './servingTicket/ServingTicket'
import Loading from '../../otherFiles/loading/Loading'

function Users() {
    const { uuid } = useParams();
    let dispatch = useDispatch()
    const [soundReady, setSoundReady] = useState(false);
    const [alarmAudio, setAlarmAudio] = useState(null);
    let ticketStatus = useSelector(ticketStatus_selector)
    let queue = useSelector(queue_selector)
    let queueOpen = queue?.queueOpen;
    let shop = useSelector(shop_selector)
    let checking = ticketStatus?.checking
    let activeTicket = ticketStatus?.activeTicket
    let status = ticketStatus?.status
    let tUEFF = ticketStatus?.TUEFF
    let currentNumber = ticketStatus?.currentNumber
    let lastTicketNumber = queue?.lastTicketNumber
    let waitingCount = queue?.waitingCount
    let lastCustomer = queue?.lastCustomer
    let lastServedNumber = queue?.lastServedNumber
    let peopleBeforeMe = ticketStatus?.peopleBeforeMe
    console.log(window.Echo);
    console.log(window.Echo.options)

    useEffect(() => {

        const audio = new Audio("/sounds/ticket-call.mp3");
        audio.load();

    }, []);



    useEffect(() => {

        if (!shop?.id) return;

        console.log("CONNECTING...");

        const channel = window.Echo
            .channel(`shop.${shop.id}`);

        channel.listen(".queue.status.changed", (e) => {

            // console.log("QUEUE STATUS:", e.queue_open);
            // console.log("QUEUE OPEN:", e);
            dispatch(changeQueue({
                queueOpen: e.queue_open
            }));


        });


        channel.listen(".ticket.created", () => {

            API_GET_SHOP_QUEUE_STATUS(dispatch, uuid);

        });


        channel.listen(".ticket.status.changed", (e) => {

            console.log("STATUS EVENT", e);

            // const ticketUuid = localStorage.getItem("ticket_uuid");

            const ticketUuid = localStorage.getItem(
                `ticket_uuid_${uuid}`
            )


            if (ticketUuid && e.ticket_uuid === ticketUuid) {

                // تحديث بيانات التذكرة
                API_TICKET_STATUS(dispatch, ticketUuid, uuid);

                if (e.status === "serving") {
                    setSoundReady(true);
                    playTicketSound();
                }




            }


            // تحديث عدد المنتظرين للجميع
            API_GET_SHOP_QUEUE_STATUS(dispatch, uuid);

        });

        window.Echo.connector.pusher.connection.bind(
            "connected",
            () => {
                console.log("REVERB CONNECTED");
            }
        );


        window.Echo.connector.pusher.connection.bind(
            "disconnected",
            () => {
                console.log("REVERB DISCONNECTED");
            }
        );


        return () => {
            window.Echo.leave(`shop.${shop.id}`);
        };


    }, [shop?.id, uuid]);
    console.log(queueOpen)



    useEffect(() => {
        API_GET_SHOP_QUEUE_STATUS(dispatch, uuid)
        API_GET_SERVICES(dispatch, uuid)
    }, [uuid, tUEFF]);



    useEffect(() => {

        const ticketUuid = localStorage.getItem(
            `ticket_uuid_${uuid}`
        )

        console.log("CURRENT SHOP:", uuid)
        console.log("CURRENT TICKET:", ticketUuid)

        if (!ticketUuid) {

            dispatch(changeTicketStatus({
                checking: false,
                activeTicket: false,
                status: null,
                ticketNumber: null,
                peopleBeforeMe: 0
            }))

            return
        }

        dispatch(changeTicketStatus({
            checking: true
        }))

        API_TICKET_STATUS(
            dispatch,
            ticketUuid,
            uuid
        )

    }, [uuid, tUEFF])

    console.log(activeTicket)

    if (checking) {
        return (
            <div>
                <Loading />
            </div>
        )
    }
    if (queueOpen === null) {
        return <Loading />;
    }


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
                        boxShadow: "0 25px 60px rgba(0,0,0,.15)",
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
                        <Typography
                            sx={{
                                fontSize: 40,
                            }}
                        >
                            🔒
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            fontSize: 28,
                            fontWeight: 900,
                            color: "#111827",
                            mb: 1,
                        }}
                    >
                        المحل مغلق حالياً
                    </Typography>

                    <Typography
                        sx={{
                            color: "#6b7280",
                            lineHeight: 2,
                            fontSize: 15,
                        }}
                    >
                        {/* تم إيقاف استقبال التذاكر مؤقتاً. */}
                        {/* <br /> */}
                        يرجى المحاولة لاحقاً.
                    </Typography>
                </Box>
            </Box>
        );
    }





    return (
        <Box>

            {
                status === "serving" ?

                    <ServingTicket
                        shop={shop}
                        ticketNumber={ticketStatus.ticketNumber}
                        // lastCustomer={lastCustomer}
                        lastCustomer={ticketStatus?.customer}
                    />

                    :

                    activeTicket ?

                        <MyTurn
                            shop={shop}
                            currentNumber={currentNumber}
                            peopleBeforeMe={peopleBeforeMe}
                            lastTicketNumber={ticketStatus.ticketNumber}
                            waitingCount={waitingCount}
                            // lastCustomer={lastCustomer}
                            lastCustomer={ticketStatus?.customer}
                            lastServedNumber={lastServedNumber}
                        />

                        :

                        <CreateBookPlace
                            uuid={uuid}
                            tUEFF={tUEFF}
                            lastTicketNumber={lastTicketNumber}
                            waitingCount={waitingCount}
                        />

            }



        </Box>

    )

}

export default Users
