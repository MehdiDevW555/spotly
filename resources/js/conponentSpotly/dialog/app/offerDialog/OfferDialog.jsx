import React, { useState, useEffect } from "react";
import { Box, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import offer from "../../../../../img/app/offer-first-20-customers.png";

export default function OfferDialog() {

    const [open, setOpen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        // التحقق من وجود الصورة وتحميلها
        const img = new Image();

        img.onload = () => {
            setImageLoaded(true);
        };

        img.onerror = () => {
            setImageLoaded(false);
        };

        img.src = offer;

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, []);

    useEffect(() => {

        // لا تبدأ المؤقت إلا بعد التأكد من تحميل الصورة
        if (!imageLoaded) return;

        const timer = setTimeout(() => {
            setOpen(true);
        }, 5000);

        return () => clearTimeout(timer);

    }, [imageLoaded]);

    // إذا الصورة غير موجودة أو لم يتم تحميلها
    // لا نظهر أي شيء
    if (!imageLoaded || !open) {
        return null;
    }

    return (
        <Box
            sx={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                display: "flex",
                justifyContent: {
                    xs: "center",
                    md: "start",
                },
                alignItems: {
                    xs: "center",
                    md: "flex-end",
                },
                bgcolor: { xs: "rgba(0, 0, 0, 0.64)", md: 'rgba(0, 0, 0, 0.64)' },
            }}
        >

            <Box
                sx={{
                    top: {
                        xs: -50,
                        md: -150,
                    },

                    right: {
                        xs: 0,
                        md: 100,
                    },

                    position: "relative",

                    borderRadius: "24px 24px 2px 24px",

                    p: "3px",

                    overflow: "visible",

                    animation: "slideFromRight .8s ease-out",

                    "@keyframes slideFromRight": {
                        from: {
                            transform: "translateX(120%)",
                        },
                        to: {
                            transform: "translateX(0)",
                        },
                    },

                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        borderRadius: "24px 24px 2px 24px",

                        background:
                            "linear-gradient(90deg,#0ab7ab,#4cc9f0,#9d4edd,#0ab7ab)",

                        backgroundSize: "300% 300%",

                        animation: "borderMove 3s linear infinite",

                        zIndex: 0,
                    },

                    "@keyframes borderMove": {
                        "0%": {
                            backgroundPosition: "0% 50%",
                        },

                        "100%": {
                            backgroundPosition: "300% 50%",
                        },
                    },
                }}
            >

                <Button
                    sx={{
                        position: "absolute",
                        top: -65,
                        left: {
                            xs: "70%",
                            md: "65%",
                        },

                        transform: "translateX(-50%)",

                        zIndex: 9999,

                        px: 4,
                        py: 1.5,

                        borderRadius: "10px",

                        whiteSpace: "nowrap",

                        fontSize: {
                            xs: 25,
                            md: 22,
                        },

                        fontWeight: 900,

                        color: "#fff",
                    }}
                >
                    سارع قبل نفاد العرض
                </Button>


                <Box
                    onClick={() => setOpen(false)}
                    sx={{
                        position: "absolute",

                        top: -60,
                        left: -20,

                        display: "flex",

                        alignItems: "center",
                        justifyContent: "center",

                        width: 55,
                        height: 55,

                        color: "#fff",

                        zIndex: 9999,

                        cursor: "pointer",


                    }}
                >
                    <CloseIcon />
                </Box>


                <Button
                    sx={{
                        position: "absolute",
                        display: 'none',

                        top: 8,

                        left: {
                            xs: 100,
                            md: 80,
                        },

                        transform: "translateX(-50%)",

                        zIndex: 9999,

                        px: {
                            xs: 1,
                            md: 1.5,
                        },

                        py: {
                            xs: 0,
                            md: 0.3,
                        },

                        borderRadius: "10px",

                        whiteSpace: "nowrap",

                        fontSize: {
                            xs: 15,
                            md: 10,
                        },

                        fontWeight: 900,

                        color: "#fff",

                        bgcolor: "#ff0000cc",
                    }}
                >
                    متبقي 5 أماكن
                </Button>


                <Button
                    sx={{
                        position: "absolute",
                        display: 'none',
                        top: 24,

                        left: {
                            xs: 100,
                            md: 70,
                        },

                        transform: "translateX(-50%)",

                        zIndex: 9997,

                        px: {
                            xs: 3,
                            md: 2,
                        },

                        py: {
                            xs: 1.5,
                            md: 0.5,
                        },

                        borderRadius: "10px",

                        whiteSpace: "nowrap",

                        fontSize: {
                            xs: 18,
                            md: 14,
                        },

                        fontWeight: 900,

                        color: "#fff",

                        bgcolor: "#00ffddcc",
                    }}
                >
                    15 من أصل 20
                </Button>


                <Box
                    sx={{
                        position: "absolute",

                        bottom: {
                            xs: -70,
                            md: -40,
                        },

                        left: 30,

                        display: "flex",

                        gap: 2,

                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <IconButton
                        sx={{
                            width: {
                                xs: 70,
                                md: 35,
                            },

                            height: {
                                xs: 70,
                                md: 35,
                            },

                            color: "#4cc9f0",

                            animation: "bounce 1.5s infinite",

                            "@keyframes bounce": {
                                "0%, 100%": {
                                    transform: "translateY(0)",
                                },

                                "50%": {
                                    transform: "translateY(10px)",
                                },
                            },
                        }}
                    >
                        <KeyboardDoubleArrowDownIcon
                            sx={{
                                fontSize: 50,
                            }}
                        />
                    </IconButton>
                </Box>


                <Button
                    // onClick={() => {
                    //     window.location.href = "/shopAdmin/register";
                    // }}
                    onClick={() => {
                        window.open(
                            "https://wa.me/213782448880",
                            "_blank"
                        );
                    }}

                    sx={{
                        position: "absolute",

                        bottom: {
                            xs: -130,
                            md: -100,
                        },

                        left: {
                            xs: "45%",
                            md: "20%",
                        },

                        transform: "translateX(-50%)",

                        zIndex: 9999,

                        px: {
                            xs: 4,
                            md: 3,
                        },

                        py: {
                            xs: 1.5,
                            md: 1,
                        },

                        borderRadius: "50px",

                        whiteSpace: "nowrap",

                        fontSize: {
                            xs: 18,
                            md: 18,
                        },

                        fontWeight: 900,

                        color: "#fff",

                        background:
                            "linear-gradient(90deg,#0ab7ab,#4cc9f0,#9d4edd,#0ab7ab)",

                        backgroundSize: "300% 300%",

                        animation: "gradientMove 4s ease infinite",

                        "@keyframes gradientMove": {
                            "0%": {
                                backgroundPosition: "0% 50%",
                            },

                            "50%": {
                                backgroundPosition: "100% 50%",
                            },

                            "100%": {
                                backgroundPosition: "0% 50%",
                            },
                        },

                        boxShadow:
                            "0 0 30px rgba(76,201,240,.5)",
                    }}
                >
                    🚀 احجز دورك الآن قبل انتهاء العرض
                </Button>


                <Box
                    sx={{
                        position: "relative",

                        zIndex: 1,

                        bgcolor: "#050608",

                        borderRadius: "24px 24px 2px 24px",

                        overflow: "hidden",
                    }}
                >
                    <Box
                        component="img"
                        src={offer}
                        alt="Offer"

                        sx={{
                            width: {
                                xs: 350,
                                sm: 350,
                                md: 280,
                            },

                            maxWidth: "90vw",

                            display: "block",
                        }}
                    />
                </Box>

            </Box>
        </Box>
    );
}
