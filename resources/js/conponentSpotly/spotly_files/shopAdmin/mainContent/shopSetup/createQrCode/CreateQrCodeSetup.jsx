
import React from "react";
import {
    Box,
    Typography,
    Button,
    IconButton,
} from "@mui/material";
import { keyframes } from "@mui/system";

import { QRCodeCanvas } from "qrcode.react";

import BoltIcon from "@mui/icons-material/Bolt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LanguageIcon from "@mui/icons-material/Language";
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import screen4 from './../../../../../../../img/app/screen4.png'
import { useDispatch, useSelector } from "react-redux";
import { ChangePagesShopSetup } from "../../../../../../redux/slices/shopAdmin/ShopAdmin_slice";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import qrCodeImg from "../../../../../../../img/app/qrCodeImg.png"
import API_CREATE_QR_CODE from "../../../../../api/shopAdmin/qrCode/API_CREATE_QR_CODE";
import { infoShop_selector } from "../../../../../../redux/selectors/shopAdmin/ShopAdmin_selector";

function CreateQrCodeSetup() {


    const revealAnimation = keyframes`
      from {
        opacity: 0;
        transform: translateX(-50%) scale(.5);
        filter: blur(12px);
      }

      to {
        opacity: 1;
        transform: translateX(-50%) scale(1);
        filter: blur(0);
      }
    `;

    const fadeUp = keyframes`
      from {
        opacity: 0;
        transform: translateY(25px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    `;


    let dispatch = useDispatch()
    let handelChangePage = () => {
        dispatch(ChangePagesShopSetup('InfoShopSetup'))
    }

     let infoShop = useSelector(infoShop_selector)
    let idShop = infoShop?.shop?.id
    let uuid = infoShop?.shop?.uuid
    console.log(infoShop)
    // let TUEChangeSetupCompleted = infoShop?.TUE

    let handelCreateQrCode = ()=>{
        API_CREATE_QR_CODE(dispatch,infoShop)
    }

    let qrUrl = uuid
? `http://192.168.100.6:8000/q/${uuid}`
: null;



    return (
        <Box
            dir="rtl"
            sx={{
                height: "100vh",
                overflow: "hidden",
                position: "relative",
                // userSelect: "none",
                bgcolor: "#000",
            }}
        >
            {/* Background */}
            <Box
                component="img"

                // src="https://lh3.googleusercontent.com/aida/AP1WRLtdz9xbPeKdRZviv72kiQQpsbkZTnVg3KN5Bhd5uUQ-s-gbCfNvxculb9K13w4vQhWp5Gspn4ARvyZB3plANt7INkxmKUMMw2D1lr8nWPsrZuNlXza3X_4Jt_nkv_hmCGDA0QcgvGqJUIFIWFVIDybHe2hbVCVq4zgMmd4MR-UDbKa2Zq8c64G96FW_AWBYsTyAYf8w3RUwd3QF2dtJTV3Fep9ULWXiWP0zXLQ62MgSmXMlfMcrdt34Og"
                src={screen4}
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    animation: "slowZoom 40s linear infinite alternate",
                    transform: "scale(1.05)",
                    zIndex: 0,

                    "@keyframes slowZoom": {
                        from: {
                            transform: "scale(1)",
                        },
                        to: {
                            transform: "scale(1.15)",
                        },
                    },
                }}
            />

            {/* Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,.7) 100%)",
                    zIndex: 1,
                }}
            />



            {/* Center Content */}
            <Box
                sx={{
                    mt: { xs: -7, md: 0 },
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 3,
                    textAlign: "center",
                    animation: `${fadeUp} .7s ease-out .2s both`,
                }}
            >


                <Box
                    sx={{
                        px: 4,
                        py: 4,
                        borderRadius: "40px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,

                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,0.12)",

                        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#fff",
                            opacity: 0.85,
                            lineHeight: 1.8,
                            fontSize: {
                                xs: 24,
                                md: "1.4rem",
                            },
                            fontWeight: 500,
                        }}
                    >
                        يمكن لعملائك مسح هذا الرمز للانضمام إلى قائمة الانتظار فوراً.
                    </Typography>

                    <Box
                        sx={{
                            mt:-2,
                            position: "relative",
                            width: "100%",
                            maxWidth: 280,
                            display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                            "&::before": {
                                content: '""',
                                position: "absolute",
                                inset: -20,
                                borderRadius: "50%",
                                background:
                                    "radial-gradient(circle, rgba(116,61,177,.35) 0%, rgba(71,203,228,.15) 50%, transparent 80%)",
                                filter: "blur(25px)",
                            },
                        }}
                    >
                        {
    qrUrl ? (
        <QRCodeCanvas
            value={qrUrl}
            size={250}
        />
    ) : (
        <Box
            component="img"
            src={qrCodeImg}
            alt="QR Code"
            sx={{
                width: "90%",
                height: "90%",
                objectFit: "contain",
                borderRadius: 4,
            }}
        />
    )
}
                    </Box>

                    <Button
                    onClick={handelCreateQrCode}
                        fullWidth
                        sx={{
                            py: 2,
                            borderRadius: "20px",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            color: "#fff",

                            background:'#8e33ef',

                            boxShadow:
                                "0 10px 30px rgba(116,61,177,.35)",

                            "&:hover": {
                            bgcolor: "#6D28D9",
                        },
                        }}
                    >
                        <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                    }}>
                        <QrCode2Icon />
                        <Typography>
                            إنشاء رمز QR
                        </Typography>
                    </Box>

                    </Button>
                </Box>



            </Box>


        </Box>
    )
}

export default CreateQrCodeSetup
