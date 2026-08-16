import { Box, Typography } from "@mui/material";
import React from "react";

function Loading() {
    return (
        <Box
            sx={{
                height: "100dvh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: 160,
                    height: 160,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* دائرة التحميل */}
                {/* الحلقة الخلفية */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        border: "2px solid rgba(116,61,177,0.12)",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background: `
            conic-gradient(
                #743DB1 0deg,
                #47CBE4 135deg,
                #3989EC 270deg,
                transparent 270deg,
                transparent 360deg
            )
        `,
                        animation: "spin 1.2s linear infinite",

                        "@keyframes spin": {
                            from: {
                                transform: "rotate(0deg)",
                            },
                            to: {
                                transform: "rotate(360deg)",
                            },
                        },
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        width: 154,
                        height: 154,
                        borderRadius: "50%",
                        bgcolor: "#f6f2fc",
                    }}
                />

                {/* الشعار */}
                <Box
                    component="img"
                    src="/images/slogoo.png"
                    alt="Logo"
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        width: 110,
                        height: 110,
                        objectFit: "contain",
                        borderRadius: 8,
                        // bgcolor: "#000000",
                        // border: "4px solid #422562",
                    }}
                />
            </Box>

            <Typography
                variant="h6"
                sx={{
                    fontWeight: 700,
                    color: "#743DB1",
                }}
            >
                {/* ...الرجاء الانتظار */}
            </Typography>
        </Box>
    );
}

export default Loading;
