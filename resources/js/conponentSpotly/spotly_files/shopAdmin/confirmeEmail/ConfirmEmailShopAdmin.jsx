import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';


function ConfirmEmailShopAdmin() {


    return (

        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#121315",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 2,
            }}
        >
            {/* Glow Top Right */}
            <Box
                sx={{
                    position: "absolute",
                    width: 800,
                    height: 400,
                    borderRadius: "50%",
                    bgcolor: "#7000FF",
                    top: "-10%",
                    right: "-5%",
                    opacity: 0.15,
                    filter: "blur(80px)",
                }}
            />

            {/* Glow Bottom Left */}
            <Box
                sx={{
                    position: "absolute",
                    width: 700,
                    height: 350,
                    borderRadius: "50%",
                    bgcolor: "#635bff",
                    bottom: "-5%",
                    left: "-10%",
                    opacity: 0.15,
                    filter: "blur(80px)",
                }}
            />

            {/* Card */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 650,
                    p: { xs: 3, md: 6 },
                    borderRadius: "24px",
                    backdropFilter: "blur(12px)",
                    background: "rgba(255,255,255,0.03)",
                    // border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    zIndex: 2,
                }}
            >
                {/* Logo */}
                <Box
                    component="img"
                    src="/images/spotlyLogo.png"
                    alt="Spotly"
                    sx={{
                        height: {
                            xs: 70,
                            md: 110,
                        },
                        width: {
                            xs: 150,
                            md: 250,
                        },
                        mb: {
                            xs: 1,
                            md: 1,
                        },
                    }}
                />

                {/* Title */}
                <Typography
                    sx={{
                        color: "#E3E2E3",
                        fontSize: {
                            xs: "2rem",
                            md: "2.5rem",
                        },
                        fontWeight: 700,
                        mb: 2,
                    }}
                >
                    كود التحقق
                </Typography>

                {/* Description */}
                <Typography
                    sx={{
                        color: "#C7C4D8",
                        fontSize: "1rem",
                        maxWidth: 350,
                        mb: 5,
                    }}
                >
                    أدخل الكود المكون من 6 أرقام المرسل إلى بريدك الإلكتروني
                </Typography>

                {/* OTP Field */}
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: {
                            xs: 320,
                            md: 420,
                        },
                        height: 80,
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        color: "#C3C0FF",
                        fontSize: {
                            xs: "2rem",
                            md: "3rem",
                        },
                        fontWeight: 800,
                        letterSpacing: "0.5em",
                        mb: 5,
                    }}
                >
                    000000
                </Box>

                {/* Verify Button */}
                <Box
                    sx={{
                        width: "100%",
                        height: 60,
                        borderRadius: "12px",
                        bgcolor: "#635bff",
                        color: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        mb: 4,

                        "&:hover": {
                            bgcolor: "#7000FF",
                        },
                    }}
                >
                    تحقق
                </Box>

                {/* Timer */}
                <Typography
                    sx={{
                        color: "#A7CAF3",
                        mb: 1,
                    }}
                >
                    00:59
                </Typography>

                {/* Resend */}
                <Typography
                    sx={{
                        color: "#C7C4D8",
                        opacity: 0.5,
                    }}
                >
                    إعادة إرسال الكود
                </Typography>

                {/* Support */}
                <Typography
                    sx={{
                        mt: 5,
                        color: "#C7C4D8",
                    }}
                >
                    تحتاج للمساعدة؟
                    <Box
                        component="span"
                        sx={{
                            color: "#C3C0FF",
                            cursor: "pointer",
                            mr: 1,
                        }}
                    >
                        تواصل مع الدعم الفني
                    </Box>
                </Typography>
            </Box>
        </Box>



    )
}

export default ConfirmEmailShopAdmin
