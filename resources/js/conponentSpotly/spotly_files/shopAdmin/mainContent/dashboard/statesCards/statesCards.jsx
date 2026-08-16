import {
    Avatar,
    Box,
    Paper,
    Typography,
} from "@mui/material";

import ConfirmationNumberRoundedIcon from "@mui/icons-material/ConfirmationNumberRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";

export default function StatsCards() {
    const cards = [
        {
            title: "إجمالي التذاكر",
            value: "142",
            icon: <ConfirmationNumberRoundedIcon />,
            iconColor: "#2563EB",
            iconBg: "#DBEAFE",
            footer: "12%+ من الأمس",
            trend: true,
        },
        {
            title: "في الانتظار",
            value: "12",
            valueColor: "#DC2626",
            icon: <HourglassTopRoundedIcon />,
            iconColor: "#DC2626",
            iconBg: "#FEE2E2",
            footer: "متوسط: 8 دقائق",
        },
        {
            title: "تمت خدمتها",
            value: "124",
            valueColor: "#2563EB",
            icon: <CheckCircleRoundedIcon />,
            iconColor: "#2563EB",
            iconBg: "#DBEAFE",
            footer: "معدل الإنجاز 87%",
        },
        {
            title: "العملاء النشطون",
            value: "28",
            icon: <PersonRoundedIcon />,
            iconColor: "#64748B",
            iconBg: "#E2E8F0",
            customers: true,
        },
        {
            title: "الموظفون",
            value: "8",
            icon: <BadgeRoundedIcon />,
            iconColor: "#475569",
            iconBg: "#E2E8F0",
            footer: "5 حالياً بالعمل",
        },
        {
            title: "الخدمات",
            value: "14",
            icon: <LayersRoundedIcon />,
            iconColor: "#475569",
            iconBg: "#CBD5E1",
            footer: "تحديث متوفر",
        },
    ];

    return (
        <Box
            sx={{
                mt: 3,
                display: "grid",
                gap: 2,
                gridTemplateColumns: {
                    xs: "repeat(2,1fr)",
                    md: "repeat(3,1fr)",
                    xl: "repeat(6,1fr)",
                },
            }}
        >
            {cards.map((card) => (
                <Paper
                    key={card.title}
                    elevation={0}
                    sx={{
                        // mt:2,
                        border: "1px solid #b9b9b9",
                        borderRadius: 3,
                        p: 2,
                        height: 130,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: ".3s",
                        "&:hover": {
                            boxShadow: 4,
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: 10,
                                    md: 12,
                                },
                                color: "#64748B",
                                fontWeight: 600,
                            }}
                        >
                            {card.title}
                        </Typography>

                        <Box
                            sx={{
                                width: 34,
                                height: 34,
                                borderRadius: 2,
                                bgcolor: card.iconBg,
                                color: card.iconColor,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {card.icon}
                        </Box>
                    </Box>

                    <Typography
                        sx={{
                            fontWeight: 800,
                            fontSize: {
                                xs: 28,
                                md: 34,
                            },
                            color: card.valueColor,
                        }}
                    >
                        {card.value}
                    </Typography>

                    {card.customers ? (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                src="https://i.pravatar.cc/150?img=1"
                                sx={{
                                    width: 24,
                                    height: 24,
                                    ml: -0.5,
                                    border: "2px solid #fff",
                                }}
                            />

                            <Avatar
                                src="https://i.pravatar.cc/150?img=2"
                                sx={{
                                    width: 24,
                                    height: 24,
                                    ml: -0.5,
                                    border: "2px solid #fff",
                                }}
                            />

                            <Box
                                sx={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    bgcolor: "#F1F5F9",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 10,
                                    fontWeight: 700,
                                }}
                            >
                                +25
                            </Box>
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                            }}
                        >
                            {card.trend && (
                                <TrendingUpRoundedIcon
                                    sx={{
                                        fontSize: 14,
                                        color: "#2563EB",
                                    }}
                                />
                            )}

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: 10,
                                        md: 12,
                                    },
                                    color: card.iconColor,
                                }}
                            >
                                {card.footer}
                            </Typography>
                        </Box>
                    )}
                </Paper>
            ))}
        </Box>
    );
}
