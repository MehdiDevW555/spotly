import React, { useEffect, useState } from 'react'
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
} from "@mui/material";


import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import AddIcon from "@mui/icons-material/Add";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import RoomServiceIcon from '@mui/icons-material/RoomService';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeCurrentPage, ChangePreviousPage, ChangeToggleDialogCreateTicket } from '../../../../../redux/slices/shopAdmin/ShopAdmin_slice';
import CreateTicket from '../../../../dialog/shopAdmin/mainContent/queues/CreateTicket';
import { cancelService_selector, completeService_selector, getAllTicket_selector, getCurrentTicket_selector, getQueueStatus_selector, getService_selector, startService_selector, toggleChangeStatusService_selector, toggleDialogCreateTicket_selector } from '../../../../../redux/selectors/shopAdmin/ShopAdmin_selector';
import API_GET_ALL_TICKET from '../../../../api/shopAdmin/queue/API_GET_ALL_TICKET';
import API_GET_CURRENT_TICKET from '../../../../api/shopAdmin/queue/API_GET_CURRENT_TICKET';
import ViewCurrentTicket from './viewCurrentTicket/ViewCurrentTicket';
import LoadingScreen from '../../loadingScreen/LoadingScreen';
import Loading from '../../../../otherFiles/loading/Loading';
import WaitingList from './waitingList/WaitingList';
import QueueSkilton from './queueSkilton/QueueSkilton';
import QueueHeader from './queueHeader/QueueHeader';
import TrialAlert from '../dashboard/trialAlert/TrialAlert';


