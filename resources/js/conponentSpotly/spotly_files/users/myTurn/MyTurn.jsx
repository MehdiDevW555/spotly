import {
    Box,
    Paper,
    Typography,
    Avatar,
    LinearProgress,
    Chip,
    Button
} from "@mui/material";

import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { useRef } from "react";
import TicketDownload from "./ticketDownload/TicketDownload";
import html2canvas from "html2canvas";

function MyTurn(props) {
    let {
        shop,
        lastTicketNumber,
        waitingCount,
        lastCustomer,
        peopleBeforeMe,
        currentNumber,
        lastServedNumber
    } = props

    const ticketRef = useRef(null);

    const handleDownloadTicket = async () => {

        const canvas = await html2canvas(
            ticketRef.current,
            {
                scale: 2,
            }
        );

        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");

        link.href = image;
        link.download = "ticket.png";

        link.click();
    };
    console.log(lastCustomer)

    // console.log(lastCustomer)

    return (

        <Box
            sx={{
                minHeight: "100vh",
                // bgcolor: "#F8FAFC",
                px: 2,
                py: 5,


                background: `
linear-gradient(
135deg,
#eef4ff 0%,
#f8fafc 45%,
#f0fdf4 100%
)
`,
                position: "relative",
                overflow: "hidden",

                "&::before": {
                    content: '""',
                    position: "absolute",
                    width: 350,
                    height: 350,
                    borderRadius: "50%",
                    background: "rgba(37,99,235,.18)",
                    filter: "blur(90px)",
                    top: -120,
                    right: -120,
                },

                "&::after": {
                    content: '""',
                    position: "absolute",
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: "rgba(16,185,129,.12)",
                    filter: "blur(90px)",
                    bottom: -100,
                    left: -100,
                },
            }}
        >


            <Box
                sx={{
                    position: "fixed",
                    left: "-9999px",
                    top: 0,
                }}
            >
                <Box ref={ticketRef}>
                    <TicketDownload lastTicketNumber={lastTicketNumber} waitingCount={waitingCount} lastCustomer={lastCustomer} />
                </Box>
            </Box>




            <Box
                sx={{
                    maxWidth: 520,
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5
                }}
            >


                {/* SHOP HEADER */}

                <Paper
                    elevation={0}
                    sx={{
                        p: 2.5,
                        borderRadius: 6,

                        background:
                            "rgba(255,255,255,.45)",

                        backdropFilter:
                            "blur(24px)",

                        WebkitBackdropFilter:
                            "blur(24px)",

                        border:
                            "1px solid rgba(255,255,255,.7)",

                        boxShadow:
                            "0 20px 40px rgba(15,23,42,.08)"
                    }}
                >

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2
                        }}
                    >

                        <Avatar
                            sx={{
                                width: 60,
                                height: 60,
                                bgcolor: "#EFF6FF",
                                color: "#2563EB"
                            }}
                        >
                            <StorefrontRoundedIcon
                                fontSize="large"
                            />
                        </Avatar>


                        <Box>
                            <Typography
                                fontSize={19}
                                fontWeight={900}
                                color="#0F172A"
                            >
                                {shop?.shop_name}
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.8,
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 8,
                                    bgcolor: "#E6FFEE",
                                }}
                            >

                                <Box
                                    sx={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        bgcolor: "#16A34A",
                                        boxShadow: "0 0 0 4px rgba(22,163,74,.15)"
                                    }}
                                />


                                <Typography
                                    sx={{
                                        color: "#15803D",
                                        fontWeight: 800,
                                        fontSize: 13
                                    }}
                                >
                                    مفتوح الآن
                                </Typography>


                            </Box>

                        </Box>


                    </Box>





                </Paper>





                {/* MAIN TICKET */}


                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        borderRadius: 8,

                        background:
                            "rgba(255,255,255,.40)",

                        backdropFilter:
                            "blur(30px)",

                        WebkitBackdropFilter:
                            "blur(30px)",

                        border:
                            "1px solid rgba(255,255,255,.75)",

                        boxShadow: `
        0 25px 50px rgba(15,23,42,.08),
        inset 0 1px 0 rgba(255,255,255,.9)
    `,

                        position: "relative",
                        overflow: "hidden",

                        "&::before": {
                            content: '""',
                            position: "absolute",
                            width: 260,
                            height: 260,
                            borderRadius: "50%",
                            background:
                                "rgba(37,99,235,.10)",
                            filter: "blur(70px)",
                            top: -100,
                            right: -100,
                        }
                    }}
                >



                    <Box >
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center',
                        }}
                        >

                            <Typography sx={{
                                color: "#64748B",
                                fontWeight: 900,
                                fontSize: 25,
                            }}>
                                أنت في قائمة الانتظار
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: "end",
                            justifyContent: 'center',
                            // gap:1,
                        }}>

                            <Box sx={{
                                display: "flex",
                                alignItems: "end",
                                justifyContent: 'center',
                                gap: 0.5,
                            }}
                            >
                                <Typography
                                    sx={{
                                        // border:1,

                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: "#2563EB",
                                    }}
                                >
                                    {lastCustomer?.customer?.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        // border:1,
                                        color: "#64748B",
                                        fontSize: 18,
                                        fontWeight: 700,
                                    }}
                                >
                                    : الاسم
                                </Typography>

                            </Box>

                            <Box sx={{
                                display: "flex",
                                alignItems: "end",
                                justifyContent: 'center',
                                gap: 0.5,
                            }}
                            >
                                <Typography
                                    sx={{
                                        // border:1,

                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: "#2563EB",
                                    }}
                                >
                                    {lastCustomer?.customer?.phone}
                                </Typography>
                                <Typography
                                    sx={{
                                        // border:1,
                                        color: "#64748B",
                                        fontSize: 18,
                                        fontWeight: 700,
                                    }}
                                >
                                    : الهاتف
                                </Typography>

                            </Box>



                            <Box sx={{
                                display: "flex",
                                alignItems: "end",
                                justifyContent: 'center',
                                gap: 0.5,
                            }}
                            >
                                <Typography
                                    sx={{
                                        // border:1,

                                        fontSize: 20,
                                        fontWeight: 1000,
                                        color: "#2563EB",
                                    }}
                                >
                                    {lastTicketNumber}
                                </Typography>
                                <Typography
                                    sx={{
                                        // border:1,
                                        color: "#64748B",
                                        fontSize: 18,
                                        fontWeight: 700,
                                    }}
                                >
                                    : رقم تذكرتك
                                </Typography>

                            </Box>

                            <Box sx={{
                                display: "flex",
                                alignItems: "end",
                                justifyContent: 'center',
                                gap: 0.5,
                            }}
                            >
                                <Typography
                                    sx={{
                                        // border:1,

                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: "#2563EB",
                                    }}
                                >
                                    {lastCustomer?.service?.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        // border:1,
                                        color: "#64748B",
                                        fontSize: 18,
                                        fontWeight: 700,
                                    }}
                                >
                                    : الخدمة
                                </Typography>

                            </Box>



                            {/* BOOKING DATE */}

                            <Box
                                sx={{
                                    // mt: 2,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 1
                                }}
                            >

                                <CalendarMonthRoundedIcon
                                    sx={{
                                        color: "#2563EB",
                                        fontSize: 20
                                    }}
                                />


                                <Typography
                                    sx={{
                                        color: '#64748B',
                                        fontSize: 16,
                                        fontWeight: 700,
                                    }}
                                >
                                    تم الحجز: 24 يوليو 2026 - 15:30
                                </Typography>


                            </Box>
                        </Box>

                    </Box>






                    {/* CURRENT INFO */}


                    <Box
                        sx={{
                            mt: 3,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: 240,
                                height: 240,
                                borderRadius: "50%",

                                background:
                                    "rgba(255,255,255,.28)",

                                backdropFilter:
                                    "blur(30px)",

                                border:
                                    "1px solid rgba(255,255,255,.8)",

                                boxShadow: `
                0 25px 60px rgba(37,99,235,.15),
                inset 0 1px 0 rgba(255,255,255,.9)
            `,

                                position: "relative",

                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",

                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    inset: 18,
                                    borderRadius: "50%",
                                    border:
                                        "2px solid rgba(37,99,235,.15)"
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 72,
                                    fontWeight: 1000,
                                    color: "#2563EB",
                                    lineHeight: 1,
                                    // mb: 1
                                }}
                            >
                               {currentNumber ?? lastServedNumber ?? "--"}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: 18,
                                    color: "#64748B",
                                    fontWeight: 700,

                                }}
                            >
                                الرقم الحالي
                            </Typography>


                        </Box>
                    </Box>




                    {/* PROGRESS */}


                    <Box
                        mt={3}
                    >

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mb: 1
                            }}
                        >

                            <Typography
                                fontSize={13}
                                color="#64748B"
                            >
                                تقدم الدور
                            </Typography>


                            <Typography
                                fontSize={13}
                                fontWeight={800}
                            >
                                75%
                            </Typography>


                        </Box>



                        <LinearProgress
                            value={75}
                            variant="determinate"
                            sx={{
                                height: 10,
                                borderRadius: 20,
                                bgcolor: "#E2E8F0",

                                "& .MuiLinearProgress-bar": {
                                    borderRadius: 20,
                                    background:
                                        "linear-gradient(90deg,#2563EB,#38BDF8)"
                                }
                            }}
                        />


                    </Box>






                    {/* DOWNLOAD BUTTON */}


                    <Button
                        onClick={handleDownloadTicket}
                        fullWidth
                        variant="contained"
                        startIcon={
                            <DownloadRoundedIcon />
                        }
                        sx={{
                            mt: 3,
                            height: 52,
                            borderRadius: 3,
                            textTransform: "none",
                            fontSize: 15,
                            fontWeight: 800,
                            bgcolor: "#2563EB",
                            boxShadow:
                                "0 10px 25px rgba(37,99,235,.25)",

                            "&:hover": {
                                bgcolor: "#1D4ED8"
                            }
                        }}
                    >

                        تحميل التذكرة

                    </Button>



                </Paper>





                {/* STATS */}

                <Box
                    sx={{
                        display: "flex",
                        gap: 2
                    }}
                >

                    {/* PEOPLE BEFORE YOU */}

                    <Paper
                        elevation={0}
                        sx={{
                            flex: 1,
                            p: 2.5,
                            borderRadius: 5,

                            background:
                                "rgba(255,255,255,.35)",

                            backdropFilter:
                                "blur(20px)",

                            WebkitBackdropFilter:
                                "blur(20px)",

                            border:
                                "1px solid rgba(255,255,255,.7)",

                            boxShadow: `
                0 15px 35px rgba(15,23,42,.06),
                inset 0 1px 0 rgba(255,255,255,.9)
            `,

                            position: "relative",
                            overflow: "hidden",
                        }}
                    >

                        <Box
                            sx={{
                                position: "absolute",
                                top: -20,
                                right: -20,
                                width: 90,
                                height: 90,
                                borderRadius: "50%",
                                background:
                                    "rgba(37,99,235,.15)",
                                filter: "blur(30px)",
                            }}
                        />

                        <Box
                            sx={{
                                width: 52,
                                height: 52,
                                borderRadius: 3,
                                bgcolor: "rgba(37,99,235,.08)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2
                            }}
                        >

                            <PeopleAltRoundedIcon
                                sx={{
                                    fontSize: 30,
                                    color: "#2563EB"
                                }}
                            />

                        </Box>


                        <Typography
                            sx={{
                                fontSize: 38,
                                fontWeight: 1000,
                                color: "#0F172A",
                                lineHeight: 1
                            }}
                        >
                            {peopleBeforeMe > 0 ? peopleBeforeMe : ""}
                        </Typography>


                        <Typography
                            sx={{
                                mt: 1,
                                fontSize: 13,
                                color: "#64748B",
                                fontWeight: 600
                            }}
                        >
                            {peopleBeforeMe === 0
                                ? "أنت التالي 🎉"
                                : "أشخاص قبلك"
                            }
                        </Typography>

                        <Box
                            sx={{
                                mt: 2,
                                width: 40,
                                height: 4,
                                borderRadius: 10,
                                bgcolor: "#2563EB"
                            }}
                        />

                    </Paper>





                    {/* WAITING TIME */}

                    <Paper
                        elevation={0}
                        sx={{
                            flex: 1,
                            p: 2.5,
                            borderRadius: 5,

                            background:
                                "rgba(255,255,255,.35)",

                            backdropFilter:
                                "blur(20px)",

                            WebkitBackdropFilter:
                                "blur(20px)",

                            border:
                                "1px solid rgba(255,255,255,.7)",

                            boxShadow: `
                0 15px 35px rgba(15,23,42,.06),
                inset 0 1px 0 rgba(255,255,255,.9)
            `,

                            position: "relative",
                            overflow: "hidden",
                        }}
                    >

                        <Box
                            sx={{
                                position: "absolute",
                                top: -20,
                                right: -20,
                                width: 90,
                                height: 90,
                                borderRadius: "50%",
                                background:
                                    "rgba(245,158,11,.15)",
                                filter: "blur(30px)",
                            }}
                        />

                        <Box
                            sx={{
                                width: 52,
                                height: 52,
                                borderRadius: 3,
                                bgcolor: "rgba(245,158,11,.08)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2
                            }}
                        >

                            <ScheduleRoundedIcon
                                sx={{
                                    fontSize: 30,
                                    color: "#F59E0B"
                                }}
                            />

                        </Box>


                        <Typography
                            sx={{
                                fontSize: 38,
                                fontWeight: 1000,
                                color: "#0F172A",
                                lineHeight: 1
                            }}
                        >
                            12
                        </Typography>


                        <Typography
                            sx={{
                                mt: 1,
                                fontSize: 13,
                                color: "#64748B",
                                fontWeight: 600
                            }}
                        >
                            دقيقة انتظار
                        </Typography>


                        <Box
                            sx={{
                                mt: 2,
                                width: 40,
                                height: 4,
                                borderRadius: 10,
                                bgcolor: "#F59E0B"
                            }}
                        />

                    </Paper>

                </Box>






                {/* LIVE STATUS */}

                <Paper
                    elevation={0}
                    sx={{
                        p: 2,
                        borderRadius: 5,

                        background:
                            "rgba(255,255,255,.35)",

                        backdropFilter:
                            "blur(20px)",

                        WebkitBackdropFilter:
                            "blur(20px)",

                        border:
                            "1px solid rgba(255,255,255,.7)",

                        boxShadow: `
            0 15px 35px rgba(15,23,42,.06),
            inset 0 1px 0 rgba(255,255,255,.9)
        `,

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",

                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            width: 120,
                            height: 120,
                            borderRadius: "50%",
                            background:
                                "rgba(34,197,94,.15)",
                            filter: "blur(40px)",
                            top: -40,
                            left: -40,
                        }}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            zIndex: 2
                        }}
                    >
                        <Box
                            sx={{
                                width: 42,
                                height: 42,
                                borderRadius: "50%",
                                bgcolor: "rgba(34,197,94,.12)",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <CheckCircleRoundedIcon
                                sx={{
                                    color: "#16A34A"
                                }}
                            />
                        </Box>

                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: 800,
                                    color: "#0F172A",
                                    fontSize: 14
                                }}
                            >
                                النظام يعمل
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#64748B",
                                    fontSize: 12
                                }}
                            >
                                يتم تحديث البيانات بشكل مباشر
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            zIndex: 2
                        }}
                    >
                        <Box
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                bgcolor: "#22C55E",

                                animation: "pulse 1.5s infinite",

                                "@keyframes pulse": {
                                    "0%": {
                                        boxShadow:
                                            "0 0 0 0 rgba(34,197,94,.6)"
                                    },
                                    "70%": {
                                        boxShadow:
                                            "0 0 0 10px rgba(34,197,94,0)"
                                    },
                                    "100%": {
                                        boxShadow:
                                            "0 0 0 0 rgba(34,197,94,0)"
                                    }
                                }
                            }}
                        />

                        <Typography
                            sx={{
                                fontWeight: 700,
                                color: "#16A34A",
                                fontSize: 13
                            }}
                        >
                            مباشر
                        </Typography>
                    </Box>
                </Paper>


            </Box>


        </Box>

    );
}


export default MyTurn;
