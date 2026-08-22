import {
    Box,
    Paper,
    Typography,
    Button,
    Chip,
    IconButton,
} from "@mui/material";
import { keyframes } from "@mui/system";
import { QRCodeCanvas } from "qrcode.react";
import React, { useRef, useState } from "react";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import StorefrontIcon from "@mui/icons-material/Storefront";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import html2canvas from "html2canvas";
import Snackbar from "@mui/material/Snackbar";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
function AvailableQrCode(props) {
    let { infoShop } = props
    let uuid = infoShop?.shop?.uuid
    // let qrUrl = uuid
    //     ? `http://192.168.100.6:8000/q/${uuid}`
    //     : null;

    let qrUrl = uuid
    ? `https://spotlly.com/q/${uuid}`
    : null;

    console.log(import.meta.env.VITE_APP_URL);

    const [openCopy, setOpenCopy] = useState(false);

    const scanAnimation = keyframes`
  0% {
    transform: translateY(-10px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(-10px);
  }
`;

    const handleCopyLink = () => {
        const textarea = document.createElement("textarea");

        textarea.value = qrUrl;

        document.body.appendChild(textarea);

        textarea.select();

        document.execCommand("copy");

        document.body.removeChild(textarea);

        setOpenCopy(true);
    };

    // const qrRef = useRef(null);
    // const handleDownloadQR = () => {

    //     const canvas = qrRef.current.querySelector("canvas");

    //     const url = canvas.toDataURL("image/png");

    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.download = "qr-code.png";

    //     link.click();
    // };



    const downloadRef = useRef(null);

    const handleDownloadQR = async () => {
        const canvas = await html2canvas(downloadRef.current, {
            backgroundColor: null,
            scale: 2, // جودة أعلى
        });

        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = image;
        link.download = `${infoShop?.shop?.shop_name}-qr.png`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (

        <>


            <Box dir='rtl' sx={{

                minHeight: "calc(100vh - 120px)",
                mb: 15,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // height: "100vh",
                px: 2,
                position: "relative",
                overflow: "hidden",
            }}>
                <Box
                    sx={{

                        mt: 11,
                        // position: "relative",
                        // zIndex: 2,
                        // display: "flex",
                        // flexDirection: "column",
                        // alignItems: "center",
                        // justifyContent: 'center',
                        // textAlign: "center",
                        maxWidth: 750,
                    }}
                >
                    <Paper


                        elevation={0}
                        sx={{
                            py: {
                                xs: 4,
                                sm: 8,
                            },
                            px: {
                                xs: 2,
                                sm: 4,
                            },
                            borderRadius: 10,
                            display: "flex",
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: "center",
                            justifyContent: { xs: 'center', sm: 'flex-start' },
                            gap: 2,
                            textAlign: "center",
                            // position: "relative",
                            // overflow: "hidden",
                            border: "1px solid #f5dbfe",
                            bgcolor: 'transparent',

                            backgroundImage: `
                            radial-gradient(
                                circle,
                                rgba(221, 59, 246, 0.25) 1px,
                                transparent 2px
                            )
                        `,
                            backgroundSize: "20px 20px",
                        }}

                    >

                        {/* Glow Top Right */}


                        {/* Glow Bottom Left */}



                        {/* QR */}
                        <Box
                            sx={{
                                position: "relative",
                                width: {
                                    xs: "100%",
                                    sm: 300,
                                },
                                height: {
                                    xs: "100%",
                                    sm: 260,
                                },
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    // width: "100%",
                                    // height: "100%",
                                    px: { xs: 4, sm: 4 },
                                    py: { xs: 4, sm: 18 },
                                    borderRadius: 5,
                                    bgcolor: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",

                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: { xs: 15, sm: 15 },
                                        left: 15,
                                        width: 35,
                                        height: 35,
                                        borderTop: "5px solid #16ced4",
                                        borderLeft: "5px solid #16ced4",
                                        borderRadius: "12px 0 0 0",
                                    },

                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        bottom: { xs: 15, sm: 15 },
                                        right: 15,
                                        width: 35,
                                        height: 35,
                                        borderBottom: "5px solid #16ced4",
                                        borderRight: "5px solid #16ced4",
                                        borderRadius: "0 0 12px 0",
                                    },
                                }}
                            >

                                <Box
                                    sx={{
                                        position: "relative",
                                        bgcolor: "#fff",
                                        borderRadius: 3,
                                        p: 1,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <QRCodeCanvas
                                        value={qrUrl}
                                        size={220}
                                        level="H"
                                    />
                                    <Box
                                        component="img"
                                        src="/images/slogo.png"
                                        alt="logo"
                                        sx={{
                                            position: "absolute",
                                            width: 70,
                                            height: 70,
                                            borderRadius: "50%",
                                            bgcolor: "#ffffff",
                                            // border:2,
                                            p: 0.5,
                                            objectFit: "contain",
                                        }}
                                    />
                                </Box>


                                <Box
                                    sx={{
                                        position: "absolute",
                                        left: 25,
                                        right: 25,
                                        top: "45%",
                                        animation: `${scanAnimation} 3s ease-in-out infinite`,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: 25,
                                            background:
                                                "linear-gradient(to bottom, rgba(22,206,212,.74), transparent)",
                                            filter: "blur(8px)",
                                            pointerEvents: "none",
                                        }}
                                    />

                                    <Box
                                        sx={{
                                            position: "absolute",
                                            left: 0,
                                            right: 0,
                                            top: 0,
                                            height: 4,
                                            borderRadius: 999,
                                            bgcolor: "#16ced4",
                                        }}
                                    />
                                </Box>


                            </Paper>


                            <Box
                                onClick={handleDownloadQR}
                                sx={{
                                    position: "absolute",
                                    top: -20,
                                    right: {
                                        xs: 15,
                                        md: -15,
                                    },

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 1,

                                    px: 2.5,
                                    py: 1,

                                    borderRadius: "30px",

                                    background: "linear-gradient(135deg, #16ced4, #2563eb)",

                                    color: "#fff",

                                    fontWeight: 800,

                                    cursor: "pointer",

                                    boxShadow: `
            0 8px 20px rgba(22,206,212,0.35),
            0 0 0 5px rgba(22,206,212,0.08)
        `,

                                    transition: "all .3s ease",

                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: `
                0 12px 30px rgba(22,206,212,0.45),
                0 0 0 8px rgba(22,206,212,0.1)
            `,
                                    },

                                    "&:active": {
                                        transform: "scale(.95)",
                                    },
                                }}
                            >
                                <CloudDownloadIcon
                                    sx={{
                                        fontSize: 22,
                                    }}
                                />

                                <Typography
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: 14,
                                    }}
                                >
                                    تنزيل QR
                                </Typography>
                            </Box>
                        </Box>





                        {/* Details */}

                        <Box flex={1}>

                            {/* Header */}
                            <Box

                                sx={{
                                    mt: 2,
                                    mb: 3,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                }}
                            >

                                {/* Icon */}
                                <Box
                                    sx={{
                                        width: 70,
                                        height: 65,
                                        borderRadius: 4,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background:
                                            "linear-gradient(135deg,#8b5cf6,#06b6d4)",
                                        color: "#fff",
                                        boxShadow:
                                            "0 10px 25px rgba(139,92,246,.25)",
                                    }}
                                >
                                    <StorefrontIcon
                                        sx={{
                                            fontSize: 40
                                        }}
                                    />
                                </Box>


                                {/* Information */}
                                <Box>

                                    <Typography
                                        variant="h5"
                                        fontWeight={900}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            letterSpacing: "-0.5px",
                                            // lineHeight: 1.2,
                                        }}
                                    >
                                        {infoShop?.shop?.shop_name}
                                    </Typography>


                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            // flexDirection:'column',
                                            gap: 0.5,
                                            mt: .7,
                                            flexWrap: "wrap"
                                        }}
                                    >

                                        <Chip
                                            label={infoShop?.shop?.business_type}
                                            size="small"
                                            sx={{
                                                fontWeight: 700,
                                                bgcolor: "#ede9fe",
                                                color: "#7c3aed",
                                                borderRadius: 2
                                            }}
                                        />


                                        <Typography
                                            noWrap
                                            color="text.secondary"
                                            sx={{
                                                width: 150,
                                                fontSize: 13,
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                // whiteSpace: "nowrap",
                                                // display: "-webkit-box",
                                                // WebkitLineClamp: 2,
                                                // WebkitBoxOrient: "vertical",
                                            }}
                                        >
                                            {infoShop?.shop?.address}
                                        </Typography>


                                    </Box>

                                </Box>


                            </Box>


                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: {
                                        xs: "1fr",
                                        sm: "1fr"
                                    },
                                    gap: 2
                                }}
                            >


                                {/* URL */}
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 2.5,
                                        borderRadius: 5,
                                        border: "1px solid #e5e7eb",
                                        background:
                                            "linear-gradient(135deg,#f8fafc,#ffffff)",
                                    }}
                                >

                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            mb: 1
                                        }}
                                    >
                                        <LinkIcon
                                            sx={{
                                                color: "#2563eb"
                                            }}
                                        />

                                        <Typography
                                            fontSize={13}
                                            color="text.secondary"
                                        >
                                            رابط الحجز
                                        </Typography>

                                    </Box>


                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1
                                        }}
                                    >

                                        <Typography
                                            onClick={() => window.open(qrUrl, "_blank")}
                                            sx={{
                                                // width:100,
                                                position: 'relative',
                                                textAlign: 'left',
                                                fontSize: 11,
                                                fontWeight: 700,
                                                bgcolor: "#eff6ff",
                                                color: "#2563eb",
                                                borderRadius: '15px 0px 15px 15px',
                                                pl: 2,
                                                pr: 3,
                                                py: 1,
                                                overflowWrap: "anywhere",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {qrUrl}
                                            <Box sx={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                fontSize: 10,
                                                // bgcolor:"#2563eb",
                                                // borderTop: '1px solid #2563eb',
                                                // border: '1px solid #2563eb',
                                                borderRadius: '5px 1px 5px 1px'

                                            }}>
                                                <LaunchOutlinedIcon sx={{
                                                    fontSize: 20, fontWeight: 1000, color: "2563eb",
                                                }} />
                                            </Box>
                                        </Typography>

                                        <IconButton
                                            onClick={handleCopyLink}

                                            sx={{
                                                bgcolor: "#2563eb",
                                                color: "#fff",
                                                "&:hover": {
                                                    bgcolor: "#1d4ed8"
                                                }
                                            }}
                                        >
                                            <ContentCopyIcon />
                                        </IconButton>


                                    </Box>

                                </Paper>

                                <Box sx={{
                                    display: 'flex',
                                    // alignItems:'center',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    // justifyContent:'center',
                                    gap: 2,
                                }}>



                                    {/* Created */}
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 2.5,
                                            borderRadius: 5,
                                            border: "1px solid #e5e7eb",
                                        }}
                                    >

                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1
                                            }}
                                        >

                                            <AccessTimeIcon
                                                sx={{
                                                    color: "#9333ea"
                                                }}
                                            />

                                            <Typography
                                                fontSize={13}
                                                color="text.secondary"
                                            >
                                                تاريخ إنشاء QR
                                            </Typography>

                                        </Box>


                                        <Typography
                                            mt={1}
                                            fontWeight={900}
                                        >
                                            {
                                                new Date(
                                                    infoShop?.shop?.created_at
                                                ).toLocaleDateString('ar-DZ')
                                            }
                                        </Typography>


                                    </Paper>




                                    {/* Scans */}
                                    {/* <Paper
                                        elevation={0}
                                        sx={{
                                            p: 2.5,
                                            borderRadius: 5,
                                            background:
                                                "linear-gradient(135deg,#ecfeff,#ffffff)",
                                            border: "1px solid #cffafe",
                                            position: "relative",
                                            overflow: "hidden",
                                        }}
                                    >

                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                                // mb:1
                                            }}
                                        >

                                            <Box
                                                sx={{
                                                    // width: 42,
                                                    // height: 42,
                                                    // p:1,
                                                    borderRadius: 3,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    // bgcolor: "#cffafe",
                                                    color: "#0891b2",
                                                }}
                                            >
                                                <QrCodeScannerIcon />
                                            </Box>


                                            <Typography
                                                fontSize={13}
                                                color="text.secondary"
                                                fontWeight={700}
                                            >
                                                إجمالي المسحات
                                            </Typography>

                                        </Box>


                                        <Typography
                                            fontSize={34}
                                            fontWeight={900}
                                            color="#0891b2"
                                        >
                                            1,248
                                        </Typography>


                                        <Typography
                                            fontSize={12}
                                            color="text.secondary"
                                        >
                                            عميل دخل إلى صفحة الحجز
                                        </Typography>


                                    </Paper> */}


                                </Box>

                            </Box>

                        </Box>


                    </Paper>


                </Box>


                <Snackbar
                    sx={{
                        display: { xs: 'none', sm: 'block' }
                    }}
                    open={openCopy}
                    autoHideDuration={2000}
                    onClose={() => setOpenCopy(false)}
                    message="تم نسخ الرابط بنجاح"
                />
            </Box>



            <Box
                ref={downloadRef}
                sx={{
                    position: "fixed",
                    left: "-9999px",
                    top: 0,

                    width: 550,

                    background:
                        "linear-gradient(180deg,#ffffff,#f8fafc)",

                    // borderRadius: 8,

                    overflow: "hidden",

                    // border: "3px solid #16ced4",

                    boxShadow:
                        "0 20px 50px rgba(0,0,0,.15)",
                }}
            >

                {/* Header */}
                <Box
                    sx={{
                        // mt: 15,
                        position: "relative",
                        overflow: "hidden",

                        background:
                            "linear-gradient(135deg,#0f172a 0%, #1e293b 35%, #2563eb 100%)",

                        color: "#fff",

                        py: 5,
                        px: 4,

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: 'center',


                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: -80,
                            right: -80,
                            width: 220,
                            height: 220,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,.08)",
                        },

                        "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: -60,
                            left: -60,
                            width: 180,
                            height: 180,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,.05)",
                        },
                    }}
                >
                    <Box
                        dir="ltr"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                            mb: 2,
                        }}
                    >
                        {/* Logo */}
                        <Box
                            sx={{
                                width: 85,
                                height: 85,

                                borderRadius: "50%",

                                bgcolor: "rgba(255,255,255,.15)",

                                backdropFilter: "blur(12px)",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                border: "2px solid rgba(255,255,255,.2)",

                                flexShrink: 0,
                            }}
                        >
                            <StorefrontIcon sx={{ fontSize: 45 }} />
                        </Box>

                        {/* Shop Info */}
                        <Box
                            sx={{
                                mt: -3,
                                width: 85,
                                height: 85,

                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                gap: 1,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 34,
                                    fontWeight: 900,
                                    // lineHeight: 1,
                                }}
                            >
                                {infoShop?.shop?.shop_name}
                            </Typography>
                            <Typography
                                sx={{
                                    borderRadius: 8,
                                    px: 2,
                                    pb: 2,
                                    bgcolor: "rgba(255,255,255,.15)",
                                    color: "#fff",
                                    fontWeight: 800,
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,.15)",
                                }}
                            >
                                {infoShop?.shop?.business_type}
                            </Typography>


                        </Box>
                    </Box>

                    {/* Main Message */}
                    <Box
                        sx={{
                            width: "fit-content",
                            mx: "auto",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,

                            px: 3,
                            py: 0.5,

                            borderRadius: "999px",

                            bgcolor: "rgba(255,255,255,.12)",
                            border: "1px solid rgba(255,255,255,.12)",
                        }}
                    >
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }} >

                            <QrCodeScannerIcon
                                sx={{
                                    fontSize: 25,
                                    display: "block",
                                }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                fontWeight: 800,
                                fontSize: 18,
                                // lineHeight: 1,
                                mb: 2,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            Réservez votre place maintenant
                        </Typography>
                    </Box>

                    {/* Small Text */}
                    <Typography
                        sx={{
                            mt: 2,
                            fontSize: 13,
                            opacity: .8,
                            textAlign: "center",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        Scannez le QR Code avec votre téléphone pour rejoindre la file d'attente
                    </Typography>

                </Box>



                {/* Content */}
                <Box
                    sx={{
                        p: 4,
                    }}
                >


                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 4,
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                bgcolor: "#fff",
                                border: '2px dashed #16CED4',
                                borderRadius: 5,
                                p: 2,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <QRCodeCanvas
                                value={qrUrl}
                                size={220}
                                level="H"
                            />

                            <Box
                                component="img"
                                src="/images/slogo.png"
                                alt="logo"
                                sx={{
                                    position: "absolute",
                                    width: 85,
                                    height: 85,
                                    borderRadius: "50%",
                                    bgcolor: "#000000",
                                    p: 0.5,
                                    objectFit: "contain",
                                    border: '4px solid #fff',
                                }}
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            bgcolor: "#ecfeff",
                            border: "1px solid #a5f3fc",
                            borderRadius: 4,
                            p: 2,
                        }}
                    >
                        <Typography
                            textAlign="center"
                            fontSize={14}
                            color="#0f172a"
                            fontWeight={700}
                        >
                            Scannez ce code pour rejoindre directement la file d'attente
                        </Typography>
                    </Box>

                    <Typography
                        textAlign="center"
                        mt={3}
                        color="#94a3b8"
                        fontSize={12}
                    >
                        Rapide • Simple • Sans attente
                    </Typography>
                </Box>

            </Box>
        </>

    )
}

export default AvailableQrCode
