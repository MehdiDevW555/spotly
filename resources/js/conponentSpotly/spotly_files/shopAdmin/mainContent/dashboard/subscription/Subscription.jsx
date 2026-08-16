import React from 'react'
import UpgradeRoundedIcon from "@mui/icons-material/UpgradeRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import {
    Box,
    Button,
    Chip,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

function Subscription() {
  return (
    <Paper
                elevation={0}
                sx={{
                    border: "1px solid #E5E7EB",
                    borderRadius: 4,
                    p: 3,
                    position: "relative",
                    overflow: "hidden",
                    order: {
                        xs: 2,
                        lg: 1,
                    },
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 6,
                        height: "100%",
                        bgcolor: "primary.main",
                    }}
                />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 3,
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontSize: 13,
                                color: "text.secondary",
                                mb: 0.5,
                            }}
                        >
                            باقة الاشتراك الحالية
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "primary.main",
                                    fontWeight: 700,
                                }}
                            >
                                Pro Plan
                            </Typography>

                            <VerifiedRoundedIcon
                                color="primary"
                            />
                        </Box>
                    </Box>

                    <Chip
                        label="نشط"
                        color="success"
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        mb: 4,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography color="text.secondary">
                            الأيام المتبقية:
                        </Typography>

                        <Typography
                            sx={{
                                color: "error.main",
                                fontWeight: 700,
                            }}
                        >
                            18 يوم
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography color="text.secondary">
                            تاريخ الانتهاء:
                        </Typography>

                        <Typography fontWeight={700}>
                            2026-12-15
                        </Typography>
                    </Box>

                    <LinearProgress
                        variant="determinate"
                        value={60}
                        sx={{
                            height: 6,
                            borderRadius: 999,
                        }}
                    />
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    startIcon={<UpgradeRoundedIcon />}
                    sx={{
                        py: 1.4,
                        borderRadius: 3,
                        fontWeight: 700,
                    }}
                >
                    ترقية الخطة
                </Button>
            </Paper>
  )
}

export default Subscription
