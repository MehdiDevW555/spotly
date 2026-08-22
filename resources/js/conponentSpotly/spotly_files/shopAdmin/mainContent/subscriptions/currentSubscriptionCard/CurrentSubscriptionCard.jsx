import React from 'react'
import {
    Box,
    Typography,
    Chip,
} from "@mui/material";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import EventBusyRoundedIcon from "@mui/icons-material/EventBusyRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { useSelector } from 'react-redux';
import { getSubscription_selector } from '../../../../../../redux/selectors/shopAdmin/ShopAdmin_selector';
import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";

function CurrentSubscriptionCard(props) {
    let {getSubscription}=props
    let subscription = getSubscription?.subscription

    const startDate = new Date(subscription?.starts_at);
const endDate = new Date(subscription?.ends_at);
const today = new Date();

const totalDays = Math.max(
    1,
    Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))
);

const remainingDays = Math.max(
    0,
    Math.ceil((endDate - today) / (1000 * 60 * 60 * 24))
);

const elapsedDays = totalDays - remainingDays;

const progressPercentage =
    (elapsedDays / totalDays) * 100;





    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",

                p: { xs: 3, md: 4 },

                borderRadius: "24px",

                bgcolor: "#faf8fc",

                boxShadow:
                    "0 20px 50px rgba(0,0,0,0.08)",
            }}
        >


            {/* Ambient Background */}
            <Box
                sx={{
                    position: "absolute",
                    top: "-50%",
                    left: "-10%",

                    width: 400,
                    height: 400,

                    borderRadius: "50%",
                    bgcolor: "rgba(144,0,255,0.10)",

                    filter: "blur(120px)",
                }}
            />


            <Box
                sx={{
                    position: "absolute",

                    bottom: "-50%",
                    right: "-10%",

                    width: 300,
                    height: 300,

                    borderRadius: "50%",

                    bgcolor:
                        "rgba(71,203,228,0.10)",

                    filter: "blur(100px)",
                }}
            />


            {/* Main Content */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,

                    display: "flex",

                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },

                    alignItems: {
                        xs: "flex-start",
                        md: "center",
                    },

                    justifyContent: "space-between",

                    gap: 4,
                }}
            >


                {/* Information */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,

                        flex: 1,
                        minWidth: 0,
                    }}
                >


                    {/* Title */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,

                            flexWrap: "wrap",
                        }}
                    >

                        <Typography
                            sx={{
                                fontSize: { xs: 22, sm: 24 },
                                fontWeight: 700,
                                color: "#222",
                            }}
                        >
                            {subscription?.plan?.name}
                        </Typography>


                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.7,

                                px: 1.5,
                                py: 0.5,

                                borderRadius: "999px",

                                bgcolor: "rgba(116,61,177,0.10)",

                                color: "#743DB1",

                                fontWeight: 600,

                                fontSize: 14,
                            }}
                        >
                            <AutoAwesomeRoundedIcon
                                sx={{
                                    fontSize: 14
                                }}
                            />

                            <Typography
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                }}
                            >
                                {subscription?.plan?.type == 'trial' ? 'مجانية' : 'مدفوعة'}

                            </Typography>

                        </Box>



                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.7,

                                px: 1.5,
                                py: 0.5,

                                borderRadius: "999px",

                                bgcolor:subscription?.status == "active" ? "rgba(0, 255, 26, 0.1)" : "rgba(255, 0, 0, 0.1)",

                                color:subscription?.status == "active" ? "#12e015" : "#e01212",

                                fontWeight: 600,

                                fontSize: 14,
                            }}
                        >

                            <Box
                                sx={{
                                    width: 8,
                                    height: 8,

                                    borderRadius: "50%",

                                    bgcolor: subscription?.status == "active" ? "#12e015" : "#e01212",
                                }}
                            />

                            <Typography
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                }}
                            >
                                {subscription?.status == "active" ? 'نشط' : 'غير نشط'}
                            </Typography>

                        </Box>


                    </Box>



                    {/* Dates */}
                    <Box
                        sx={{
                            display: "flex",

                            gap: 2,

                            flexWrap: "wrap",

                            color: "#666",
                        }}
                    >


                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >

                            <CalendarTodayRoundedIcon
                                sx={{
                                    fontSize: 18
                                }}
                            />

                            <Typography sx={{
                                fontSize: 14,
                                fontWeight: 600,
                            }}>
                                بدأت في:  {new Date(subscription?.starts_at).toLocaleDateString("ar-DZ", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </Typography>

                        </Box>



                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >

                            <EventBusyRoundedIcon
                                sx={{
                                    fontSize: 18
                                }}
                            />

                            <Typography sx={{
                                fontSize: 14,
                                fontWeight: 600,
                            }}>
                                تنتهي في:   {new Date(subscription?.ends_at).toLocaleDateString("ar-DZ", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </Typography>

                        </Box>


                    </Box>




                    {/* Alert */}

                  { remainingDays <= 6 && <Box
                        sx={{
                            display: "flex",

                            alignItems: "center",

                            gap: 1.5,

                            p: 2,

                            maxWidth: 700,

                            bgcolor:
                                "rgba(255,184,0,0.08)",

                            borderRadius: "12px",

                            borderRight:
                                "4px solid #ff0000",
                        }}
                    >

                        <WarningAmberRoundedIcon
                            sx={{
                                color: "#ff0000",
                                fontSize:32,
                            }}
                        />


                        <Typography
                            sx={{
                                color: "#ff0000",
                            }}
                        >
                            {subscription?.plan?.alert}
                        </Typography>


                    </Box>}


                </Box>






                {/* Progress */}
                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            md: 320
                        },

                        display: "flex",

                        flexDirection: "column",

                        gap: 1.5,
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
                                fontSize: 13,
                                color: "#777",
                                fontWeight: 600
                            }}
                        >
                            المدة المتبقية
                        </Typography>


                        <Typography
                            sx={{
                                fontSize: 28,

                                fontWeight: 800,

                                color: "#743DB1"
                            }}
                        >
                            {remainingDays} يوم
                        </Typography>


                    </Box>



<Box
    sx={{
        position: "relative",
        height: 15,
        // border:2,
        // mb: 1,
    }}
>
   <DirectionsWalkRoundedIcon
    sx={{
        position: "absolute",
        right: `calc(${progressPercentage}% - 12px)`,
        transition: "all 1s ease",
        color: "#743DB1",
        transform: "scaleX(-1)",
    }}
/>



</Box>
                    {/* Progress bar */}

                    <Box
                        sx={{
                            height: 12,

                            bgcolor: "#eee",

                            borderRadius: 10,

                            overflow: "hidden",
                        }}
                    >

                        <Box
                            sx={{
                                height: "100%",

                               width: `${progressPercentage}%`,

                                borderRadius: 10,

                                background:
                                    "linear-gradient(90deg,#743DB1,#47CBE4)",

                                transition:
                                    "all 1s ease",
                            }}
                        />

                    </Box>



                    <Box
                        sx={{
                            display: "flex",

                            justifyContent: "space-between",

                            color: "#777",

                            fontSize: 13,
                        }}
                    >

                        <Typography fontSize={13}>
                           المدة ({totalDays} يوم)
                        </Typography>


                        <Typography fontSize={13}>
                           {remainingDays} يوم متبقي
                        </Typography>


                    </Box>



                </Box>


            </Box>


        </Box>
    )
}

export default CurrentSubscriptionCard
