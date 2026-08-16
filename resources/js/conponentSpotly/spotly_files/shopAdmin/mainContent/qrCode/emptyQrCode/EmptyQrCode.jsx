import {
    Box,
    Paper,
    Typography,
    Button,
} from "@mui/material";

import QrCode2Icon from "@mui/icons-material/QrCode2";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BoltIcon from "@mui/icons-material/Bolt";
// import MonitoringIcon from "@mui/icons-material/Monitoring";
import InfoIcon from "@mui/icons-material/Info";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import { ChangeCurrentPage, ChangePreviousPage } from "../../../../../../redux/slices/shopAdmin/ShopAdmin_slice";


function EmptyQrCode(props) {
    let { dispatch } = props
    return (
        <Box
            // sx={{
            //     pt: 12,
            //     pb: 8,
            //     px: { xs: 2, md: 4 },
            //     maxWidth: "1400px",
            //     mx: "auto",
            // }}
            sx={{
                mb: 15,
                minHeight: "calc(100vh - 120px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                px: 2,
                position: "relative",
                overflow: "hidden",
            }}
        >




            {/* Grid */}
            <Box
                // sx={{
                //     display: "grid",
                //     gridTemplateColumns: {
                //         xs: "1fr",
                //         md: "repeat(12,1fr)",
                //     },
                //     gap: 3,
                // }}

                sx={{

                    mt: 0,
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: 'center',
                    textAlign: "center",
                    maxWidth: 550,
                }}
            >
                {/* Main Card */}
                <Paper
                    elevation={0}
                    sx={{
                        bgcolor: 'transparent',
                        gridColumn: {
                            xs: "span 1",
                            md: "span 12",
                        },
                        py: {
                            xs: 4,
                            md: 8,
                        },
                        px: {
                            xs: 0,
                            md: 2,
                        },
                        borderRadius: 6,
                        textAlign: "center",
                        // position: "relative",
                        // overflow: "hidden",
                        // border: "1px solid #dbeafe",
                        // bgcolor: "#f8fbff",

                        //                 backgroundImage: `
                        //     radial-gradient(
                        //         circle,
                        //         rgba(59,130,246,.25) 1px,
                        //         transparent 1px
                        //     )
                        // `,
                        //                 backgroundSize: "20px 20px",
                    }}
                >
                    {/* Glow Top Right */}
                    {/* <Box
                        sx={{
                            position: "absolute",
                            top: -120,
                            right: -120,
                            width: 320,
                            height: 320,
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(37,99,235,.12) 0%, transparent 70%)",
                            filter: "blur(40px)",
                        }}
                    /> */}

                    {/* Glow Bottom Left */}
                    {/* <Box
                        sx={{
                            position: "absolute",
                            bottom: -120,
                            left: -120,
                            width: 320,
                            height: 320,
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(6,182,212,.10) 0%, transparent 70%)",
                            filter: "blur(40px)",
                        }}
                    /> */}

                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 2,
                        }}

                    >
                        {/* Icon */}
                        <Box
                            sx={{
                                width: 150,
                                height: 150,
                                mx: "auto",
                                mb: 4,
                                borderRadius: 4,
                                bgcolor: "#2563EB",
                                color: "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow:
                                    "0 20px 40px rgba(37,99,235,.25)",
                            }}
                        >
                            <QrCode2Icon
                                sx={{
                                    fontSize: 100,
                                }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                fontSize: {
                                    xs: 27,
                                    md: 40,
                                },
                                fontWeight: 800,
                                color: "#1E293B",
                                mb: 2,
                            }}
                        >
                            بعد Qr لم يتم إنشاء رمز
                        </Typography>

                        <Box
                            // severity="info"
                            sx={{
                                direction: 'rtl',
                                p: 1.5,
                                bgcolor: '#cdfed4',
                                mb: 4,
                                borderRadius: '20px 20px 0 20px',
                                display: "flex",
                                // flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                gap: 1,
                            }}
                        >
                            <InfoIcon sx={{ color: "#22ff00" }} />
                            <Box>

                                <Typography
                                    sx={{
                                        mb: 0.5,
                                        fontWeight: 700,
                                        textAlign: 'start',
                                    }}
                                >
                                    معلومة سريعة
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#64748B",
                                        fontSize: 14,
                                        maxWidth: 600,
                                        textAlign: 'right',
                                        // lineHeight: 2,

                                    }}
                                >
                                    أنشئ رمز QR الخاص بنشاطك ليتمكن العملاء
                                    من الوصول إلى صفحة الحجز، تتبع دورهم، والحصول على تجربة انتظار خالية من الاحتكاك
                                </Typography>
                            </Box>
                        </Box>



                        <Button
                            onClick={() => { dispatch(ChangeCurrentPage('AvailableQrCode')), dispatch(ChangePreviousPage('QrCode')) }}

                            variant="contained"
                            sx={{
                                px: 4,
                                py: 1.7,
                                borderRadius: 4,
                                fontWeight: 700,
                                fontSize: "1rem",
                                boxShadow:
                                    "0 10px 30px rgba(37,99,235,.35)",
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 1,
                            }}>
                                <Typography>
                                    QR إنشاء رمز
                                </Typography>
                                <AddCircleIcon />
                            </Box>

                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}

export default EmptyQrCode
