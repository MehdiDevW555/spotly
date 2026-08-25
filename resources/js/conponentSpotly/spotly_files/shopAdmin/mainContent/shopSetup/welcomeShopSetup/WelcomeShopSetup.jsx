
import React from "react";
import {
    Box,
    Typography,
    Button,
    IconButton,
} from "@mui/material";
import { keyframes } from "@mui/system";

import BoltIcon from "@mui/icons-material/Bolt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LanguageIcon from "@mui/icons-material/Language";
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import screen1 from './../../../../../../../img/app/screen1.png'
import { useDispatch } from "react-redux";
import { ChangePagesShopSetup } from "../../../../../../redux/slices/shopAdmin/ShopAdmin_slice";
import SwipeButton from "../../../../../otherFiles/swipeButton/SwipeButton";
export default function WelcomeShopSetup() {

    const revealAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) scale(.5);
    filter: blur(12px);
  }

  to {
    opacity: 1;
    transform: translateX(-50%) scale(1);
    filter: blur(0);
  }
`;

    const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;



    let dispatch = useDispatch()
    let handelChangePage = () => {
        dispatch(ChangePagesShopSetup('InfoShopSetup'))
    }
    return (
        <Box
            dir="rtl"
            sx={{
                height: "100vh",
                overflow: "hidden",
                position: "relative",
                // userSelect: "none",
                bgcolor: "#000",
            }}
        >
            {/* Background */}
            <Box
                component="img"

                // src="https://lh3.googleusercontent.com/aida/AP1WRLtdz9xbPeKdRZviv72kiQQpsbkZTnVg3KN5Bhd5uUQ-s-gbCfNvxculb9K13w4vQhWp5Gspn4ARvyZB3plANt7INkxmKUMMw2D1lr8nWPsrZuNlXza3X_4Jt_nkv_hmCGDA0QcgvGqJUIFIWFVIDybHe2hbVCVq4zgMmd4MR-UDbKa2Zq8c64G96FW_AWBYsTyAYf8w3RUwd3QF2dtJTV3Fep9ULWXiWP0zXLQ62MgSmXMlfMcrdt34Og"
                src={screen1}
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    animation: "slowZoom 40s linear infinite alternate",
                    transform: "scale(1.05)",
                    zIndex: 0,

                    "@keyframes slowZoom": {
                        from: {
                            transform: "scale(1)",
                        },
                        to: {
                            transform: "scale(1.15)",
                        },
                    },
                }}
            />

            {/* Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,.7) 100%)",
                    zIndex: 1,
                }}
            />

            {/* Logo */}
            <Box
                sx={{
                    position: "absolute",
                    top: 120,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    gap: 1,
                    zIndex: 3,
                    animation: `${revealAnimation} 1s cubic-bezier(0.22, 1, 0.36, 1)`,
                }}
            >
                {/* <Typography
                    sx={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: { xs: 35, md: 40 },
                        letterSpacing: 2,
                    }}
                >
                    Spotly
                </Typography> */}

                <Box
                    component="img"
                    src="/images/spotlyLogo.png"
                    alt="Spotly Logo"
                    sx={{
                        bgcolor: '#2e0f49',
                        // bgcolor:'#dbbcfd',
                        px: 2,
                        borderRadius: { xs: 3, md: 4 },
                        width: {
                            xs: 200,
                            sm: 150,
                            md: 200,
                        },
                        height: {
                            xs: 70,
                            sm: 80,
                            md: 80,
                        },
                        zIndex: 2,
                    }}
                />


            </Box>

            {/* Center Content */}
            <Box
                sx={{
                    mt: { xs: -3, md: 0 },
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 3,
                    textAlign: "center",
                    animation: `${fadeUp} .7s ease-out .2s both`,
                }}
            >
                <Box
                    sx={{
                        maxWidth: 850,
                    }}
                >
                    <Typography
                        sx={{
                            color: "#b4c5ff",
                            fontSize: 30,
                            letterSpacing: 4,
                            mt: { xs: 5, md: 8 },
                            mb: { xs: 1, md: 0 },
                        }}
                    >
                        بداية جديدة
                    </Typography>

                    <Typography
                        sx={{
                            color: "#fff",
                            fontWeight: 800,
                            fontSize: {
                                xs: 35,
                                md: "4rem",
                            },
                            lineHeight: 1.2,
                            mb: 1,
                        }}
                    >
                        مرحباً بك في رحلتك الجديدة
                    </Typography>

                    <Typography
                        sx={{
                            color: "rgba(255,255,255,.75)",
                            fontSize: {
                                xs: "1rem",
                                md: "1.2rem",
                            },
                            lineHeight: 1.9,
                            maxWidth: 700,
                            mx: "auto",
                            mb: 3,
                        }}
                    >
                        قم ببناء قوائم انتظار ذكية لعملائك، وحوّل صالات الانتظار
                        إلى رحلة سلسة من خلال حلولنا الرقمية المبتكرة. نحن هنا
                        لمساعدتك على البدء فوراً.
                    </Typography>


                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>

                        <SwipeButton handelChangePage={handelChangePage} />
                    </Box>


                </Box>
            </Box>


        </Box>
    );
}
