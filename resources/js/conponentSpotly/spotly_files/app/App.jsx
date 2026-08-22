
import React from "react";
import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,


} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideocamIcon from '@mui/icons-material/Videocam';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import MovieIcon from '@mui/icons-material/Movie';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LiveTvIcon from '@mui/icons-material/LiveTv';

import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';

import TimerIcon from "@mui/icons-material/Timer";
import GroupsIcon from "@mui/icons-material/Groups";
import PaymentsIcon from "@mui/icons-material/Payments";

import UpdateIcon from "@mui/icons-material/Update";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";


import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import IntroImage from "../../../../img/app/introImage.png"
import IntroImage1 from "../../../../img/app/introImage1.png"
import Step1 from "../../../../img/app/step1.png"
import Step2 from "../../../../img/app/step2.png"
import Step3 from "../../../../img/app/step3.png"
import Step4 from "../../../../img/app/step4.png"
import Step5 from "../../../../img/app/step5.png"
import Header from "./header/Header";
import Footer from "./footer/Footer";
import OfferDialog from "../../dialog/app/offerDialog/OfferDialog";


function App() {
    return (
        <Box
            dir="rtl"
            sx={{
                minHeight: "100vh",
                bgcolor: "#050608",
                color: "#e3e2e3",
                overflow: "hidden",
            }}
        >
            {/* Navbar */}
            <OfferDialog />



            <Header />
            {/* ---------------------------------------------------------- */}


            <Box
                sx={{
                    // position: "relative",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    mt: { xs: -2, md: 0 },
                    // pb: 10,
                    px: { xs: 2, md: 0 },
                    overflow: "hidden",
                }}
            >

                {/* Background */}
                <Box
                    sx={{
                        // position: "absolute",
                        // inset: 0,
                        // zIndex: 0,
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage: { xs: `url(${IntroImage1})`, md: `url(${IntroImage1})` },
                            backgroundSize: "caver",
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            opacity: 0.17,
                            // border:1,
                        }}
                    />

                    {/* <Box  offer-first-20-customers
                        sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "linear-gradient(to right, rgba(10,10,10,.9), rgba(10,10,10,.55), transparent)",
                        }}
                    /> */}

                    {/* <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "linear-gradient(to bottom, rgba(10,10,10,.5), transparent, #050505)",
                        }}
                    /> */}
                </Box>

                {/* Content */}
                <Box
                    sx={{
                        px: { xs: 0, md: 4 },
                        position: "relative",
                        zIndex: 2,
                        width: "100%",
                        // maxWidth: "1400px",
                        // mx: "auto",
                        display: "flex",
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: "center",
                        justifyContent: "space-between",
                        // flexWrap: "wrap",
                        gap: { xs: 2, md: 6 },
                    }}
                >

                    {/* Right Content */}
                    <Box
                        sx={{
                            maxWidth: { xs: "100%", md: "50%" },
                            display: "flex",
                            flexDirection: "column",
                            gap: 1.5,
                            textAlign: "right",
                            py: 4,
                            px: 2,
                            borderRadius: "32px",

                        }}
                    >

                        {/* Badge */}
                        <Box
                            sx={{
                                width: "fit-content",
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                px: 2,
                                py: 1,
                                borderRadius: "999px",
                                bgcolor: "rgba(255,255,255,.04)",
                                border: "1px solid rgba(255,255,255,.08)",
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: 10, md: 15 },
                                    height: { xs: 10, md: 15 },
                                    borderRadius: "50%",
                                    bgcolor: "#9d4edd",
                                    boxShadow:
                                        "0 0 15px #9d4edd",
                                }}
                            />

                            <Typography
                                sx={{
                                    color: "#b388ff",
                                    fontWeight: 700,
                                    fontSize: { xs: 15, md: 20 },
                                }}
                            >
                                نظام ذكي لإدارة الطوابير
                            </Typography>
                        </Box>

                        {/* Title */}
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: 37,
                                    md: 60,
                                },
                                fontWeight: 900,
                                color: "#fff",
                                lineHeight: 1.5,
                            }}
                        >
                            ودّع الانتظار...
                            <br />

                            <Box
                                component="span"
                                sx={{
                                    background:
                                        "linear-gradient(90deg,#9d4edd,#4cc9f0,#3a86ff)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                واستقبل عملاءك بذكاء
                            </Box>
                        </Typography>

                        {/* Description */}
                        <Typography
                            sx={{
                                fontSize: { xs: 20, md: 25 },
                                color: "rgba(255,255,255,.85)",
                                lineHeight: 1.9,
                                maxWidth: 700,
                            }}
                        >
                            Spotlly يحول طوابير الانتظار التقليدية إلى
                            تجربة رقمية ذكية. دع عملاءك يحجزون دورهم،
                            يتابعون ترتيبهم، ويصلون في الوقت المناسب
                            بدون انتظار طويل.
                        </Typography>

                        {/* Buttons */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: 'center',
                                flexDirection: { xs: 'column', sm: 'row' },
                                justifyContent: 'center',
                                gap: 3,
                                mt: 2,
                            }}
                        >

                            <Button
                                onClick={() => { window.location.href = '/shopAdmin/register' }}
                                sx={{
                                    width: { xs: '100%', md: '50%' },
                                    px: 4,
                                    py: 1.8,
                                    borderRadius: "20px",
                                    color: "#000000",
                                    fontWeight: 700,
                                    whiteSpace: 'nowrap',
                                    bgcolor: "#c3c0ff",
                                    boxShadow:
                                        "0 0 35px rgba(157,78,221,.4)",
                                }}
                            >
                                <Typography sx={{ fontSize: { xs: 22, md: 25 }, fontWeight: 900 }}>

                                    ابدأ مجاناً الآن
                                </Typography>
                            </Button>

                            <Button
                                sx={{
                                    width: { xs: '100%', md: '50%' },
                                    px: 4,
                                    py: 1.8,
                                    borderRadius: "20px",
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: "#fff",
                                    border:
                                        "1px solid rgba(255,255,255,.12)",
                                    bgcolor:
                                        "rgba(255,255,255,.04)",
                                    backdropFilter: "blur(12px)",
                                }}
                            >
                                <LiveTvIcon fontSize='medium' />
                                <Typography sx={{ fontSize: { xs: 20, md: 25 }, fontWeight: 900 }}>
                                    شاهد العرض التوضيحي
                                </Typography>
                            </Button>

                        </Box>

                        {/* Stats */}


                    </Box>



                    {/* Left Side Illustration */}
                    <Box
                        sx={{
                            mb: { xs: 10, sm: 0 },
                            // flex: 1,
                            minWidth: { xs: "100%", lg: "45%" },
                            display: {
                                xs: "none",
                                sm: "flex",
                            },
                            justifyContent: "center",
                            alignItems: "center",
                            // height: 650,
                        }}
                    >

                        <Box
                            sx={{
                                flex: 1,
                                width: "100%",
                                position: "relative",
                            }}
                        >

                            {/* Dashboard */}
                            <Box
                                sx={{
                                    bgcolor: "rgba(20,20,20,.9)",
                                    border: "1px solid rgba(255,255,255,.08)",
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                    backdropFilter: "blur(20px)",
                                    boxShadow: "0 20px 50px rgba(0,0,0,.5)",
                                    transform: {
                                        xs: "rotate(0deg)",
                                        lg: "rotate(-2deg)",
                                    },
                                    transition: ".5s",

                                    "&:hover": {
                                        transform: "rotate(0deg)",
                                    },
                                }}
                            >

                                {/* Header */}
                                <Box
                                    sx={{
                                        height: 50,
                                        borderBottom: "1px solid rgba(255,255,255,.05)",
                                        bgcolor: "rgba(255,255,255,.02)",
                                        display: "flex",
                                        alignItems: "center",
                                        px: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 12,
                                                height: 12,
                                                borderRadius: "50%",
                                                bgcolor: "rgba(239,68,68,.6)",
                                            }}
                                        />

                                        <Box
                                            sx={{
                                                width: 12,
                                                height: 12,
                                                borderRadius: "50%",
                                                bgcolor: "rgba(245,158,11,.6)",
                                            }}
                                        />

                                        <Box
                                            sx={{
                                                width: 12,
                                                height: 12,
                                                borderRadius: "50%",
                                                bgcolor: "rgba(34,197,94,.6)",
                                            }}
                                        />
                                    </Box>

                                    <Box
                                        sx={{
                                            mx: "auto",
                                            width: 140,
                                            height: 8,
                                            bgcolor: "rgba(255,255,255,.05)",
                                            borderRadius: "999px",
                                        }}
                                    />
                                </Box>

                                {/* Body */}
                                <Box
                                    sx={{
                                        p: 3,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                    }}
                                >

                                    {/* Chart Area */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-end",
                                        }}
                                    >

                                        <Box
                                            sx={{
                                                width: "35%",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 1,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    height: 8,
                                                    bgcolor: "rgba(255,255,255,.10)",
                                                    borderRadius: "999px",
                                                }}
                                            />

                                            <Box
                                                sx={{
                                                    width: "65%",
                                                    height: 8,
                                                    bgcolor: "rgba(255,255,255,.05)",
                                                    borderRadius: "999px",
                                                }}
                                            />
                                        </Box>

                                        {/* Fake Chart */}
                                        <Box
                                            sx={{
                                                width: "50%",
                                                height: 70,
                                                display: "flex",
                                                alignItems: "flex-end",
                                                gap: 1,
                                            }}
                                        >
                                            {[30, 50, 40, 80, 60].map((h, i) => (
                                                <Box
                                                    key={i}
                                                    sx={{
                                                        flex: 1,
                                                        height: `${h}%`,
                                                        bgcolor:
                                                            i === 3
                                                                ? "#8b5cf6"
                                                                : "rgba(139,92,246,.45)",
                                                        borderRadius:
                                                            "6px 6px 0 0",
                                                        position:
                                                            i === 3
                                                                ? "relative"
                                                                : "static",
                                                    }}
                                                >
                                                    {i === 3 && (
                                                        <Box
                                                            sx={{
                                                                position:
                                                                    "absolute",
                                                                top: -5,
                                                                left: "50%",
                                                                transform:
                                                                    "translateX(-50%)",
                                                                width: 8,
                                                                height: 8,
                                                                borderRadius:
                                                                    "50%",
                                                                bgcolor:
                                                                    "#8b5cf6",
                                                                boxShadow:
                                                                    "0 0 10px #8b5cf6",
                                                            }}
                                                        />
                                                    )}
                                                </Box>
                                            ))}
                                        </Box>

                                    </Box>

                                    {/* Current Customer */}
                                    <Box>

                                        <Typography
                                            sx={{
                                                color:
                                                    "rgba(255,255,255,.6)",
                                                fontSize: 12,
                                                mb: 2,
                                            }}
                                        >
                                            العميل الحالي (خدمة العملاء)
                                        </Typography>

                                        {/* Ticket A42 */}
                                        <Box
                                            sx={{
                                                p: 2,
                                                borderRadius: "16px",
                                                display: "flex",
                                                justifyContent:
                                                    "space-between",
                                                alignItems: "center",
                                                bgcolor:
                                                    "rgba(255,255,255,.04)",
                                                border:
                                                    "1px solid rgba(255,255,255,.05)",
                                                mb: 2,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 2,
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 45,
                                                        height: 45,
                                                        borderRadius: "12px",
                                                        bgcolor:
                                                            "rgba(139,92,246,.15)",
                                                        color: "#8b5cf6",
                                                        display: "flex",
                                                        alignItems:
                                                            "center",
                                                        justifyContent:
                                                            "center",
                                                        fontWeight: 800,
                                                    }}
                                                >
                                                    A42
                                                </Box>

                                                <Box
                                                    sx={{
                                                        width: 100,
                                                        display: "flex",
                                                        flexDirection:
                                                            "column",
                                                        gap: 1,
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            height: 6,
                                                            bgcolor:
                                                                "rgba(255,255,255,.2)",
                                                            borderRadius:
                                                                "999px",
                                                        }}
                                                    />

                                                    <Box
                                                        sx={{
                                                            width: "50%",
                                                            height: 6,
                                                            bgcolor:
                                                                "rgba(255,255,255,.1)",
                                                            borderRadius:
                                                                "999px",
                                                        }}
                                                    />
                                                </Box>
                                            </Box>

                                            <Box
                                                sx={{
                                                    px: 2,
                                                    py: .7,
                                                    borderRadius:
                                                        "999px",
                                                    bgcolor:
                                                        "rgba(34,197,94,.15)",
                                                    color: "#22c55e",
                                                    border:
                                                        "1px solid rgba(34,197,94,.25)",
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                يخدم الآن
                                            </Box>
                                        </Box>

                                        {/* Ticket A43 */}
                                        <Box
                                            sx={{
                                                p: 2,
                                                borderRadius: "16px",
                                                display: "flex",
                                                justifyContent:
                                                    "space-between",
                                                alignItems: "center",
                                                opacity: .6,
                                                bgcolor:
                                                    "rgba(255,255,255,.02)",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 2,
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 45,
                                                        height: 45,
                                                        borderRadius: "12px",
                                                        bgcolor:
                                                            "rgba(255,255,255,.05)",
                                                        color:
                                                            "rgba(255,255,255,.7)",
                                                        display: "flex",
                                                        alignItems:
                                                            "center",
                                                        justifyContent:
                                                            "center",
                                                        fontWeight: 800,
                                                    }}
                                                >
                                                    A43
                                                </Box>

                                                <Box
                                                    sx={{
                                                        width: 100,
                                                        display: "flex",
                                                        flexDirection:
                                                            "column",
                                                        gap: 1,
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            height: 6,
                                                            bgcolor:
                                                                "rgba(255,255,255,.2)",
                                                            borderRadius:
                                                                "999px",
                                                        }}
                                                    />

                                                    <Box
                                                        sx={{
                                                            width: "50%",
                                                            height: 6,
                                                            bgcolor:
                                                                "rgba(255,255,255,.1)",
                                                            borderRadius:
                                                                "999px",
                                                        }}
                                                    />
                                                </Box>
                                            </Box>

                                            <Box
                                                sx={{
                                                    px: 2,
                                                    py: .7,
                                                    borderRadius:
                                                        "999px",
                                                    bgcolor:
                                                        "rgba(255,255,255,.05)",
                                                    color:
                                                        "rgba(255,255,255,.7)",
                                                    fontSize: 12,
                                                }}
                                            >
                                                منتظر - 5 د
                                            </Box>
                                        </Box>

                                    </Box>

                                </Box>

                            </Box>

                            {/* Floating Card */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    right: { xs: 0, md: -25 },
                                    bottom: { xs: -25, md: -25 },
                                    p: 2,
                                    borderRadius: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    bgcolor: "rgba(20,20,20,.85)",
                                    backdropFilter: "blur(20px)",
                                    border: "1px solid rgba(255,255,255,.08)",
                                    boxShadow:
                                        "0 20px 40px rgba(0,0,0,.4)",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                        bgcolor: "rgba(34,197,94,.12)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <CheckCircleIcon
                                        sx={{
                                            color: "#22c55e",
                                        }}
                                    />
                                </Box>

                                <Box>
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontWeight: 700,
                                        }}
                                    >
                                        الفرع ممتاز
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color:
                                                "rgba(255,255,255,.65)",
                                            fontSize: 13,
                                        }}
                                    >
                                        الزحام أقل من المعتاد
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>

                    </Box>





                </Box>

            </Box>


            {/* Hero */}

            <Box
                sx={{
                    mt: { xs: 0, sm: 0 },
                    // py: { xs: 10, lg: 16 },
                    px: { xs: 2, md: 6 },
                    // position: "relative",
                    // zIndex: 10,
                    // maxWidth: "1400px",
                    // mx: "auto",
                    // width: "100%",
                }}
            >

                {/* العنوان */}
                <Box
                    sx={{
                        textAlign: "center",
                        mb: 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: 35,
                                md: 50,
                            },
                            fontWeight: 900,
                            color: "#fff",
                        }}
                    >
                        الانتظار يكلفك العملاء
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: 700,
                            fontSize: { xs: 18, md: 25 },
                            color: "rgba(255,255,255,.75)",
                            lineHeight: 1.9,
                        }}
                    >
                        الطرق التقليدية في إدارة الطوابير تؤدي إلى
                        تذمر العملاء وفقدان الفرص البيعية.
                    </Typography>
                </Box>

                {/* البطاقات */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(3,1fr)',
                        },
                        gap: 3,
                        justifyContent: "center",
                    }}
                >

                    {/* البطاقة الأولى */}
                    <Box
                        sx={{
                            // flex: 1,
                            // mixWidth: { xs: "100%", sm: 250 },
                            py: 3,
                            px: 3,
                            borderRadius: "32px",
                            backdropFilter: "blur(20px)",
                            bgcolor: "rgba(255,255,255,.05)",
                            border: "1px solid rgba(255,255,255,.08)",
                            transition: ".3s",
                            "&:hover": {
                                bgcolor: "rgba(255,255,255,.08)",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: 60, sm: 50, md: 60 },
                                height: { xs: 60, sm: 50, md: 60 },
                                borderRadius: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: { xs: 1.5, sm: 2, md: 3 },
                                bgcolor: "rgba(239,68,68,.12)",
                                border: "1px solid rgba(239,68,68,.25)",
                                boxShadow:
                                    "0 0 25px rgba(239,68,68,.15)",
                            }}
                        >
                            <HourglassEmptyIcon
                                sx={{
                                    fontSize: { xs: 35, sm: 25, md: 35 },
                                    color: "#ef4444",
                                }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: { xs: 24, sm: 18, md: 24 },
                                fontWeight: 800,
                                mb: { xs: 1, sm: 2 },
                            }}
                        >
                            وقت ضائع
                        </Typography>

                        <Typography
                            sx={{
                                color: "rgba(255,255,255,.7)",
                                lineHeight: 1.9,
                            }}
                        >
                            العملاء يقضون وقتاً طويلاً في الانتظار
                            بدلاً من الاستمتاع بالخدمة
                            مما يقلل من رضاهم العام.
                        </Typography>
                    </Box>

                    {/* البطاقة الثانية */}
                    <Box
                        sx={{
                            // mixWidth: { xs: "100%", md: 250 },
                            py: 3,
                            px: 3,
                            borderRadius: "32px",
                            backdropFilter: "blur(20px)",
                            bgcolor: "rgba(255,255,255,.05)",
                            border: "1px solid rgba(255,255,255,.08)",
                            transition: ".3s",
                            "&:hover": {
                                bgcolor: "rgba(255,255,255,.08)",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: 60, sm: 50, md: 60 },
                                height: { xs: 60, sm: 50, md: 60 },
                                borderRadius: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: { xs: 1.5, sm: 2, md: 3 },
                                bgcolor: "rgba(59,130,246,.12)",
                                border: "1px solid rgba(59,130,246,.25)",
                                boxShadow:
                                    "0 0 25px rgba(59,130,246,.15)",
                            }}
                        >
                            <StorefrontIcon
                                sx={{
                                    fontSize: { xs: 35, sm: 25, md: 35 },
                                    color: "#3b82f6",
                                }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: { xs: 24, sm: 18, md: 24 },
                                fontWeight: 800,
                                mb: { xs: 1, sm: 2 },
                            }}
                        >
                            ازدحام داخل المحل
                        </Typography>

                        <Typography
                            sx={{
                                color: "rgba(255,255,255,.7)",
                                lineHeight: 1.9,
                            }}
                        >
                            تكدس العملاء في منطقة الانتظار
                            يخلق بيئة فوضوية ويؤثر سلباً على
                            صورة علامتك التجارية.
                        </Typography>
                    </Box>

                    {/* البطاقة الثالثة */}
                    <Box
                        sx={{
                            // minWidth: { xs: "100%", md: 250 },
                            py: 3,
                            px: 3,
                            borderRadius: "32px",
                            backdropFilter: "blur(20px)",
                            bgcolor: "rgba(255,255,255,.05)",
                            border: "1px solid rgba(255,255,255,.08)",
                            transition: ".3s",
                            "&:hover": {
                                bgcolor: "rgba(255,255,255,.08)",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: 60, sm: 50, md: 60 },
                                height: { xs: 60, sm: 50, md: 60 },
                                borderRadius: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: { xs: 1.5, sm: 2, md: 3 },
                                bgcolor: "rgba(168,85,247,.12)",
                                border: "1px solid rgba(168,85,247,.25)",
                                boxShadow:
                                    "0 0 25px rgba(168,85,247,.15)",
                            }}
                        >
                            <SentimentDissatisfiedIcon
                                sx={{
                                    fontSize: { xs: 35, sm: 25, md: 35 },
                                    color: "#a855f7",
                                }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: { xs: 24, sm: 18, md: 24 },
                                fontWeight: 800,
                                mb: { xs: 1, sm: 2 },
                            }}
                        >
                            تجربة سيئة
                        </Typography>

                        <Typography
                            sx={{
                                color: "rgba(255,255,255,.7)",
                                lineHeight: 1.9,
                            }}
                        >
                            الانتظار غير المنظم يولد إحباطاً،
                            مما قد يدفع العملاء للمغادرة دون
                            إتمام الخدمة وعدم العودة مجدداً.
                        </Typography>
                    </Box>

                </Box>

            </Box>



            <Box
                sx={{
                    my: { xs: 5, lg: 16 },
                    position: "relative",
                    zIndex: 10,
                }}
            >

                {/* Background */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(18, 18, 19, 0.69)",
                        borderTop: "1px solid rgba(255,255,255,.05)",
                        borderBottom: "1px solid rgba(255,255,255,.05)",
                        zIndex: -1,
                    }}
                />

                <Box
                    sx={{
                        py: { xs: 4, md: 6 },
                        px: { xs: 2, md: 6 },
                    }}
                >

                    {/* Header */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            justifyContent: "space-between",
                            alignItems: { xs: "flex-end", sm: "flex-start" },
                            gap: 3,
                            mb: 4,
                        }}
                    >
                        <Box sx={{ maxWidth: 700 }}>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: {
                                        xs: 35,
                                        md: 45,
                                    },
                                    fontWeight: 900,
                                    mb: 2,
                                }}
                            >
                                مع Spotlly تصبح إدارة الانتظار أسهل
                            </Typography>

                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,.75)",
                                    fontSize: 18,
                                    lineHeight: 1.9,
                                }}
                            >
                                نظام متكامل يمنحك السيطرة الكاملة ويقدم
                                لعملائك تجربة سلسة وعصرية تليق بعلامتك التجارية.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: {
                                    xs: "flex",
                                    lg: "flex",
                                },
                                gap: 1,
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: "50%",
                                    bgcolor: "#8b5cf6",
                                    boxShadow: "0 0 15px #8b5cf6",
                                }}
                            />

                            <Box
                                sx={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: "50%",
                                    bgcolor: "#06b6d4",
                                    boxShadow: "0 0 15px #06b6d4",
                                }}
                            />

                            <Box
                                sx={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: "50%",
                                    bgcolor: "#3b82f6",
                                    boxShadow: "0 0 15px #3b82f6",
                                }}
                            />
                        </Box>
                    </Box>

                    {/* Features */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(2,1fr)',
                                lg: 'repeat(4,1fr)',
                            },
                            gap: 3,
                            justifyContent: "center",
                        }}
                    >

                        {/* Feature 1 */}
                        <Box
                            sx={{
                                // flex: 1,
                                minWidth: { xs: "100%", md: 280 },
                                p: 3,
                                borderRadius: "28px",
                                position: "relative",
                                overflow: "hidden",
                                backdropFilter: "blur(20px)",
                                bgcolor: "rgba(255,255,255,.04)",
                                border: "1px solid rgba(255,255,255,.08)",
                                transition: ".3s",


                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: -40,
                                    right: -40,
                                    width: 140,
                                    height: 140,
                                    borderRadius: "50%",
                                    bgcolor: "rgba(139,92,246,.20)",
                                    filter: "blur(50px)",
                                }}
                            />

                            <Box
                                sx={{
                                    width: 55,
                                    height: 55,
                                    borderRadius: "16px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bgcolor: "rgba(255,255,255,.05)",
                                    border: "1px solid rgba(255,255,255,.08)",
                                    mb: { xs: 2, sm: 3 },
                                    position: "relative",
                                }}
                            >
                                <QrCodeScannerIcon
                                    sx={{
                                        color: "#8b5cf6",
                                        fontSize: 28,
                                    }}
                                />
                            </Box>

                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontWeight: 800,
                                    fontSize: 22,
                                    mb: { xs: 1, sm: 1.5 },
                                }}
                            >
                                حجز الدور عبر QR Code
                            </Typography>

                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,.7)",
                                    lineHeight: 1.8,
                                }}
                            >
                                لا حاجة لتطبيقات. يمسح العميل الرمز
                                ويحصل على تذكرته الرقمية فوراً.
                            </Typography>
                        </Box>

                        {/* Feature 2 */}
                        <Box
                            sx={{
                                flex: 1,
                                minWidth: { xs: "100%", md: 280 },
                                p: 3,
                                borderRadius: "28px",
                                position: "relative",
                                overflow: "hidden",
                                backdropFilter: "blur(20px)",
                                bgcolor: "rgba(255,255,255,.04)",
                                border: "1px solid rgba(255,255,255,.08)",
                                transition: ".3s",


                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: -40,
                                    right: -40,
                                    width: 140,
                                    height: 140,
                                    borderRadius: "50%",
                                    bgcolor: "rgba(6,182,212,.20)",
                                    filter: "blur(50px)",
                                }}
                            />

                            <Box
                                sx={{
                                    width: 55,
                                    height: 55,
                                    borderRadius: "16px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bgcolor: "rgba(255,255,255,.05)",
                                    border: "1px solid rgba(255,255,255,.08)",
                                    mb: { xs: 2, sm: 3 },
                                }}
                            >
                                <UpdateIcon
                                    sx={{
                                        color: "#06b6d4",
                                        fontSize: 28,
                                    }}
                                />
                            </Box>

                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontWeight: 800,
                                    fontSize: 22,
                                    mb: { xs: 1, sm: 1.5 },
                                }}
                            >
                                متابعة الدور مباشرة
                            </Typography>

                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,.7)",
                                    lineHeight: 1.8,
                                }}
                            >
                                صفحة حية تظهر للعميل موقعه
                                في الطابور والوقت المتبقي بدقة.
                            </Typography>
                        </Box>

                        {/* Feature 3 */}
                        <Box
                            sx={{
                                flex: 1,
                                minWidth: { xs: "100%", md: 280 },
                                p: 3,
                                borderRadius: "28px",
                                position: "relative",
                                overflow: "hidden",
                                backdropFilter: "blur(20px)",
                                bgcolor: "rgba(255,255,255,.04)",
                                border: "1px solid rgba(255,255,255,.08)",
                                transition: ".3s",


                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: -40,
                                    right: -40,
                                    width: 140,
                                    height: 140,
                                    borderRadius: "50%",
                                    bgcolor: "rgba(59,130,246,.20)",
                                    filter: "blur(50px)",
                                }}
                            />

                            <Box
                                sx={{
                                    width: 55,
                                    height: 55,
                                    borderRadius: "16px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bgcolor: "rgba(255,255,255,.05)",
                                    border: "1px solid rgba(255,255,255,.08)",
                                    mb: { xs: 2, sm: 3 },
                                }}
                            >
                                <NotificationsActiveIcon
                                    sx={{
                                        color: "#3b82f6",
                                        fontSize: 28,
                                    }}
                                />
                            </Box>

                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontWeight: 800,
                                    fontSize: 22,
                                    mb: { xs: 1, sm: 1.5 },
                                }}
                            >
                                إشعارات ذكية
                            </Typography>

                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,.7)",
                                    lineHeight: 1.8,
                                }}
                            >
                                تنبيهات تلقائية لإبلاغ العميل
                                باقتراب دوره في الوقت المناسب.
                            </Typography>
                        </Box>

                        {/* Feature 4 */}
                        <Box
                            sx={{
                                flex: 1,
                                minWidth: { xs: "100%", md: 280 },
                                p: 3,
                                borderRadius: "28px",
                                position: "relative",
                                overflow: "hidden",
                                backdropFilter: "blur(20px)",
                                bgcolor: "rgba(255,255,255,.04)",
                                border: "1px solid rgba(255,255,255,.08)",
                                transition: ".3s",


                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: -40,
                                    right: -40,
                                    width: 140,
                                    height: 140,
                                    borderRadius: "50%",
                                    bgcolor: "rgba(168,85,247,.20)",
                                    filter: "blur(50px)",
                                }}
                            />

                            <Box
                                sx={{
                                    width: 55,
                                    height: 55,
                                    borderRadius: "16px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bgcolor: "rgba(255,255,255,.05)",
                                    border: "1px solid rgba(255,255,255,.08)",
                                    mb: { xs: 2, sm: 3 },
                                }}
                            >
                                <SpaceDashboardIcon
                                    sx={{
                                        color: "#a855f7",
                                        fontSize: 28,
                                    }}
                                />
                            </Box>

                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontWeight: 800,
                                    fontSize: 22,
                                    mb: { xs: 1, sm: 1.5 },
                                }}
                            >
                                لوحة تحكم متطورة
                            </Typography>

                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,.7)",
                                    lineHeight: 1.8,
                                }}
                            >
                                إدارة الفروع والخدمات
                                وتحليل الأداء من مكان واحد.
                            </Typography>
                        </Box>

                    </Box>

                </Box>

            </Box>









            <Box
                id="how-it-works"
                sx={{
                    py: 5,
                    px: 3,
                    overflow: "hidden",
                    bgcolor: "#000000",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "1200px",
                        mx: "auto",
                    }}
                >
                    {/* Header */}
                    <Box
                        sx={{
                            textAlign: "center",
                            mb: 8,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: "2rem", md: "3.5rem" },
                                fontWeight: 800,
                                mb: 2,
                            }}
                        >
                            أربع خطوات تفصلك عن تجربة انتظار مثالية
                        </Typography>

                        <Typography
                            sx={{
                                color: "#c7c4d8",
                                maxWidth: "600px",
                                mx: "auto",
                                fontSize: "1.1rem",
                            }}
                        >
                            بساطة الاستخدام هي سر نجاحنا، إليك كيف تعمل المنصة بذكاء
                        </Typography>
                    </Box>

                    {/* Timeline */}
                    <Box
                        sx={{
                            position: "relative",
                            maxWidth: "900px",
                            mx: "auto",
                        }}
                    >
                        {/* Vertical Line */}
                        <Box
                            sx={{
                                position: "absolute",
                                right: "19px",
                                top: 0,
                                bottom: 0,
                                width: "4px",
                                borderRadius: "999px",
                                background:
                                    "linear-gradient(to bottom, rgba(99,91,255,.6), rgba(167,202,243,.6), rgba(99,91,255,.6))",
                            }}
                        />

                        {/* STEP 1 */}
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                gap: 5,
                                pr: { xs: 7, md: 10 },
                                mb: { xs: 1, md: -3 },
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    right: 0,
                                    top: 0,
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    bgcolor: "#1f2021",
                                    border: "4px solid #635bff",
                                    color: "#635bff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 700,
                                    boxShadow: "0 0 15px rgba(99,91,255,.5)",
                                }}
                            >
                                1
                            </Box>

                            <Box
                                sx={{
                                    // flex: 1,
                                    display: "flex",
                                    flexDirection: { xs: "column", sm: "row" },
                                    alignItems: "center",
                                    gap: 4,
                                }}
                            >
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        sx={{
                                            color: "#635bff",
                                            fontWeight: 700,
                                            fontSize: "2rem",
                                            mb: 2,
                                        }}
                                    >
                                        امسح الكود
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#c7c4d8",
                                            lineHeight: 1.9,
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        يقوم العميل بمسح رمز QR من خارج المحل او في منطقة الاستقبال بهاتفه الذكي
                                        دون الحاجة لتحميل أي تطبيقات.
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        width: { xs: "100%", sm: 300, md: 300 },
                                        aspectRatio: "1",
                                        borderRadius: "24px",

                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={Step1}
                                        sx={{
                                            // border:2,
                                            mt: { xs: -4, sm: -4 },
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>






                        {/* STEP 2 */}
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                gap: 5,
                                pr: { xs: 7, md: 10 },
                                mb: { xs: 1, md: -3 },
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    right: 0,
                                    top: 0,
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    bgcolor: "#1f2021",
                                    border: "4px solid #a7caf3",
                                    color: "#a7caf3",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 700,
                                    boxShadow: "0 0 15px rgba(167,202,243,.5)",
                                }}
                            >
                                2
                            </Box>

                            <Box
                                sx={{
                                    // flex: 1,
                                    display: "flex",
                                    flexDirection: { xs: "column", sm: "row" },
                                    alignItems: "center",
                                    gap: 4,
                                }}
                            >
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        sx={{
                                            color: "#a7caf3",
                                            fontWeight: 700,
                                            fontSize: "2rem",
                                            mb: 2,
                                        }}
                                    >
                                        احجز دورك
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#c7c4d8",
                                            lineHeight: 1.9,
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        يختار العميل الخدمة المطلوبة ويحصل على تذكرة رقمية
                                        فورية توضح وقته المتوقع للانتظار.
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        width: { xs: "100%", sm: 300, md: 300 },
                                        aspectRatio: "1",
                                        borderRadius: "24px",
                                        // p: 3,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={Step2}
                                        sx={{
                                            mt: { xs: -4, sm: -4 },
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>

                        {/* STEP 3 */}
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                gap: 5,
                                pr: { xs: 7, md: 10 },
                                mb: { xs: 1, md: -3 },
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    right: 0,
                                    top: 0,
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    bgcolor: "#1f2021",
                                    border: "4px solid #ffb68f",
                                    color: "#ffb68f",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 700,
                                    boxShadow: "0 0 15px rgba(255,182,143,.5)",
                                }}
                            >
                                3
                            </Box>

                            <Box
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: { xs: "column", sm: "row" },
                                    alignItems: "center",
                                    gap: 4,
                                }}
                            >
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        sx={{
                                            color: "#ffb68f",
                                            fontWeight: 700,
                                            fontSize: "2rem",
                                            mb: 2,
                                        }}
                                    >
                                        استرخِ قليلاً
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#c7c4d8",
                                            lineHeight: 1.9,
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        يمكن للعميل الانتظار براحة تامة في سيارته أو التسوق في
                                        الجوار ريثما يقترب دوره الفعلي.
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        width: { xs: "100%", sm: 300, md: 300 },
                                        aspectRatio: "1",
                                        borderRadius: "24px",

                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={Step3}
                                        sx={{
                                            mt: { xs: -4, sm: -4 },
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>

                        {/* STEP 4 */}
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                gap: 5,
                                pr: { xs: 7, md: 10 },
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    right: 0,
                                    top: 0,
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    bgcolor: "#1f2021",
                                    border: "4px solid #635bff",
                                    color: "#635bff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 700,
                                    boxShadow: "0 0 15px rgba(99,91,255,.5)",
                                }}
                            >
                                4
                            </Box>

                            <Box
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: { xs: "column", sm: "row" },
                                    alignItems: "center",
                                    gap: 4,
                                }}
                            >
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        sx={{
                                            color: "#635bff",
                                            fontWeight: 700,
                                            fontSize: "2rem",
                                            mb: 2,
                                        }}
                                    >
                                        جاء دورك!
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#c7c4d8",
                                            lineHeight: 1.9,
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        يتلقى العميل تنبيهاً ذكياً عبر هاتفه للتوجه فوراً
                                        لموظف الخدمة لبدء معاملته دون تأخير.
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        width: { xs: "100%", sm: 400, md: 300 },
                                        aspectRatio: "1",
                                        borderRadius: "24px",
                                    }}
                                >
                                    <Box
                                        component="img"
                                        // src="https://lh3.googleusercontent.com/aida/AP1WRLsYgcrp09uZWb25I6f926f519k7nW6uSubVf-02T2Suza_FP3_94WybtpVI5LpbtW5yYWsVvM3sXlkjcJafmuaVnkwlSRqWabpR6K4oVj-c8DMJI1B87ROuvsw1WIIEYve_30aci8cLGxoQSl7hnZhRSLDM_3sWMgH9rZbAZCOir85Hz6OlIpAZNDxnc2z3oHtoD-EfRsjAQoEUYsDTVFJB_iIv4p3_0AQxBcnaYpeDQ8sxCPE50fGhoZk"
                                        src={Step4}
                                        sx={{
                                            mt: { xs: -4, sm: -4 },
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>





            <Box
                sx={{
                    py: 5,
                    px: 3,
                    maxWidth: "1200px",
                    mx: "auto",
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                    gap: 8,
                    alignItems: { xs: 'center', md: 'center' },
                    justifyContent: 'flex-end',
                }}
            >
                {/* Left Side */}
                <Box
                    sx={{
                        // flex: 1,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: 35,
                                md: "3rem",
                            },
                            fontWeight: 800,
                            lineHeight: 1.3,
                            mb: 5,
                        }}
                    >

                        <Box
                            component="span"
                            sx={{
                                color: "#635bff",
                            }}
                        >
                            Spotlly
                        </Box>{" "}
                        محرك نمو لعملك.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 5,
                        }}
                    >
                        {/* Item 1 */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                            }}
                        >
                            <TimerIcon
                                sx={{
                                    fontSize: 35,
                                    color: "#635bff",
                                    flexShrink: 0,
                                }}
                            />

                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: "1.3rem",
                                        fontWeight: 700,
                                        mb: 1,
                                    }}
                                >
                                    توفير وقت العملاء
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#c7c4d8",
                                        fontSize: ".95rem",
                                        lineHeight: 1.8,
                                    }}
                                >
                                    تقليل وقت الانتظار الفعلي بنسبة تصل إلى 40%
                                    من خلال التوزيع الذكي للأحمال.
                                </Typography>
                            </Box>
                        </Box>

                        {/* Item 2 */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                            }}
                        >
                            <GroupsIcon
                                sx={{
                                    fontSize: 35,
                                    color: "#a7caf3",
                                    flexShrink: 0,
                                }}
                            />

                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: "1.3rem",
                                        fontWeight: 700,
                                        mb: 1,
                                    }}
                                >
                                    تعزيز كفاءة الموظفين
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#c7c4d8",
                                        fontSize: ".95rem",
                                        lineHeight: 1.8,
                                    }}
                                >
                                    تقليل ضغط العمل على موظفي الاستقبال
                                    وتسهيل عملية التوجيه الآلي.
                                </Typography>
                            </Box>
                        </Box>

                        {/* Item 3 */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                            }}
                        >
                            <PaymentsIcon
                                sx={{
                                    fontSize: 35,
                                    color: "#ffb68f",
                                    flexShrink: 0,
                                }}
                            />

                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: "1.3rem",
                                        fontWeight: 700,
                                        mb: 1,
                                    }}
                                >
                                    زيادة العوائد
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#c7c4d8",
                                        fontSize: ".95rem",
                                        lineHeight: 1.8,
                                    }}
                                >
                                    العملاء الراضون يعودون مجدداً. حسّن سمعة
                                    علامتك التجارية وارفع معدلات الاحتفاظ.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Right Side */}
                <Box
                    sx={{
                        flex: 1,
                        position: "relative",
                    }}
                >
                    <Box
                        sx={{
                            overflow: "hidden",
                            borderRadius: "24px",
                            border: "1px solid rgba(255,255,255,.08)",
                            background:
                                "linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.01))",
                            backdropFilter: "blur(20px)",
                            boxShadow: "0 20px 60px rgba(0,0,0,.4)",
                            position: "relative",
                        }}
                    >
                        <Box
                            component="img"
                            src={Step5}
                            sx={{
                                height: 350,
                                width: "100%",
                                display: "block",
                            }}
                        />

                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(to top, #050608, transparent)",
                            }}
                        />
                    </Box>

                    {/* Floating Card */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: -24,
                            right: -24,
                            p: 3,
                            maxWidth: "200px",
                            borderRadius: "20px",
                            border: "1px solid rgba(99,91,255,.2)",
                            background:
                                "linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.01))",
                            backdropFilter: "blur(20px)",
                            boxShadow: "0 20px 40px rgba(0,0,0,.35)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "2rem",
                                fontWeight: 800,
                                color: "#635bff",
                                mb: 1,
                            }}
                        >
                            +25%
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: ".8rem",
                                color: "#c7c4d8",
                                lineHeight: 1.7,
                            }}
                        >
                            زيادة في الإنتاجية بعد 30 يوماً فقط
                        </Typography>
                    </Box>
                </Box>
            </Box>



            {/* الخطط */}
            <Box
                id="pricing"
                sx={{
                    mt: 7,
                    py: 7,
                    px: 3,
                    bgcolor: "#0d0e0f",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "1200px",
                        mx: "auto",
                    }}
                >
                    {/* Header */}
                    <Box
                        sx={{
                            textAlign: "center",
                            mb: { xs: 5, md: 10 },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: "2rem",
                                    md: "3.5rem",
                                },
                                fontWeight: 800,
                                mb: 2,
                            }}
                        >
                            خطط مرنة لكل حجم
                        </Typography>

                        <Typography
                            sx={{
                                color: "#c7c4d8",
                            }}
                        >
                            اختر الخطة التي تناسب احتياجاتك الحالية وانطلق نحو المستقبل.
                        </Typography>
                    </Box>

                    {/* Pricing Cards */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(3,1fr)',
                            },
                            gap: 4,
                            alignItems: "stretch",
                        }}
                    >
                        {/* Starter */}
                        <Box
                            sx={{
                                flex: {
                                    xs: "1 1 100%",
                                    md: "1 1 calc(33.333% - 22px)",
                                },
                                p: 4,
                                borderRadius: "20px",
                                border: "1px solid rgba(255,255,255,.05)",
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.01))",
                                backdropFilter: "blur(20px)",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Box mb={4}>
                                <Typography
                                    sx={{
                                        fontSize: "1.4rem",
                                        fontWeight: 700,
                                        mb: 1,
                                    }}
                                >
                                    البداية (Starter)
                                </Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "end",
                                        gap: 1,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "2rem",
                                            fontWeight: 800,
                                        }}
                                    >
                                        5000 دج
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#c7c4d8",
                                            fontSize: ".9rem",
                                        }}
                                    >
                                        /شهرياً
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                    mb: 4,
                                }}
                            >
                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <CheckCircleIcon sx={{ color: "#635bff" }} />
                                    <Typography color="#c7c4d8">
                                        فرع واحد فقط
                                    </Typography>
                                </Box>


                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <CheckCircleIcon sx={{ color: "#635bff" }} />
                                    <Typography color="#c7c4d8">
                                        8 خدمات
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <CheckCircleIcon sx={{ color: "#635bff" }} />
                                    <Typography color="#c7c4d8">
                                        99 تذكرة يومياً
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <CheckCircleIcon sx={{ color: "#635bff" }} />
                                    <Typography color="#c7c4d8">
                                        QR Code
                                    </Typography>
                                </Box>


                            </Box>

                            <Button
                                fullWidth
                                // onClick={() => { window.location.href = '/shopAdmin/register' }}
                                 onClick={() => {
                                    window.open(
                                        "https://wa.me/213782448880",
                                        "_blank"
                                    );
                                }}
                                sx={{
                                    py: 1.8,
                                    borderRadius: "14px",
                                    border: "1px solid rgba(99,91,255,.5)",
                                    color: "#635bff",
                                    fontWeight: 700,
                                }}
                            >
                                اختر هذه الخطة
                            </Button>
                        </Box>

                        {/* Pro */}
                        <Box
                            sx={{
                                flex: {
                                    xs: "1 1 100%",
                                    md: "1 1 calc(33.333% - 22px)",
                                },
                                p: 4,
                                borderRadius: "20px",
                                border: "2px solid #635bff",
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.01))",
                                backdropFilter: "blur(20px)",
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",
                                transform: {
                                    md: "scale(1.05)",
                                },
                                zIndex: 2,
                                boxShadow: "0 20px 50px rgba(99,91,255,.15)",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: -15,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    bgcolor: "#635bff",
                                    color: "#fff",
                                    px: 2,
                                    py: 0.5,
                                    borderRadius: "999px",
                                    fontSize: ".7rem",
                                    fontWeight: 800,
                                }}
                            >
                                الأكثر طلباً
                            </Box>

                            <Box mb={4}>
                                <Typography
                                    sx={{
                                        fontSize: "1.4rem",
                                        fontWeight: 700,
                                        mb: 1,
                                    }}
                                >
                                    الاحترافية (Pro)
                                </Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "end",
                                        gap: 1,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "2rem",
                                            fontWeight: 800,
                                        }}
                                    >
                                        10000 دج
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#c7c4d8",
                                            fontSize: ".9rem",
                                        }}
                                    >
                                        /3 اشهر
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                    mb: 4,
                                }}
                            >
                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <CheckCircleIcon sx={{ color: "#635bff" }} />
                                    <Typography>حتى 3 فروع</Typography>
                                </Box>

                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <CheckCircleIcon sx={{ color: "#635bff" }} />
                                    <Typography>
                                       20 خدمات
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <CheckCircleIcon sx={{ color: "#635bff" }} />
                                    <Typography>
                                       300 تذكرة يومياً
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <CheckCircleIcon sx={{ color: "#635bff" }} />
                                    <Typography>
                                        دعم فني 24/7
                                    </Typography>
                                </Box>
                            </Box>

                            <Button
                                // onClick={() => { window.location.href = '/shopAdmin/register' }}
                                 onClick={() => {
                                    window.open(
                                        "https://wa.me/213782448880",
                                        "_blank"
                                    );
                                }}
                                fullWidth
                                sx={{
                                    py: 1.8,
                                    borderRadius: "14px",
                                    bgcolor: "#635bff",
                                    color: "#fff",
                                    fontWeight: 700,
                                    "&:hover": {
                                        bgcolor: "#544af0",
                                    },
                                }}
                            >
                                ابدأ الآن
                            </Button>
                        </Box>

                        {/* Enterprise */}
                        <Box
                            sx={{
                                flex: {
                                    xs: "1 1 100%",
                                    md: "1 1 calc(33.333% - 22px)",
                                },
                                p: 4,
                                borderRadius: "20px",
                                border: "1px solid rgba(255,255,255,.05)",
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.01))",
                                backdropFilter: "blur(20px)",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Box mb={4}>
                                <Typography
                                    sx={{
                                        fontSize: "1.4rem",
                                        fontWeight: 700,
                                        mb: 1,
                                    }}
                                >
                                    المؤسسات (Enterprise)
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: "2rem",
                                        fontWeight: 800,
                                    }}
                                >
                                    مخصص
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                    mb: 4,
                                }}
                            >
                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <CheckCircleIcon sx={{ color: "#635bff" }} />
                                    <Typography color="#c7c4d8">
                                        فروع غير محدودة
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <CheckCircleIcon sx={{ color: "#635bff" }} />
                                    <Typography color="#c7c4d8">
                                        تخصيص كامل للعلامة التجارية
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <CheckCircleIcon sx={{ color: "#635bff" }} />
                                    <Typography color="#c7c4d8">
                                        ربط عبر API
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <CheckCircleIcon sx={{ color: "#635bff" }} />
                                    <Typography color="#c7c4d8">
                                        مدير حساب مخصص
                                    </Typography>
                                </Box>
                            </Box>

                            <Button
                            //    disabled
                                fullWidth
                                sx={{
                                    py: 1.8,
                                    borderRadius: "14px",
                                    border: "1px solid rgba(255,255,255,.2)",
                                    color: "#fff",
                                    fontWeight: 700,
                                }}
                            >
                               غير متاح الان
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>



            {/*  الأسئلة الشائعة */}
            <Box
                id="faq"
                sx={{
                    py: 8,
                    px: 3,
                    // bgcolor: "#1b1c1d",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "900px",
                        mx: "auto",
                    }}
                >
                    {/* Title */}
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontSize: {
                                xs: "2rem",
                                md: "3rem",
                            },
                            fontWeight: 800,
                            mb: 2,
                        }}
                    >
                        الأسئلة الشائعة
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        {/* Question 1 */}
                        <Accordion
                            disableGutters
                            elevation={0}
                            sx={{
                                borderRadius: "16px !important",
                                overflow: "hidden",
                                bgcolor: "transparent",
                                border: "1px solid rgba(255,255,255,.08)",
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.01))",
                                backdropFilter: "blur(20px)",

                                "&:before": {
                                    display: "none",
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon sx={{ color: "#fff" }} />
                                }
                                sx={{
                                    px: 3,
                                    py: 1,
                                    fontWeight: 700,
                                }}
                            >
                                <Typography fontWeight={700} sx={{ color: "#fff" }} >
                                    هل يحتاج العميل لتحميل تطبيق لاستخدام الخدمة؟
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails
                                sx={{
                                    px: 3,
                                    pb: 3,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#c7c4d8",
                                        fontSize: ".95rem",
                                        lineHeight: 1.9,
                                    }}
                                >
                                    لا، لا يحتاج العميل لتحميل أي تطبيق. كل ما
                                    يحتاجه هو مسح رمز QR من خلال كاميرا الهاتف
                                    العادية، وسوف تفتح له واجهة الخدمة في
                                    المتصفح فوراً.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        {/* Question 2 */}
                        <Accordion
                            disableGutters
                            elevation={0}
                            sx={{
                                borderRadius: "16px !important",
                                overflow: "hidden",
                                bgcolor: "transparent",
                                border: "1px solid rgba(255,255,255,.08)",
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.01))",
                                backdropFilter: "blur(20px)",

                                "&:before": {
                                    display: "none",
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon sx={{ color: "#fff" }} />
                                }
                                sx={{
                                    px: 3,
                                    py: 1,
                                }}
                            >
                                <Typography fontWeight={700} sx={{ color: "#fff" }}  >
                                    كم يستغرق إعداد النظام في مؤسستي؟
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails
                                sx={{
                                    px: 3,
                                    pb: 3,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#c7c4d8",
                                        fontSize: ".95rem",
                                        lineHeight: 1.9,
                                    }}
                                >
                                    الإعداد سريع جداً. يمكنك البدء في غضون
                                    دقائق من خلال إنشاء حساب، إضافة خدماتك،
                                    وطباعة رمز QR. لا توجد حاجة لأجهزة
                                    معقدة.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        {/* Question 3 */}
                        <Accordion
                            disableGutters
                            elevation={0}
                            sx={{
                                borderRadius: "16px !important",
                                overflow: "hidden",
                                bgcolor: "transparent",
                                border: "1px solid rgba(255,255,255,.08)",
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.01))",
                                backdropFilter: "blur(20px)",

                                "&:before": {
                                    display: "none",
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon sx={{ color: "#fff" }} />
                                }
                                sx={{
                                    px: 3,
                                    py: 1,
                                }}
                            >
                                <Typography fontWeight={700} sx={{ color: "#fff" }} >
                                    هل يمكنني تجربة الخدمة قبل الاشتراك؟
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails
                                sx={{
                                    px: 3,
                                    pb: 3,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#c7c4d8",
                                        fontSize: ".95rem",
                                        lineHeight: 1.9,
                                    }}
                                >
                                    نعم، نوفر نسخة تجريبية مجانية لمدة 7
                                    ايام تشمل كافة المميزات ليتسنى لك تجربة
                                    النظام بشكل كامل في بيئة عملك.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Box>




            <Box
                sx={{
                    // py: 2,
                    px: 2,
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        maxWidth: "1000px",
                        mx: "auto",
                        py: {
                            xs: 8,
                            md: 5,
                        },
                        px: {
                            xs: 3,
                            md: 10,
                        },
                        borderRadius: { xs: '30px', md: '40px' },
                        border: "1px solid rgba(255,255,255,.08)",
                        background:
                            "linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.01))",

                        background:
                            "linear-gradient(135deg, rgba(103,58,183,.25), rgba(76,29,149,.15), rgba(15,23,42,.4))",


                        backdropFilter: "blur(20px)",

                        border: "1px solid rgba(157,78,221,.15)",
                        boxShadow: "0 20px 60px rgba(0,0,0,.3)",
                    }}
                >
                    {/* Glow Effect */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "-100px",
                            right: "-100px",
                            width: 260,
                            height: 260,
                            borderRadius: "50%",
                            bgcolor: "rgba(99,91,255,.2)",
                            filter: "blur(100px)",
                        }}
                    />

                    {/* Title */}
                    <Typography
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            fontSize: {
                                xs: "2rem",
                                md: "3.5rem",
                            },
                            fontWeight: 800,
                            mb: 3,
                        }}
                    >
                        جاهز لتحويل تجربة عملائك؟
                    </Typography>

                    {/* Description */}
                    <Typography
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            color: "#c7c4d8",
                            fontSize: "1.1rem",
                            maxWidth: "700px",
                            mx: "auto",
                            lineHeight: 1.8,
                            mb: 6,
                        }}
                    >
                        انضم إلى مئات الشركات التي اختارت Spotly
                        لتعزيز كفاءتها وريادة سوقها.
                    </Typography>

                    {/* Buttons */}
                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            display: "flex",
                            flexDirection: {
                                xs: "column",
                                sm: "row",
                            },
                            justifyContent: "center",
                            gap: 2,
                        }}
                    >
                        <Button
                            onClick={() => { window.location.href = '/shopAdmin/register' }}
                            sx={{
                                px: 6,
                                py: 2,
                                borderRadius: "14px",
                                bgcolor: "#635bff",
                                color: "#fff",
                                fontSize: "1rem",
                                fontWeight: 700,
                                boxShadow:
                                    "0 10px 30px rgba(99,91,255,.3)",
                                "&:hover": {
                                    bgcolor: "#544af0",
                                },
                            }}
                        >
                            ابدأ الآن مجاناً
                        </Button>

                        <Button
                            // onClick={() => {
                            //     window.open(
                            //         "https://m.me/spotlly",
                            //         "_blank"
                            //     );
                            // }}
                             onClick={() => {
                                    window.open(
                                        "https://wa.me/213782448880",
                                        "_blank"
                                    );
                                }}
                            sx={{
                                px: 6,
                                py: 2,
                                borderRadius: "14px",
                                color: "#fff",
                                border: "1px solid rgba(255,255,255,.2)",
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.01))",
                                backdropFilter: "blur(20px)",
                                fontSize: "1rem",
                                fontWeight: 700,
                                "&:hover": {
                                    bgcolor: "rgba(255,255,255,.05)",
                                },
                            }}
                        >
                            تواصل معنا الان
                        </Button>
                    </Box>

                    {/* Footer Text */}
                    <Typography
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            mt: 4,
                            fontSize: ".8rem",
                            color: "rgba(199,196,216,.6)",
                        }}
                    >
                        لا يلزم وجود بطاقة ائتمان للتسجيل الأولي.
                    </Typography>
                </Box>
            </Box>

            <Footer />



        </Box>
    );
}

export default App;
