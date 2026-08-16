import React from "react";
import {
    Box,
    Typography,
    Button,
} from "@mui/material";

import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useSelector } from "react-redux";
import { getPlans_selector } from "../../../../../../redux/selectors/app/App_selector";


function SubscriptionPlans(props) {
    let getPlans = useSelector(getPlans_selector)
    let plans = getPlans?.plans

    // console.log(first)

    return (

        <Box
            dir="rtl"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,

            }}
        >


            {/* Header */}

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textAlign: "center",
                    maxWidth: 700,
                    mx: "auto",
                }}
            >

                <Typography
                    sx={{
                        fontSize: {
                            xs: 28,
                            md: 36
                        },

                        fontWeight: 800,

                        color: "#222",
                    }}
                >
                    اختر الخطة المناسبة لنموك
                </Typography>


                <Typography
                    sx={{

                        color: "#777",
                        fontSize: { xs: 14, sm: 18 },
                    }}
                >
                    حلول مرنة مصممة خصيصاً لإدارة قوائم الانتظار بكفاءة عالية واحترافية.
                </Typography>


            </Box>





            {/* Plans */}

            <Box
    sx={{
        display: "grid",

        gridTemplateColumns: {
            xs: "1fr",              // صغير: عمود واحد
            sm: "repeat(2, 1fr)",   // متوسط: عمودين
            lg: "repeat(2, 1fr)",   // كبير: عمودين
        },

        gap: {xs:5,md:4},

        alignItems: "stretch",

        py: 4,
        px: {xs:2,md:4},

        borderRadius: '40px 40px 0 0',

        borderTop: "8px solid #6f0d67",
        borderLeft: "2px solid #6f0d67",
        borderRight: "2px solid #6f0d67",

        backgroundImage: `
            radial-gradient(
                circle,
                rgba(97, 22, 116, 0.19) 1px,
                transparent 2px
            )
        `,

        backgroundSize: "20px 20px",
    }}
>


                {
                    plans?.map((plan) => {

                        const isPro = plan.name === "Pro";

                        const color = isPro
                            ? "#743DB1"
                            : "#3989EC";

                        const icon = isPro
                            ? <RocketLaunchRoundedIcon />
                            : <SpaRoundedIcon />;

                        const features = [
                            `${plan.max_staff} موظفين`,
                            `${plan.max_services} خدمات`,
                            `${plan.max_daily_tickets} تذكرة يومياً`,
                            plan.max_branches === 1
                                ? "فرع واحد"
                                : plan.max_branches === 2
                                    ? "فرعان"
                                    : `${plan.max_branches} فروع`
                        ];

                        if (plan.qr_code_enabled) {
                            features.push("QR Code");
                        }

                        if (plan.analytics_enabled) {
                            features.push("إحصائيات متقدمة");
                        }

                        if (plan.priority_support) {
                            features.push("دعم ذو أولوية");
                        }

                        return (
                            <Box
                                key={plan.id}
                                sx={{
                                    position: "relative",
                                    display: "flex",
                                    flexDirection: "column",
                                    p: 3,
                                    width: '100%',
                                    // minWidth: 280,
                                    borderRadius: "32px",

                                    bgcolor:
                                        isPro
                                            ? "#ffffff"
                                            : "#faf8fc",

                                    border:
                                        isPro
                                            ? "2px solid rgba(130, 68, 201, 0.47)"
                                            : "1px solid rgba(0, 0, 0, 0.28)",

                                    boxShadow:
                                        "0 10px 30px rgba(0,0,0,0.05)",

                                    transition: "0.3s",

                                    "&:hover": {

                                        boxShadow:
                                            "0 20px 45px rgba(0, 0, 0, 0.22)",
                                    }
                                }}
                            >

                                {
                                    isPro &&
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: -20,
                                            right: 30,
                                            px: 2,
                                            py: 1,
                                            borderRadius: 10,
                                            bgcolor: "#743DB1",
                                            color: "#fff",
                                            fontWeight: 700,
                                            fontSize: 15,
                                        }}
                                    >
                                        وفر 5000 دج
                                    </Box>
                                }

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mb: 3,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: "18px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            bgcolor: `${color}15`,
                                            color: color,

                                            "& svg": {
                                                fontSize: 32
                                            }
                                        }}
                                    >
                                        {icon}
                                    </Box>
                                </Box>

                                <Typography
                                    sx={{
                                        fontSize: 28,
                                        fontWeight: 800,
                                    }}
                                >
                                    {plan.name}
                                </Typography>

                                <Typography
                                    sx={{
                                        mt: 1,
                                        color: "#777",
                                        minHeight: 50,
                                    }}
                                >
                                    {plan.description}
                                </Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "baseline",
                                        gap: 1,
                                        my: 3,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 38,
                                            fontWeight: 900,
                                        }}
                                    >
                                        {Number(plan.price).toLocaleString()} دج
                                    </Typography>

                                    <Typography color="#777">
                                        {
                                            plan.duration_days === 30
                                                ? "/ شهرياً"
                                                : "/ 3 أشهر"
                                        }
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2,
                                        flex: 1,
                                    }}
                                >
                                    {
                                        features.map((item, i) => (
                                            <Box
                                                key={i}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1,
                                                    color: "#666",
                                                }}
                                            >
                                                <CheckCircleRoundedIcon
                                                    sx={{
                                                        fontSize: 21,
                                                        color: color
                                                    }}
                                                />

                                                <Typography>
                                                    {item}
                                                </Typography>
                                            </Box>
                                        ))
                                    }
                                </Box>

                                <Box sx={{ mt: 4 }}>
                                    <Button
                                        fullWidth
                                        sx={{
                                            py: 1.5,
                                            borderRadius: "12px",
                                            fontWeight: 700,

                                            color:
                                                isPro
                                                    ? "white"
                                                    : "#333",

                                            background:
                                                isPro
                                                    ? "linear-gradient(90deg,#743DB1,#3989EC)"
                                                    : "transparent",

                                            border:
                                                isPro
                                                    ? "none"
                                                    : "1px solid #ddd",

                                            "&:hover": {
                                                background:
                                                    isPro
                                                        ? "linear-gradient(90deg,#743DB1,#3989EC)"
                                                        : "#f5f5f5"
                                            }
                                        }}
                                    >
                                        اشترك الآن
                                    </Button>
                                </Box>

                            </Box>
                        );

                    })
                }


            </Box>


        </Box>

    )
}


export default SubscriptionPlans;
