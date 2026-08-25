import {
    Box,
    Typography,
    Button,
    IconButton,
    MenuItem,
    Select,
    Paper,
    Chip,
    Avatar,
    Pagination,
    Zoom,
    Fab,
    Divider,
    CircularProgress,
} from "@mui/material";

import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import API_START_SERVICE from "../../../../../api/shopAdmin/queue/API_START_SERVICE";
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import { useDispatch, useSelector } from "react-redux";
import { cancelService_selector, completeService_selector, dataQueueStatus_selector, getQueueStatus_selector, recallUser_selector, startService_selector } from "../../../../../../redux/selectors/shopAdmin/ShopAdmin_selector";
import API_COMPLETE_SERVICE from "../../../../../api/shopAdmin/queue/API_COMPLETE_SERVICE";
import { useEffect, useState } from "react";
import "../../../../../../echo";
import API_GET_ALL_TICKET from "../../../../../api/shopAdmin/queue/API_GET_ALL_TICKET";
import API_GET_CURRENT_TICKET from "../../../../../api/shopAdmin/queue/API_GET_CURRENT_TICKET";
import { changeDataQueueStatus, changeGetQueueStatus, changeToggleChangeStatusService } from "../../../../../../redux/slices/shopAdmin/ShopAdmin_slice";
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import PowerOutlinedIcon from '@mui/icons-material/PowerOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import API_CANCEL_SERVICE from "../../../../../api/shopAdmin/queue/API_CANCEL_SERVICE";
import CurrentTicketSkeleton from "./currentTicketSkeleton/CurrentTicketSkeleton";
import API_UPDATE_QUEUE_STATUS from "../../../../../api/shopAdmin/queue/API_UPDATE_QUEUE_STATUS";
import API_RECALL_USER from "../../../../../api/shopAdmin/queue/API_RECALL_USER";
import CampaignIcon from '@mui/icons-material/Campaign';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PhoneIcon from '@mui/icons-material/Phone';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function ViewCurrentTicket(props) {
    // const [queueOpen, setQueueOpen] = useState(1);
    let { getCurrentTicket, idShop, toggleChangeStatusService, getQueueStatus } = props
    const [updatingQueue, setUpdatingQueue] = useState(false);
    let CurrentTicket = getCurrentTicket?.CurrentTicket
    let loadingCurrentTicket = getCurrentTicket?.loading
    let queueOpen = getQueueStatus?.queueStatus
    let loadingQueueStatus = getQueueStatus?.loading

    let startService = useSelector(startService_selector)
    let loadingStartService = startService?.loading
    let completeService = useSelector(completeService_selector)
    let loadingCompleteService = completeService?.loading
    let cancelService = useSelector(cancelService_selector)
    let loadingCancelService = cancelService?.loading
    let recallUser = useSelector(recallUser_selector)
    let loadingRecallUser = recallUser?.loading
    let idTicket = CurrentTicket?.id
    let dataQueueStatus = useSelector(dataQueueStatus_selector)
    let dispatch = useDispatch()
    let handleStartService = () => {
        API_START_SERVICE(dispatch, idTicket)
    }
    let handleCompleteService = () => {
        API_COMPLETE_SERVICE(dispatch, idTicket)
    }

    let handleCancelService = () => {
        API_CANCEL_SERVICE(dispatch, idTicket)
    }
    let handelRecallUser = () => {
        API_RECALL_USER(dispatch, idTicket)
    }
    const handleQueueToggle = () => {

        const newStatus = !queueOpen;
        // setUpdatingQueue(true);

        dispatch(changeDataQueueStatus(newStatus));

        API_UPDATE_QUEUE_STATUS(
            dispatch,
            idShop,
            newStatus
        );
    };
    console.log(CurrentTicket)

    // useEffect(() => {


    //     window.Echo
    //         .channel(`shop.${idShop}`)
    //         .listen(".ticket.status.changed", (e) => {
    //             // API_GET_CURRENT_TICKET(dispatch, idShop);
    //             // API_GET_ALL_TICKET(dispatch, idShop);
    //             dispatch(changeToggleChangeStatusService())
    //         });

    //     window.Echo
    //         .channel(`shop.${idShop}`)
    //         .listen(".ticket.created", () => {

    //             dispatch(changeToggleChangeStatusService())

    //         });

    //     return () => {
    //         window.Echo.leave(`shop.${idShop}`);
    //     };

    // }, [idShop]);











    useEffect(() => {

        window.Echo
            .channel(`shop.${idShop}`)
            .listen(".queue.status.changed", (e) => {

                console.log("QUEUE STATUS CHANGED:", e.queue_open);

                dispatch(changeGetQueueStatus({
                    queueStatus: e.queue_open
                }));

            })
            .listen(".ticket.status.changed", (e) => {

                dispatch(changeToggleChangeStatusService());

            })
            .listen(".ticket.created", () => {

                dispatch(changeToggleChangeStatusService());

            });

        return () => {
            window.Echo.leave(`shop.${idShop}`);
        };

    }, [idShop]);

    return (
        <Box
            sx={{
                mt: 2,
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                p: { xs: 2, md: 3 },
                color: "#fff",
                boxShadow: 4,

                background:
                    "linear-gradient(135deg,#7c3aed 0%,#5b21b6 100%)",
                background:
                    "linear-gradient(135deg, #743DB1 0%, #47CBE4 50%, #3989EC 100%)",
            }}
        >


            {loadingCurrentTicket === 1 && !CurrentTicket ?
                (
                    <CurrentTicketSkeleton />
                ) :
                !CurrentTicket ? (

                    <Box
                        sx={{
                            // minHeight: 220,
                            display: "flex",
                            flexDirection: "column",
                            // alignItems: "center",
                            // justifyContent: "center",
                            textAlign: "center",
                            gap: 1,
                            // position: "relative",
                            // overflow: "hidden",
                        }}
                    >

                        {
                            <Box sx={{
                                display: "flex",
                                // flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>

                                <Box
                                    sx={{
                                        px: 2,
                                        py: 0.7,
                                        borderRadius: 20,
                                        bgcolor: "#ffffffa0",
                                        border: "1px solid rgba(255,255,255,.25)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",

                                            background: queueOpen
                                                ? "#22c55e"
                                                : "#ef4444",

                                            animation: "pulse 1.5s infinite",
                                            boxShadow: queueOpen
                                                ? "0 0 0 0 rgba(34,197,94,.7)"
                                                : "0 0 0 0 rgba(239,68,68,.7)",
                                        }}
                                    />

                                    <Typography
                                        sx={{
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            letterSpacing: 1,
                                            color: queueOpen
                                                ? "success.main"
                                                : "error.main",
                                        }}
                                    >
                                        {queueOpen
                                            ? "النظام جاهز لاستقبال الزبائن"
                                            : "النظام متوقف مؤقتاً"}
                                    </Typography>
                                </Box>

                                <Box
                                    onClick={
                                        loadingQueueStatus === 1
                                            ? undefined
                                            : handleQueueToggle
                                    }
                                    sx={{
                                        width: 55,
                                        height: 30,
                                        borderRadius: "20px",
                                        p: "2px",

                                        bgcolor:
                                            loadingQueueStatus === 1
                                                ? "#9ca3af"
                                                : queueOpen
                                                    ? "#22c55e"
                                                    : "#ef4444",

                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent:
                                            loadingQueueStatus === 1
                                                ? "center"
                                                : queueOpen
                                                    ? "flex-end"
                                                    : "flex-start",

                                        cursor:
                                            loadingQueueStatus === 1
                                                ? "default"
                                                : "pointer",

                                        transition: "all .25s ease",
                                    }}
                                >
                                    {loadingQueueStatus === 1 ? (
                                        <CircularProgress
                                            size={16}
                                            thickness={5}
                                            sx={{ color: "#fff" }}
                                        />
                                    ) : (
                                        <Box
                                            sx={{
                                                width: 26,
                                                height: 26,
                                                borderRadius: "50%",
                                                bgcolor: "#fff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "9px",
                                                fontWeight: 900,
                                                color: queueOpen
                                                    ? "#16a34a"
                                                    : "#dc2626",
                                                boxShadow: "0 2px 6px rgba(0,0,0,.15)",
                                                transition: "all .25s ease",
                                            }}
                                        >
                                            {queueOpen ? "ON" : "OFF"}
                                        </Box>
                                    )}
                                </Box>

                            </Box>
                        }


                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>



                            <Box
                                sx={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,.18)",
                                    backdropFilter: "blur(10px)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 15px 35px rgba(0,0,0,.15)",
                                    border: "1px solid rgba(255,255,255,.3)",
                                    my: 1,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 32,
                                    }}
                                >
                                    <ConfirmationNumberRoundedIcon
                                        sx={{
                                            fontSize: 45,
                                            color: "#fff",
                                        }}
                                    />
                                </Typography>
                            </Box>


                            <Typography
                                sx={{
                                    fontSize: 24,
                                    fontWeight: 900,
                                    color: "#fff",
                                    letterSpacing: .2,
                                }}
                            >
                                لا توجد تذاكر حالياً
                            </Typography>
                        </Box>


                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>

                            <Typography
                                sx={{
                                    maxWidth: 260,
                                    fontSize: 14,
                                    color: "rgba(255,255,255,.85)",
                                    lineHeight: 1.8,
                                    fontWeight: 500,
                                }}
                            >
                                جميع التذاكر تمت معالجتها بنجاح

                                ستظهر التذاكر الجديدة هنا تلقائياً
                            </Typography>
                        </Box>

                    </Box>

                ) : (

                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: "column", md: "column" },
                        // alignItems:'center',
                        // justifyContent:'center',

                        gap: 2,
                        // mt:2,
                    }}>
                        {
                            <Box sx={{
                                display: "flex",
                                // flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>

                                <Box
                                    sx={{
                                        px: 2,
                                        py: 0.7,
                                        borderRadius: 20,
                                        bgcolor: "#ffffffa0",
                                        border: "1px solid rgba(255,255,255,.25)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",

                                            background: queueOpen
                                                ? "#22c55e"
                                                : "#ef4444",

                                            animation: "pulse 1.5s infinite",
                                            boxShadow: queueOpen
                                                ? "0 0 0 0 rgba(34,197,94,.7)"
                                                : "0 0 0 0 rgba(239,68,68,.7)",

                                        }}
                                    />

                                    <Typography
                                        sx={{
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            letterSpacing: 1,
                                            color: queueOpen
                                                ? "success.main"
                                                : "error.main",
                                        }}
                                    >
                                        {queueOpen
                                            ? "النظام جاهز لاستقبال الزبائن"
                                            : "النظام متوقف مؤقتاً"}
                                    </Typography>
                                </Box>

                                <Box
                                    onClick={
                                        loadingQueueStatus === 1
                                            ? undefined
                                            : handleQueueToggle
                                    }
                                    sx={{
                                        width: 55,
                                        height: 30,
                                        borderRadius: "20px",
                                        p: "2px",

                                        bgcolor:
                                            loadingQueueStatus === 1
                                                ? "#9ca3af"
                                                : queueOpen
                                                    ? "#22c55e"
                                                    : "#ef4444",

                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent:
                                            loadingQueueStatus === 1
                                                ? "center"
                                                : queueOpen
                                                    ? "flex-end"
                                                    : "flex-start",

                                        cursor:
                                            loadingQueueStatus === 1
                                                ? "default"
                                                : "pointer",

                                        transition: "all .25s ease",
                                    }}
                                >
                                    {loadingQueueStatus === 1 ? (
                                        <CircularProgress
                                            size={16}
                                            thickness={5}
                                            sx={{ color: "#fff" }}
                                        />
                                    ) : (
                                        <Box
                                            sx={{
                                                width: 26,
                                                height: 26,
                                                borderRadius: "50%",
                                                bgcolor: "#fff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "9px",
                                                fontWeight: 900,
                                                color: queueOpen
                                                    ? "#16a34a"
                                                    : "#dc2626",
                                                boxShadow: "0 2px 6px rgba(0,0,0,.15)",
                                                transition: "all .25s ease",
                                            }}
                                        >
                                            {queueOpen ? "ON" : "OFF"}
                                        </Box>
                                    )}
                                </Box>

                            </Box>
                        }


                        <Box sx={{
                            display: 'flex',
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: { xs: 'center', md: 'center' },
                            justifyContent: 'space-between',

                            gap: 2,
                            // mt:2,
                        }}>


                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: "row", md: "row" },
                                    // alignItems: { md: "center" },
                                    // justifyContent: { xs: "center", md: "flex-start" },
                                    gap: 2,
                                    // position: "relative",
                                    // zIndex: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    // gap: 3,
                                }}
                            >





                                <Box
                                    sx={{
                                        minWidth: 100,
                                        p: 2,
                                        borderRadius: 3,
                                        border: "1px solid rgba(255,255,255,.2)",
                                        background: "rgba(255,255,255,.1)",
                                        backdropFilter: "blur(12px)",
                                        display: "flex",
                                        flexDirection: "column",
                                        //  flexDirection: { xs: "column", md: "row" },
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "10px",
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            letterSpacing: 2,
                                            opacity: 0.8,
                                            mb: 0.5,
                                        }}
                                    >
                                        تذكرة نشطة
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: "2.25rem",
                                                md: "3rem",
                                            },
                                            fontWeight: 900,
                                            lineHeight: 1,
                                        }}
                                    >
                                        N°{CurrentTicket?.ticket_number}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: "1.25rem",
                                                md: "1.6rem",
                                            },
                                            fontWeight: 900,
                                        }}
                                    >
                                        {CurrentTicket?.customer?.name}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            mt: 1,
                                            opacity: 0.9,
                                        }}
                                    >
                                        <RoomServiceOutlinedIcon sx={{ fontSize: 18 }} />

                                        <Typography
                                            sx={{
                                                fontSize: "0.9rem",
                                            }}
                                        >
                                            {CurrentTicket?.service?.name}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    position: "relative",
                                    zIndex: 2,
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    gap: { xs: 1, md: 2 },
                                }}
                            >
                                {/* <Box
                                sx={{
                                    display: {
                                        xs: "none",
                                        sm: "flex",
                                    },
                                    flexDirection: "column",
                                    alignItems: "flex-end",
                                    px: 2,
                                    borderRight: "1px solid rgba(255,255,255,.2)",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "10px",
                                        fontWeight: 700,
                                        opacity: 0.7,
                                        textTransform: "uppercase",
                                        letterSpacing: 2,
                                    }}
                                >
                                    وقت الخدمة
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: "1.25rem",
                                        fontWeight: 900,
                                    }}
                                >
                                    04:22
                                </Typography>
                            </Box> */}

                                {
                                    loadingStartService === 1 || loadingCompleteService === 1 ? (

                                        <Button
                                            disabled
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: 1,
                                                height: 48,
                                                px: 3,
                                                borderRadius: 3,
                                                bgcolor: "#fff",
                                                color: "primary.main",
                                                fontWeight: 800,
                                                boxShadow: 3,
                                            }}
                                        >
                                            <CircularProgress
                                                size={22}
                                                color="primary"
                                            />

                                            {/* <Typography>
                                                جاري البدء...
                                            </Typography> */}

                                        </Button>

                                    ) : CurrentTicket?.status === "serving" ? (

                                        <Button
                                            onClick={handleCompleteService}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: 1,
                                                height: 48,
                                                px: 3,
                                                borderRadius: 3,
                                                background: "linear-gradient(135deg,#16a34a,#22c55e)",
                                                color: "#fff",
                                                fontWeight: 800,
                                                boxShadow: "0 8px 20px rgba(34,197,94,.35)",
                                            }}
                                        >
                                            <CheckCircleOutlinedIcon />

                                            <Typography>
                                                إتمام الخدمة
                                            </Typography>

                                        </Button>

                                    ) : (

                                        <Button
                                            onClick={handleStartService}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: 1,
                                                height: 48,
                                                px: 3,
                                                borderRadius: 3,
                                                bgcolor: "#fff",
                                                color: "primary.main",
                                                fontWeight: 800,
                                                boxShadow: "0 8px 20px rgba(37,99,235,.35)",
                                            }}
                                        >
                                            <PlayCircleFilledIcon />

                                            <Typography>
                                                بدء الخدمة
                                            </Typography>

                                        </Button>

                                    )
                                }




                                {CurrentTicket?.created_by === "manual" ?

                                    (<IconButton
                                        component="a"
                                        href={`tel:${CurrentTicket.customer.phone}`}
                                        sx={{

                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 1,
                                            height: 48,
                                            px: 1.5,
                                            borderRadius: 3,
                                            bgcolor: "#6D28D9",
                                            color: "#fff",
                                            boxShadow: "0 8px 20px rgba(109,40,217,.35)",
                                            fontWeight: 800,
                                            boxShadow: "0 8px 20px rgba(37,99,235,.35)",
                                        }}>
                                        <PhoneForwardedIcon />
                                    </IconButton>
                                    ) : (

                                        loadingRecallUser === 1 ? (
                                            <IconButton

                                                sx={{
                                                    p: 1.5,
                                                    borderRadius: 3,
                                                    bgcolor: "#c90303",
                                                    border: "1px solid rgba(255,255,255,.2)",
                                                    bgcolor: "rgb(219, 255, 226)",
                                                    fontWeight: 800,
                                                    boxShadow: 3,
                                                    "&:hover": {
                                                        bgcolor: "rgb(219, 255, 226)",
                                                    },

                                                    "&:focus": {
                                                        bgcolor: "rgb(219, 255, 226)",
                                                    },
                                                }}
                                            >
                                                {/* <CircularProgress
                                            size={22}
                                            sx={{ color: "#fff" }}
                                        /> */}



                                                <Box
                                                    sx={{
                                                        position: "relative",
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    {/* أيقونة النداء */}
                                                    <NotificationsActiveIcon
                                                        sx={{
                                                            color: "#22c55e",
                                                            // fontSize: 25,

                                                            animation: "bellPulse 1s ease-in-out infinite",

                                                            "@keyframes bellPulse": {
                                                                "0%, 100%": {
                                                                    transform: "scale(1)",
                                                                    opacity: 0.8,
                                                                },

                                                                "50%": {
                                                                    transform: "scale(1)",
                                                                    opacity: 1,
                                                                },
                                                            },
                                                        }}
                                                    />

                                                    {/* القوس الأول */}
                                                    <Box
                                                        sx={{
                                                            position: "absolute",
                                                            top: 1,
                                                            right: -1,
                                                            width: 7,
                                                            height: 7,

                                                            borderTop: "3px solid #86efac",
                                                            borderRight: "3px solid #86efac",
                                                            borderTopRightRadius: "100%",

                                                            transform: "rotate(0deg)",

                                                            animation: "signalWave 1.2s ease-out infinite",
                                                        }}
                                                    />

                                                    {/* القوس الثاني */}
                                                    <Box
                                                        sx={{
                                                            position: "absolute",
                                                            top: -3,
                                                            right: -6,
                                                            width: 11,
                                                            height: 11,

                                                            borderTop: "3px solid #22c55e",
                                                            borderRight: "3px solid #22c55e",
                                                            borderTopRightRadius: "100%",

                                                            animation: "signalWave 1.2s ease-out infinite",
                                                            animationDelay: "0.2s",
                                                        }}
                                                    />

                                                    {/* القوس الثالث */}
                                                    <Box
                                                        sx={{
                                                            position: "absolute",
                                                            top: -7,
                                                            right: -10,
                                                            width: 15,
                                                            height: 15,

                                                            borderTop: "3px solid #16a34a",
                                                            borderRight: "3px solid #16a34a",
                                                            borderTopRightRadius: "100%",

                                                            animation: "signalWave 1.2s ease-out infinite",
                                                            animationDelay: "0.4s",
                                                        }}
                                                    />

                                                    <style>
                                                        {`
                                                @keyframes signalWave {
                                                    0% {
                                                        opacity: 0;
                                                        transform: scale(0.7);
                                                    }

                                                    30% {
                                                        opacity: 1;
                                                    }

                                                    100% {
                                                        opacity: 0;
                                                        transform: scale(1.15);
                                                    }
                                                }
                                            `}
                                                    </style>
                                                </Box>

                                            </IconButton>

                                        ) : (
                                            <IconButton
                                                onClick={handelRecallUser}
                                                title="إعادة النداء"
                                                sx={{
                                                    p: 1.5,
                                                    borderRadius: 3,
                                                    border: "1px solid rgba(255,255,255,.2)",
                                                    bgcolor: "rgba(255,255,255,.1)",
                                                    color: "#fff",
                                                    boxShadow: 3,
                                                    "&:hover": {
                                                        bgcolor: "rgba(255,255,255,.1)",
                                                    },

                                                    "&:focus": {
                                                        bgcolor: "rgba(255,255,255,.1)",
                                                    },

                                                }}
                                            >
                                                <NotificationsActiveIcon />


                                            </IconButton>
                                        )


                                    )



                                }











                                {
                                    loadingCancelService === 1 ? (

                                        <IconButton
                                            sx={{
                                                p: 1.5,
                                                borderRadius: 3,
                                                bgcolor: "#c90303",
                                                fontWeight: 800,
                                                boxShadow: 3,
                                            }}
                                        >
                                            <CircularProgress
                                                size={22}
                                                sx={{ color: "#fff" }}
                                            />
                                        </IconButton>
                                    ) : (

                                        <IconButton
                                            onClick={handleCancelService}
                                            title="إلغاء"
                                            sx={{
                                                p: 1.5,
                                                borderRadius: 3,
                                                bgcolor: "#c90303",
                                                color: "#fff",
                                                boxShadow: 3,

                                            }}
                                        >
                                            <CancelOutlinedIcon />
                                        </IconButton>
                                    )
                                }
                            </Box>
                        </Box>
                    </Box>
                )
            }
        </Box>

    )
}

export default ViewCurrentTicket