function Queues(props) {
    let { idShop, openDialogCreateTicket, getSubscription , services , maxServices } = props
    const [openFab, setOpenFab] = useState(false);
    let dispatch = useDispatch()
    // let toggleDialogCreateTicket = useSelector(toggleDialogCreateTicket_selector)
    let getAllTicket = useSelector(getAllTicket_selector)
    let tickets = getAllTicket?.tickets
    let ticketsLoading = getAllTicket?.loading
    let getCurrentTicket = useSelector(getCurrentTicket_selector)
    let CurrentTicket = getCurrentTicket?.CurrentTicket
    let loadingCurrentTicket = getCurrentTicket?.loading
    let startService = useSelector(startService_selector)
    let tUEFFStartService = startService?.TUEFF
    let completeService = useSelector(completeService_selector)
    let tUEFFCompleteService = completeService?.TUEFF
    let toggleChangeStatusService = useSelector(toggleChangeStatusService_selector)

    //  let startService = useSelector(startService_selector)
    let loadingStartService = startService?.loading
    // let completeService = useSelector(completeService_selector)
    let loadingCompleteService = completeService?.loading
    let cancelService = useSelector(cancelService_selector)
    let loadingCancelService = cancelService?.loading


    let getQueueStatus = useSelector(getQueueStatus_selector)


    console.log(tUEFFCompleteService)

    let getService = useSelector(getService_selector)

    let handelGoCreateService = () => {
        if (getService?.services?.length > 0) {
            dispatch(ChangeCurrentPage('CreateService'))

        } else {
            dispatch(ChangeCurrentPage('Services'))

        }
        dispatch(ChangePreviousPage('Queues'))
    }


    const isServing = true;

    const initials = "مس";
    const name = "محمد بن سلطان";
    const service = "خدمة كبار العملاء";
    const ticket = "A015";
    const waitTime = "13:53 د";
    const waitMinutes = 13;





    // useEffect(() => {
    //     API_GET_CURRENT_TICKET(dispatch, idShop)
    //     API_GET_ALL_TICKET(dispatch, idShop)
    // }, [toggleChangeStatusService])


    const remainingDays = Math.max(
        0,
        Math.ceil(
            (
                new Date(getSubscription?.subscription?.ends_at) -
                new Date()
            ) / (1000 * 60 * 60 * 24)
        )
    );


    return (

        <Box sx={{
            mt: 11,
            mb: 15,
        }}>
            {remainingDays <= 6 && (
                <Box sx={{ mx: 1, my: 2 }}>
                    <TrialAlert getSubscription={getSubscription} />
                </Box>
            )}





            <Box dir="rtl"
                sx={{

                    // minHeight: "100vh",
                    // position: 'relative',*
                    display: 'flex',
                    flexDirection: 'column',
                    mx: { xs: 0, md: 2 },
                    p: { xs: 2, md: 3 },
                    // bgcolor: "#ffffff",
                    borderTop: '8px solid #9000ff',
                    borderRadius: '50px 50px 0px 0px',
                    // height: "calc(100vh - 96px)",
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                        width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                        marginTop: "30px",
                    },

                    "&::-webkit-scrollbar-thumb": {
                        bgcolor: "#9000FF",
                        borderRadius: "10px",

                    }
                }}>


                {/* <QueueHeader getCurrentTicket={getCurrentTicket} getAllTicket={getAllTicket} /> */}


                <ViewCurrentTicket getQueueStatus={getQueueStatus} getCurrentTicket={getCurrentTicket} idShop={idShop} toggleChangeStatusService={toggleChangeStatusService} />


                <WaitingList getAllTicket={getAllTicket} getCurrentTicket={getCurrentTicket} openDialogCreateTicket={openDialogCreateTicket} />


                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        position: "fixed",
                        bottom: { xs: 50, md: 50 },
                        left: { xs: 20, md: 40 },
                        zIndex: 1300,
                        // display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: 1.5,
                    }}
                >
                    <Zoom unmountOnExit in={openFab}>
                        <Button
                            onClick={openDialogCreateTicket}
                            elevation={8}
                            sx={{
                                px: 2,
                                py: 1.5,
                                borderRadius: "999px",
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                cursor: "pointer",
                                backdropFilter: "blur(20px)",
                                color: "rgba(255, 255, 255, 0.95)",
                                background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
                            }}
                        >
                            <ConfirmationNumberIcon
                                x={{ color: "#fff" }}
                                fontSize="small"
                            />

                            <Typography
                                fontSize={13}
                                fontWeight={700}
                            >
                                تذكرة جديدة
                            </Typography>
                        </Button>
                    </Zoom>

                  {getService?.services?.length < maxServices && <Zoom
                        unmountOnExit

                        in={openFab}
                        style={{ transitionDelay: "75ms" }}
                    >
                        <Button
                            onClick={handelGoCreateService}
                            elevation={8}
                            sx={{
                                px: 2,
                                py: 1.5,
                                borderRadius: "999px",
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                cursor: "pointer",
                                backdropFilter: "blur(20px)",
                                bgcolor: "rgba(153, 0, 255, 0.95)",
                                color: "#fff",
                                boxShadow: 6,
                            }}
                        >
                            <RoomServiceIcon
                                sx={{ color: "#fff" }}
                                fontSize="small"
                            />

                            <Typography
                                fontSize={13}
                                fontWeight={700}
                            >
                                إضافة خدمة
                            </Typography>
                        </Button>
                    </Zoom>}

                    <Fab
                        onClick={() => setOpenFab(!openFab)}
                        sx={{
                            background: "linear-gradient(to right, #DA22FF 0%, #9733EE 51%, #DA22FF 100%)",
                            background: "linear-gradient(to right, #870000 0%, #190A05 100%)",
                            background: "linear-gradient(135deg,#9000ff,#2196f3)",
                            color: "#fff",
                            // border: "3px solid rgb(0, 153, 255)",
                            width: 65,
                            height: 65,
                            boxShadow:
                                "0px 10px 10px rgba(73, 73, 73, 0.9)",

                            "&:hover": {
                                bgcolor: "#0283ed",
                            },

                            "&:active": {
                                bgcolor: "#0283ed",
                            },

                            "&:focus": {
                                bgcolor: "#0283ed",
                            },

                            "&.Mui-focusVisible": {
                                bgcolor: "#0283ed",
                            },
                        }}
                    >
                        <AddIcon
                            sx={{
                                fontSize: 30,
                                transition: ".3s",
                                transform: openFab
                                    ? "rotate(45deg)"
                                    : "rotate(0deg)",
                            }}
                        />
                    </Fab>
                </Box>



            </Box>


        </Box>

    )
}

export default Queues
