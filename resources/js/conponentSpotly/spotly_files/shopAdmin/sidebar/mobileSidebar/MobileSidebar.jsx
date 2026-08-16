

import React, { useState } from "react";
import {
    Box,
    Typography,
    IconButton,
    Fab,
    Zoom,
    Button,
    Grow
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";


import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DashboardIcon from "@mui/icons-material/Dashboard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import GroupIcon from "@mui/icons-material/Group";
import LayersIcon from "@mui/icons-material/Layers";
import BadgeIcon from "@mui/icons-material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsIcon from "@mui/icons-material/Settings";
import QueueIcon from "@mui/icons-material/Queue";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';

import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { changeCreateService, ChangeCurrentPage, changeOpenFeb, ChangePreviousPage, ChangeToggleDialogCreateTicket } from "../../../../../redux/slices/shopAdmin/ShopAdmin_slice";
import { createService_selector, currentPage_selector, getService_selector, openFeb_selector, previousPage_selector } from "../../../../../redux/selectors/shopAdmin/ShopAdmin_selector";
import { useSelector } from "react-redux";





function MobileSidebar(props) {
    let { dispatch } = props
    let openFeb = useSelector(openFeb_selector)
    console.log(openFeb)
    const currentPage = useSelector(currentPage_selector);
    let previousPage = useSelector(previousPage_selector)
    let createService = useSelector(createService_selector)
    let tUEFF = createService?.TUEFF

    let openDialogCreateTicket = () => {
        dispatch(ChangeToggleDialogCreateTicket())
        dispatch(changeOpenFeb())
    }
    let getService = useSelector(getService_selector)
    let handelGoCreateService = () => {
        dispatch(ChangePreviousPage('Services'))
        // dispatch(changeOpenFeb())

        if (getService?.services?.length > 0) {
            dispatch(ChangeCurrentPage('CreateService'))
            dispatch(changeOpenFeb())

        } else {
            dispatch(ChangeCurrentPage('Services'))
            dispatch(changeOpenFeb())

        }
        // dispatch(ChangePreviousPage('Queues'))

    }
    let toggleFeb = () => {
        dispatch(changeOpenFeb())
    }

    return (
        <Box
            sx={{
                display: { xs: "block", sm: "none" },
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                // border:2,

                zIndex: 999,
                height: 64,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    height: '100%',
                }}
            >
                {/* شكل الشريط */}
                <svg
                    viewBox="0 0 400 90"
                    preserveAspectRatio="none"
                    style={{
                        width: "100%",
                        height: "100%",
                        filter: "drop-shadow(0 -10px 5px rgba(0,0,0,.12))",
                    }}
                >
                    <path
                        d="
                            M0,30
                            C0,10 10,0 30,0

                            L135,0

                            C150,0 160,70 200,70
                            C240,70 245,0 265,0

                            L370,0

                            C390,0 400,10 400,30
                            L400,90
                            L0,90
                            Z
                            "
                        fill="#fff"
                    />
                </svg>



                <Box
                    sx={{
                        position: "absolute",
                        bottom: 95,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                        zIndex: 2000,

                        pointerEvents: openFeb ? "auto" : "none",
                    }}
                >

                    {/* تذكرة جديدة */}

                    <Grow
                        in={openFeb}
                        timeout={280}
                        style={{
                            // transformOrigin: "bottom center",
                        }}
                    >
                        <Box
                            onClick={openDialogCreateTicket}
                            // elevation={8}
                            sx={{
                                // px: 2,
                                width: 50,
                                height: 50,
                                // p: 1,
                                borderRadius: '30px 30px 0px 30px',
                                display: "flex",
                                alignItems: "center",
                                flexDirection: 'column',
                                justifyContent: 'center',
                                // gap: 0.5,
                                cursor: "pointer",
                                backdropFilter: "blur(20px)",
                                color: "rgba(255, 255, 255, 0.95)",
                                background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
                                boxShadow:
                                    "0px 5px 10px rgba(22, 132, 12, 0.9)",
                            }}
                        >

                            <ConfirmationNumberIcon
                                sx={{ color: "#fff" }}
                                fontSize="small"
                            />
                            <Typography sx={{
                                fontSize: 12, whiteSpace: "nowrap",
                            }}
                            >
                                تذكرة
                            </Typography>
                        </Box>
                    </Grow>


                    <Grow
                        in={openFeb}
                        timeout={300}
                        style={{
                            // transformOrigin: "bottom center",
                            transitionDelay: "80ms"
                        }}
                    >
                        <Box
                            onClick={handelGoCreateService}
                            elevation={8}
                            sx={{

                                width: 50,
                                height: 50,
                                borderRadius: "30px 30px 30px 0px",
                                display: "flex",
                                alignItems: "center",
                                flexDirection: 'column',
                                justifyContent: 'center',
                                cursor: "pointer",
                                // backdropFilter: "blur(20px)",
                                color: "rgba(255, 255, 255, 0.95)",
                                background: "#9E0DFF",

                                boxShadow:
                                    "0px 5px 10px rgba(130, 12, 132, 0.9)",
                            }}
                        >

                            <LayersIcon
                                x={{ color: "#fff" }}
                                fontSize='small'
                            />
                            <Typography sx={{
                                fontSize: 12, whiteSpace: "nowrap",
                            }}>
                                خدمة
                            </Typography>
                        </Box>
                    </Grow>








                </Box>


                {/* زر + */}


                <Fab
                    onClick={toggleFeb}
                    sx={{
                        position: "absolute",
                        top: -25,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 65,
                        height: 65,
                        // border: '2px dashed #F0E5F9',
                        background: "linear-gradient(135deg,#9000ff,#2196f3)",
                        background:
                            "linear-gradient(135deg, #743DB1 30%, #47CBE4 60%, #3989EC 100%)",
                        color: "#fff",
                        boxShadow:
                            "0px 7px 7px rgba(73,73,73,.9)",
                    }}
                >
                    <AddIcon
                        sx={{
                            fontSize: 30,
                            transition: "0.3s",
                            transform: openFeb
                                ? "rotate(45deg)"
                                : "rotate(0deg)"
                        }}
                    />
                </Fab>

                {/* الأيقونات */}
                <Box
                    sx={{

                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        pt: 1,
                        px: 1,
                    }}
                >

                    <Box
                        onClick={() => {
                            dispatch(ChangeCurrentPage('Queues'))
                            dispatch(ChangePreviousPage('Queues'))
                        }}
                        sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: 0,
                            color: previousPage === 'Queues'
                                ? "#1976d2"
                                : "#000000",
                            // transition: "0.3s",
                            // cursor: "pointer",


                        }}
                    >
                        <QueueIcon
                            sx={{
                                fontSize: 28,
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: 11,
                                // fontWeight: previousPage === 'Queues' ? 700 : 500,
                            }}
                        >
                            قوائم الانتظار
                        </Typography>
                    </Box>

                    <Box
                        onClick={() => {
                            dispatch(ChangeCurrentPage('AvailableQrCode'))
                            dispatch(ChangePreviousPage('QrCode'))
                        }}
                        sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: 0,
                            color: previousPage === 'QrCode'
                                ? "#16a34a"
                                : "#000000",
                            // transition: "0.3s",
                            // cursor: "pointer",

                            "&:hover": {
                                color: "#16a34a",
                                // transform:"translateY(-3px)",
                            }
                        }}
                    >
                        <QrCodeScannerOutlinedIcon />
                        <Typography
                            sx={{
                                fontSize: 11,
                                textAlign: "center",
                            }}
                        >
                            QR Code
                        </Typography>
                    </Box>

                    {/* فراغ الزر الأوسط */}
                    <Box sx={{ width: 80 }} />

                    <Box
                        onClick={() => {
                            dispatch(ChangeCurrentPage('Services'))
                            dispatch(ChangePreviousPage('Services'))
                            dispatch(changeCreateService({ TUEFF: !tUEFF }))
                        }}
                        sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: 0,
                            color:
                                currentPage === 'Services' ||
                                    currentPage === 'CreateServices' ||
                                    previousPage === 'Services'
                                    ? "#9333ea"
                                    : "#000000",
                        }}
                    >
                        <LayersIcon />
                        <Typography
                            sx={{
                                fontSize: 11,
                                textAlign: "center",
                            }}
                        >
                            الخدمات
                        </Typography>
                    </Box>

                    <Box
                        onClick={() => {
                            dispatch(ChangeCurrentPage('Subscriptions'))
                            dispatch(ChangePreviousPage('Subscriptions'))
                        }}
                        sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: 0,
                            color: previousPage === 'Subscriptions'
                                ? "#ff9100"
                                : "#000000",
                        }}
                    >
                        <CreditCardIcon />
                        <Typography
                            sx={{
                                fontSize: 11,
                                textAlign: "center",
                            }}
                        >
                            الاشتراك
                        </Typography>
                    </Box>

                </Box>




            </Box>
        </Box>

    );
}

export default MobileSidebar;
