import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Box, Button, Typography } from "@mui/material";

export default function HeroSection() {
    return (
        <Box
            sx={{
                mt: 3,
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                minHeight: {
                    xs: 160,
                    md: 180,
                },
                p: {
                    xs: 3,
                    md: 4,
                },
                bgcolor: "primary.main",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: 4,
            }}
        >
            {/* Background Blur Shapes */}

            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.1,
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: -40,
                        right: -40,
                        width: 250,
                        height: 250,
                        bgcolor: "#fff",
                        borderRadius: "50%",
                        filter: "blur(60px)",
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        bottom: -40,
                        left: -40,
                        width: 180,
                        height: 180,
                        bgcolor: "#fff",
                        borderRadius: "50%",
                        filter: "blur(60px)",
                    }}
                />
            </Box>

            {/* Content */}

            <Box
                sx={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                    justifyContent: "space-between",
                    alignItems: {
                        xs: "flex-start",
                        md: "flex-end",
                    },
                    gap: 2,
                }}
            >
                <Box>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                            fontSize: {
                                xs: "1.7rem",
                                md: "2rem",
                            },
                        }}
                    >
                        أهلاً بك مجدداً، مدير سبوتلي
                    </Typography>

                    <Typography
                        sx={{
                            opacity: 0.9,
                            maxWidth: 700,
                            fontSize: {
                                xs: 14,
                                md: 16,
                            },
                        }}
                    >
                        إليك ملخص سريع لأداء متجرك لهذا اليوم.
                        النظام يعمل بكفاءة عالية مع استقرار
                        في فترات الانتظار.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            md: "auto",
                        },
                        display: "flex",
                        gap: 2,
                    }}
                >
                    <Button
                        startIcon={<DownloadRoundedIcon />}
                        sx={{
                            flex: {
                                xs: 1,
                                md: "none",
                            },
                            bgcolor: "rgba(255,255,255,.20)",
                            color: "#fff",
                            backdropFilter: "blur(10px)",
                            borderRadius: 2,
                            px: 3,
                            "&:hover": {
                                bgcolor: "rgba(255,255,255,.30)",
                            },
                        }}
                    >
                        تقرير اليوم
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            flex: {
                                xs: 1,
                                md: "none",
                            },
                            bgcolor: "#fff",
                            color: "primary.main",
                            borderRadius: 2,
                            px: 3,
                            fontWeight: 700,
                            boxShadow: 3,
                            "&:hover": {
                                bgcolor: "#fff",
                                transform: "scale(1.03)",
                            },
                        }}
                    >
                        إضافة عميل
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
