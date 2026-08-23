import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    useMediaQuery,
    Slide,
    Divider,
    IconButton,
    Drawer,
    ClickAwayListener,
    Button
} from "@mui/material";
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
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import QrCode2Icon from '@mui/icons-material/QrCode2';
// import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { useSelector } from "react-redux";
import { createService_selector, currentPage_selector, getService_selector, pagesDashboard_selector, pagesServices_selector, pagesShopSetup_selector, previousPage_selector, toggleMenu_selector } from "../../../../redux/selectors/shopAdmin/ShopAdmin_selector";
import { changeCreateService, ChangeCurrentPage, ChangePagesDashboard, ChangePagesServices, ChangePagesShopSetup, ChangePreviousPage, changeToggleChangeStatusService, ChangeToggleMenu } from "../../../../redux/slices/shopAdmin/ShopAdmin_slice";
import Title from "./title/Title";
import ContentCutIcon from '@mui/icons-material/ContentCut';
import TvIcon from '@mui/icons-material/Tv';
import DvrIcon from '@mui/icons-material/Dvr';
import DownloadIcon from "@mui/icons-material/Download";
import InstallMobileIcon from '@mui/icons-material/InstallMobile';




export default function Sidebar(props) {
    let { dispatch } = props
    const currentPage = useSelector(currentPage_selector);
    let previousPage = useSelector(previousPage_selector)
    const toggleMenu = useSelector(toggleMenu_selector)
    // console.log(toggleMenu)
    let getServices = useSelector(getService_selector)
    let createService = useSelector(createService_selector)


    let tUEFF = createService?.TUEFF
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));


    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {

        const handleBeforeInstallPrompt = (event) => {

            console.log("🔥 BEFORE INSTALL PROMPT:", event);

            event.preventDefault();

            setDeferredPrompt(event);
            setIsInstalled(false);
        };

        const handleAppInstalled = () => {

            console.log("🔥 APP INSTALLED");

            setDeferredPrompt(null);
            setIsInstalled(true);
        };

        window.addEventListener(
            "beforeinstallprompt",
            handleBeforeInstallPrompt
        );

        window.addEventListener(
            "appinstalled",
            handleAppInstalled
        );

        const standalone =
            window.matchMedia("(display-mode: standalone)").matches ||
            window.navigator.standalone === true;

        if (standalone) {
            setIsInstalled(true);
        }

        return () => {

            window.removeEventListener(
                "beforeinstallprompt",
                handleBeforeInstallPrompt
            );

            window.removeEventListener(
                "appinstalled",
                handleAppInstalled
            );
        };

    }, []);

    const handleInstallApp = async () => {

        if (!deferredPrompt) {

            console.log(
                "❌ Install prompt غير متوفر"
            );

            return;
        }

        deferredPrompt.prompt();

        const { outcome } =
            await deferredPrompt.userChoice;

        console.log(
            "🔥 INSTALL RESULT:",
            outcome
        );

        setDeferredPrompt(null);
    };






    let openPageDashboard = () => {
        dispatch(ChangeCurrentPage('Dashboard'))
    }
    const closeMenu = () => {
        dispatch(ChangeToggleMenu()); // إخفاء الـ Drawer
    };
    // const isActive = currentPage === "Dashboard"
    const isActive = currentPage.startsWith("Services")
    return (
        <>

            {!isSmallScreen &&

                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        right: 0,
                        width: 250,
                        direction: "rtl",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,

                        // flex: 1,
                        mt: 10,
                        overflowY: "auto",        // ✅ هذا هو المهم
                        WebkitOverflowScrolling: "touch", // ✅ سكرول ناعم في الهاتف
                        "&::-webkit-scrollbar": { width: "4px" },
                        "&::-webkit-scrollbar-thumb": { backgroundColor: "#ccc", borderRadius: "4px" },
                        "&::-webkit-scrollbar-thumb:hover": { backgroundColor: "#999" },


                    }}
                >
                    <Box
                        sx={{
                            display: "none",
                            alignItems: "center",
                            // justifyContent:'center',
                            gap: 2,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            bgcolor: previousPage === 'Dashboard' ? "#dae2fd" : "transparent",
                            color: previousPage === 'Dashboard' ? "#004ac6" : "#555",
                            transition: "0.2s",

                            "&:hover": {
                                bgcolor: previousPage === 'Dashboard' ? "#dae2fd" : "#e9edf5",
                            },
                        }}
                        onClick={() => { dispatch(ChangeCurrentPage('Dashboard')), dispatch(ChangePreviousPage('Dashboard')) }}
                    >
                        <DashboardIcon />
                        <Typography fontWeight={700}>
                            الرئيسئة
                        </Typography>
                    </Box>

                    <Box
                        onClick={() => {
                            dispatch(ChangeCurrentPage('Queues'))
                            dispatch(ChangePreviousPage('Queues'))
                            // dispatch(changeToggleChangeStatusService())
                        }}

                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            bgcolor: previousPage === 'Queues' ? "#dae2fd" : "transparent",
                            color: previousPage === 'Queues' ? "#004ac6" : "#555",
                            transition: "0.2s",

                            "&:hover": {
                                bgcolor: previousPage === 'Queues' ? "#dae2fd" : "#e9edf5",
                            },
                        }}>
                        <DvrIcon />
                        <Typography>
                            قوائم الانتظار
                        </Typography>
                    </Box>

                    <Box
                        onClick={() => {
                            dispatch(ChangeCurrentPage('Tickets'))
                            dispatch(ChangePreviousPage('Tickets'))
                        }}
                        sx={{
                            display: "none",
                            alignItems: "center",
                            gap: 2,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            bgcolor: previousPage === 'Tickets' ? "#dae2fd" : "transparent",
                            color: previousPage === 'Tickets' ? "#004ac6" : "#555",
                            transition: "0.2s",

                            "&:hover": {
                                bgcolor: previousPage === 'Tickets' ? "#dae2fd" : "#e9edf5",
                            },
                        }}>
                        <ConfirmationNumberIcon />
                        <Typography>
                            التذاكر
                        </Typography>
                    </Box>



                    <Box
                        onClick={() => {
                            dispatch(ChangeCurrentPage('AvailableQrCode'))
                            dispatch(ChangePreviousPage('QrCode'))
                        }}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            bgcolor: previousPage === 'QrCode' ? "#dae2fd" : "transparent",
                            color: previousPage === 'QrCode' ? "#004ac6" : "#555",
                            transition: "0.2s",

                            "&:hover": {
                                bgcolor: previousPage === 'QrCode' ? "#dae2fd" : "#e9edf5",
                            },
                        }}>
                        <QrCodeScannerOutlinedIcon />
                        <Typography>
                            QR Code
                        </Typography>
                    </Box>





                    <Box

                        onClick={() => {
                            dispatch(ChangeCurrentPage('Customers'))
                            dispatch(ChangePreviousPage('Customers'))
                        }}
                        sx={{
                            display: "none",
                            alignItems: "center",
                            gap: 2,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            bgcolor: previousPage === 'Customers' ? "#dae2fd" : "transparent",
                            color: previousPage === 'Customers' ? "#004ac6" : "#555",
                            transition: "0.2s",

                            "&:hover": {
                                bgcolor: previousPage === 'Customers' ? "#dae2fd" : "#e9edf5",
                            },
                        }}>
                        <GroupIcon />
                        <Typography>
                            العملاء
                        </Typography>
                    </Box>

                    <Box
                        // onClick={() => { dispatch(ChangeCurrentPage('EmptyServices')), dispatch(ChangePreviousPage('Services')) }}
                        onClick={() => {
                            // dispatch(
                            //     ChangeCurrentPage(
                            //         getServices?.services?.length > 1 ? 'AvailableServices' : 'EmptyServices'
                            //     )
                            // )
                            dispatch(ChangeCurrentPage('Services'))
                            dispatch(ChangePreviousPage('Services'))
                            dispatch(changeCreateService({ TUEFF: !tUEFF }))
                        }}

                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            bgcolor: previousPage === 'Services' ? "#dae2fd" : "transparent",
                            color: previousPage === 'Services' ? "#004ac6" : "#555",
                            transition: "0.2s",

                            "&:hover": {
                                bgcolor: previousPage === 'Services' ? "#dae2fd" : "#e9edf5",
                            },
                        }}
                    >
                        <ContentCutIcon sx={{ transform: "rotate(-90deg)" }} />
                        <Typography>
                            الخدمات
                        </Typography>
                    </Box>

                    <Box
                        onClick={() => {
                            dispatch(ChangeCurrentPage('Employees'))
                            dispatch(ChangePreviousPage('Employees'))
                        }}
                        sx={{
                            display: "none",
                            alignItems: "center",
                            gap: 2,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            bgcolor: previousPage === 'Employees' ? "#dae2fd" : "transparent",
                            color: previousPage === 'Employees' ? "#004ac6" : "#555",
                            transition: "0.2s",

                            "&:hover": {
                                bgcolor: previousPage === 'Employees' ? "#dae2fd" : "#e9edf5",
                            },
                        }}>
                        <BadgeIcon />
                        <Typography>
                            الموظفون
                        </Typography>
                    </Box>

                    <Box
                        onClick={() => {
                            dispatch(ChangeCurrentPage('Notifications'))
                            dispatch(ChangePreviousPage('Notifications'))
                        }}
                        sx={{
                            display: "none",
                            alignItems: "center",
                            gap: 2,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            bgcolor: previousPage === 'Notifications' ? "#dae2fd" : "transparent",
                            color: previousPage === 'Notifications' ? "#004ac6" : "#555",
                            transition: "0.2s",

                            "&:hover": {
                                bgcolor: previousPage === 'Notifications' ? "#dae2fd" : "#e9edf5",
                            },
                        }}>
                        <NotificationsIcon />
                        <Typography>
                            التنبيهات
                        </Typography>
                    </Box>

                    <Box
                        onClick={() => {
                            dispatch(ChangeCurrentPage('Subscriptions'))
                            dispatch(ChangePreviousPage('Subscriptions'))
                        }}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            bgcolor: previousPage === 'Subscriptions' ? "#dae2fd" : "transparent",
                            color: previousPage === 'Subscriptions' ? "#004ac6" : "#555",
                            transition: "0.2s",

                            "&:hover": {
                                bgcolor: previousPage === 'Subscriptions' ? "#dae2fd" : "#e9edf5",
                            },
                        }}>
                        <CreditCardIcon />
                        <Typography>
                            الاشتراك
                        </Typography>
                    </Box>



                    <Box
                        onClick={handleInstallApp}
                        sx={{
                            display: "none",
                            alignItems: "center",
                            gap: 2,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            // bgcolor: "#dae2fd",
                            color: "#004ac6",
                            transition: "0.2s",
                            "&:hover": {
                                bgcolor: "#cbd7ff",
                            },
                        }}
                    >
                        <InstallMobileIcon />
                        <Typography>
                            تثبيت التطبيق
                        </Typography>
                    </Box>




                    <Box
                        onClick={() => {
                            dispatch(ChangeCurrentPage('Settings'))
                            dispatch(ChangePreviousPage('Settings'))
                        }}
                        sx={{
                            display: "none",
                            alignItems: "center",
                            gap: 2,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            bgcolor: previousPage === 'Settings' ? "#dae2fd" : "transparent",
                            color: previousPage === 'Settings' ? "#004ac6" : "#555",
                            transition: "0.2s",

                            "&:hover": {
                                bgcolor: previousPage === 'Settings' ? "#dae2fd" : "#e9edf5",
                            },
                        }}>
                        <SettingsIcon />
                        <Typography>
                            الإعدادات
                        </Typography>
                    </Box>
                </Box>
            }

            {isSmallScreen && toggleMenu &&

                <Drawer
                    anchor="right"
                    open={toggleMenu}
                    onClose={closeMenu}
                    sx={{
                        "& .MuiDrawer-paper": {
                            width: 260,
                            height: "100dvh",
                            borderRadius: "60px 0 0 0",

                        },
                    }}
                >
                    <Box
                        sx={{
                            //  bgcolor:'red',
                            flex: 1,
                            overflowY: "auto",
                            px: 2,
                            py: 1,
                            width: 260,
                            borderRadius: "50px 0 0 0",
                            direction: "rtl",
                        }}
                    >


                        <Box
                            sx={{
                                position: "absolute",
                                width: '100%',
                                height: 270,
                                borderRadius: "50%",
                                bgcolor: "rgba(124, 58, 237, 0.23)",
                                filter: "blur(120px)",
                                top: -100,
                                left: -50,
                                //  zIndex: 1300,
                            }}
                        />

                        <Title dispatch={dispatch} toggleMenu={toggleMenu} />
                        <Divider sx={{ my: 1 }} />
                        <Box
                            sx={{
                                display: "none",
                                alignItems: "center",
                                // justifyContent:'center',
                                gap: 2,
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                cursor: "pointer",
                                bgcolor: previousPage === 'Dashboard' ? "#dae2fd" : "transparent",
                                color: previousPage === 'Dashboard' ? "#004ac6" : "#555",
                                transition: "0.2s",

                                "&:hover": {
                                    bgcolor: previousPage === 'Dashboard' ? "#dae2fd" : "#e9edf5",
                                },
                            }}
                            onClick={() => {
                                dispatch(ChangeCurrentPage('Dashboard')),
                                    dispatch(ChangePreviousPage('Dashboard')),
                                    dispatch(ChangeToggleMenu())
                            }}
                        >
                            <DashboardIcon />
                            <Typography fontWeight={700}>
                                الرئيسية
                            </Typography>
                        </Box>

                        <Box
                            onClick={() => {
                                dispatch(ChangeCurrentPage('Queues'))
                                dispatch(ChangePreviousPage('Queues'))
                                // dispatch(changeToggleChangeStatusService())
                                dispatch(ChangeToggleMenu())
                            }}

                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                cursor: "pointer",
                                bgcolor: previousPage === 'Queues' ? "#dae2fd" : "transparent",
                                color: previousPage === 'Queues' ? "#004ac6" : "#555",
                                transition: "0.2s",

                                "&:hover": {
                                    bgcolor: previousPage === 'Queues' ? "#dae2fd" : "#e9edf5",
                                },
                            }}>
                            <DvrIcon />
                            <Typography>
                                قوائم الانتظار
                            </Typography>
                        </Box>

                        <Box
                            onClick={() => {
                                dispatch(ChangeCurrentPage('Tickets'))
                                dispatch(ChangePreviousPage('Tickets'))
                                dispatch(ChangeToggleMenu())
                            }}
                            sx={{
                                display: "none",
                                alignItems: "center",
                                gap: 2,
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                cursor: "pointer",
                                bgcolor: previousPage === 'Tickets' ? "#dae2fd" : "transparent",
                                color: previousPage === 'Tickets' ? "#004ac6" : "#555",
                                transition: "0.2s",

                                "&:hover": {
                                    bgcolor: previousPage === 'Tickets' ? "#dae2fd" : "#e9edf5",
                                },
                            }}>
                            <ConfirmationNumberIcon />
                            <Typography>
                                التذاكر
                            </Typography>
                        </Box>

                        <Box
                            onClick={() => {
                                dispatch(ChangeCurrentPage('AvailableQrCode'))
                                dispatch(ChangePreviousPage('QrCode'))
                                dispatch(ChangeToggleMenu())
                            }}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                cursor: "pointer",
                                bgcolor: previousPage === 'QrCode' ? "#dae2fd" : "transparent",
                                color: previousPage === 'QrCode' ? "#004ac6" : "#555",
                                transition: "0.2s",

                                "&:hover": {
                                    bgcolor: previousPage === 'QrCode' ? "#dae2fd" : "#e9edf5",
                                },
                            }}>
                            <QrCodeScannerOutlinedIcon />
                            <Typography>
                                QR Code
                            </Typography>
                        </Box>


                        <Box

                            onClick={() => {
                                dispatch(ChangeCurrentPage('Customers'))
                                dispatch(ChangePreviousPage('Customers'))
                                dispatch(ChangeToggleMenu())
                            }}
                            sx={{
                                display: "none",
                                alignItems: "center",
                                gap: 2,
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                cursor: "pointer",
                                bgcolor: previousPage === 'Customers' ? "#dae2fd" : "transparent",
                                color: previousPage === 'Customers' ? "#004ac6" : "#555",
                                transition: "0.2s",

                                "&:hover": {
                                    bgcolor: previousPage === 'Customers' ? "#dae2fd" : "#e9edf5",
                                },
                            }}>
                            <GroupIcon />
                            <Typography>
                                العملاء
                            </Typography>
                        </Box>

                        <Box
                            onClick={() => {

                                dispatch(ChangeCurrentPage('Services'))
                                dispatch(ChangePreviousPage('Services'))
                                dispatch(changeCreateService({ TUEFF: !tUEFF }))
                                dispatch(ChangeToggleMenu())
                            }}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                cursor: "pointer",
                                bgcolor: previousPage === 'Services' ? "#dae2fd" : "transparent",
                                color: previousPage === 'Services' ? "#004ac6" : "#555",
                                transition: "0.2s",

                                "&:hover": {
                                    bgcolor: previousPage === 'Services' ? "#dae2fd" : "#e9edf5",
                                },
                            }}
                        >
                            <ContentCutIcon sx={{ transform: "rotate(-90deg)" }} />
                            <Typography>
                                الخدمات
                            </Typography>
                        </Box>

                        <Box
                            onClick={() => {
                                dispatch(ChangeCurrentPage('Employees'))
                                dispatch(ChangePreviousPage('Employees'))
                                dispatch(ChangeToggleMenu())
                            }}
                            sx={{
                                display: "none",
                                alignItems: "center",
                                gap: 2,
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                cursor: "pointer",
                                bgcolor: previousPage === 'Employees' ? "#dae2fd" : "transparent",
                                color: previousPage === 'Employees' ? "#004ac6" : "#555",
                                transition: "0.2s",

                                "&:hover": {
                                    bgcolor: previousPage === 'Employees' ? "#dae2fd" : "#e9edf5",
                                },
                            }}>
                            <BadgeIcon />
                            <Typography>
                                الموظفون
                            </Typography>
                        </Box>

                        <Box
                            onClick={() => {
                                dispatch(ChangeCurrentPage('Notifications'))
                                dispatch(ChangePreviousPage('Notifications'))
                                dispatch(ChangeToggleMenu())
                            }}
                            sx={{
                                display: "none",
                                alignItems: "center",
                                gap: 2,
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                cursor: "pointer",
                                bgcolor: previousPage === 'Notifications' ? "#dae2fd" : "transparent",
                                color: previousPage === 'Notifications' ? "#004ac6" : "#555",
                                transition: "0.2s",

                                "&:hover": {
                                    bgcolor: previousPage === 'Notifications' ? "#dae2fd" : "#e9edf5",
                                },
                            }}>
                            <NotificationsIcon />
                            <Typography>
                                التنبيهات
                            </Typography>
                        </Box>

                        <Box
                            onClick={() => {
                                dispatch(ChangeCurrentPage('Subscriptions'))
                                dispatch(ChangePreviousPage('Subscriptions'))
                                dispatch(ChangeToggleMenu())
                            }}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                cursor: "pointer",
                                bgcolor: previousPage === 'Subscriptions' ? "#dae2fd" : "transparent",
                                color: previousPage === 'Subscriptions' ? "#004ac6" : "#555",
                                transition: "0.2s",

                                "&:hover": {
                                    bgcolor: previousPage === 'Subscriptions' ? "#dae2fd" : "#e9edf5",
                                },
                            }}>
                            <CreditCardIcon />
                            <Typography>
                                الاشتراك
                            </Typography>
                        </Box>

                        <Box
                            onClick={handleInstallApp}
                            sx={{
                                display: "none",
                                alignItems: "center",
                                gap: 2,
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                cursor: "pointer",
                                // bgcolor: "#dae2fd",
                                color: "#004ac6",
                                transition: "0.2s",
                                "&:hover": {
                                    bgcolor: "#cbd7ff",
                                },
                            }}
                        >
                            <InstallMobileIcon />
                            <Typography>
                                تثبيت التطبيق
                            </Typography>
                        </Box>

                        <Box
                            onClick={() => {
                                dispatch(ChangeCurrentPage('Settings'))
                                dispatch(ChangePreviousPage('Settings'))
                                dispatch(ChangeToggleMenu())
                            }}
                            sx={{
                                display: "none",
                                alignItems: "center",
                                gap: 2,
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                cursor: "pointer",
                                bgcolor: previousPage === 'Settings' ? "#dae2fd" : "transparent",
                                color: previousPage === 'Settings' ? "#004ac6" : "#555",
                                transition: "0.2s",

                                "&:hover": {
                                    bgcolor: previousPage === 'Settings' ? "#dae2fd" : "#e9edf5",
                                },
                            }}>
                            <SettingsIcon />
                            <Typography>
                                الإعدادات
                            </Typography>
                        </Box>

                    </Box>





                    <Box
                        onClick={() => window.location.href = '/shopAdmin/logout'}
                        sx={{
                            my: 2,
                            mx: 2,
                            p: 1.8,
                            borderRadius: 3,

                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'flex-end',
                            gap: 1.5,

                            cursor: "pointer",

                            bgcolor: "rgba(239,68,68,.12)",
                            border: "1px solid rgba(239,68,68,.25)",
                            color: "#ef4444",

                            "&:hover": {
                                bgcolor: "rgba(239,68,68,.18)",
                            },
                        }}
                    >

                        <Typography fontWeight={700}>
                            تسجيل الخروج
                        </Typography>
                        <LogoutRoundedIcon />
                    </Box>

                </Drawer>


            }
        </>
    );
}
