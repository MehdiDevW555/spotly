import {
    Box,
    Typography,
    Button,
    IconButton,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import MailIcon from "@mui/icons-material/Mail";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import VerifyEmail from "../../../../../../img/app/verifyEmail.png"
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { ChangeDataRegisterShopAdmin } from "../../../../../redux/slices/shopAdmin/ShopAdmin_slice";
import { useDispatch } from "react-redux";
export default function VerifyEmailPage() {
    let dispatch = useDispatch()
    const openEmailApp = () => {
        window.open("https://mail.google.com", "_blank");
    };
    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#000",
                color: "#e3e2e3",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: { xs: 10, md: 20 },
                    right: 20,
                    zIndex: 10,
                }}
            >
                <Button
                    onClick={() => dispatch(ChangeDataRegisterShopAdmin({ message: '' }))}
                    sx={{
                        // width: 48,
                        // height: 48,
                        // bgcolor: 'rgba(99,91,255,0.15)',
                        // border: '1px solid rgba(99,91,255,0.3)',

                        color: '#635BFF',
                        backdropFilter: 'blur(10px)',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap:1,
                        '&:hover': {
                            bgcolor: '#635BFF',
                            color: '#fff',
                            transform: 'translateX(-3px)',
                        },

                        transition: 'all .3s ease',
                    }}
                >
                    <Typography sx={{fontSize: 20,}}>العودة لصفحة التسجيل </Typography>
                    <ArrowForwardOutlinedIcon fontSize="medium" />
                </Button>
            </Box>

            {/* Glow */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    left: "50%",
                    inset: 0,
                    background:
                        "radial-gradient(circle at center, rgba(99,91,255,.12) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />
            <Box
                sx={{
                    display: { xs: 'block', md: 'none' },
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    inset: 0,
                    background:
                        "radial-gradient(circle at center, rgba(99,91,255,.12) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />


            {/* Main */}
            <Box
                sx={{
                    width: { xs: '100%', sm: '40%', md: '100%', lg: '70%' },
                    // bgcolor:'red',
                    direction: { xs: 'ltr', md: 'rtl' },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: { xs: "space-between", md: "space-between" },
                    alignItems: "center",
                    px: {
                        xs: 0,
                        md: 3,
                    },
                    gap: { xs: 3, md: 0 },
                }}
            >

                {/* Left Content */}

                <Box
                    sx={{
                        mt: { xs: 0,sm:8, md: 8,lg:0 },
                        direction: { xs: 'ltr', md: 'ltr' },
                        width: { xs: '100%', md: '50%' },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                    {/* Phone Preview */}
                    <Box
                        sx={{
                            display: {
                                xs: "flex",
                                lg: "flex",
                            },
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 3,
                        }}
                    >
                        <Box
                            sx={{
                                width: {
                                    xs: '95%',
                                    md: '90%',
                                },
                                height: { xs: "70vh", md: "90vh" },
                                borderRadius: "48px",
                                p: {
                                    xs: 1.5,
                                    md: 1.5,
                                },
                                position: "relative",
                                overflow: "hidden",
                                // backdropFilter: "blur(20px)",
                                border: "5px solid rgba(255,255,255,.08)",
                                background: "rgba(255,255,255,.04)",
                            }}
                        >
                            <Box
                                component="img"
                                src={VerifyEmail}
                                alt=""
                                sx={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    width: "100%",
                                    height: "90%",
                                    objectFit: "caver",
                                    borderRadius: "40px",
                                }}
                            />
                            <Box sx={{
                                position: "absolute",
                                top: 25,
                                left: '50%',
                                transform: "translateX(-50%)",
                                width: "90%",
                            }}>
                                <Box sx={{ px: { xs: 0, md: 2 }, display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>

                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: 30,
                                                sm: 20,
                                                md: 35,
                                            },
                                            fontWeight: 900,
                                            textAlign: "center",
                                            mb: 2,
                                        }}
                                    >
                                        تحقق من بريدك الإلكتروني
                                    </Typography>

                                    <Typography
                                        sx={{
                                            maxWidth: { xs: 350, md: 500 },
                                            color: "#c7c4d8",
                                            fontSize: { xs: 13, sm: 10, md: 13 },
                                            lineHeight: 1.8,
                                            textAlign: "center",
                                            mb: 5,
                                        }}
                                    >
                                        لقد أرسلنا رابط تحقق إلى عنوان بريدك الإلكتروني.
                                        يرجى فتح صندوق الوارد الخاص بك والنقر على زر التحقق
                                        لتنشيط حسابك.
                                    </Typography>


                                </Box>
                            </Box>

                            <Box sx={{
                                position: "absolute",
                                bottom: { xs: 130, md: 150 },
                                left: '50%',
                                transform: { xs: "translateX(10%)", md: "translateX(20%)" },
                                // width: "90%",
                            }}>

                                <Button
                                    startIcon={<MarkEmailUnreadIcon />}
                                    onClick={openEmailApp}
                                    sx={{
                                        position: "relative",
                                        overflow: "hidden",

                                        px: { xs: 2.5, md: 3.5 },
                                        py: { xs: 1, md: 1 },

                                        borderRadius: "30px 40px 0 30px",

                                        background:
                                            "linear-gradient(135deg,#EA4335 0%,#FBBC05 35%,#34A853 70%,#4285F4 100%)",

                                        color: "#ffffff",
                                        fontWeight: 700,
                                        textTransform: "none",
                                        border: '1.5px solid #fff',

                                        animation: "floating 2.5s ease-in-out infinite",

                                        "@keyframes floating": {
                                            "0%": {
                                                transform: "translateY(0px)",
                                            },
                                            "50%": {
                                                transform: "translateY(-10px)",
                                            },
                                            "100%": {
                                                transform: "translateY(0px)",
                                            },
                                        },

                                        "&::before": {
                                            content: '""',
                                            position: "absolute",
                                            top: 0,
                                            left: "-150%",
                                            width: "80%",
                                            height: "100%",
                                            background:
                                                "linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent)",
                                            animation: "shine 2s infinite",
                                        },

                                        "@keyframes shine": {
                                            "0%": {
                                                left: "-150%",
                                            },
                                            "100%": {
                                                left: "150%",
                                            },
                                        },

                                        "&:hover": {
                                            transform: "translateY(-3px) scale(1.04)",
                                        },

                                        "&:active": {
                                            transform: "scale(.97)",
                                        },
                                    }}
                                >
                                    Gmail افتح
                                </Button>

                            </Box>

                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 20,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "85%",
                                }}
                            >
                                <Box
                                    sx={{
                                        p: 2,
                                        borderRadius: 4,
                                        backdropFilter: "blur(20px)",
                                        bgcolor: "rgba(31,32,33,.7)",
                                        border: "1px solid rgba(255, 255, 255, 0.12)",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1.5,
                                            mb: 1,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 34,
                                                height: 34,
                                                borderRadius: "50%",
                                                bgcolor: "#635bff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <MailIcon
                                                sx={{
                                                    fontSize: 18,
                                                    color: "#fff",
                                                }}
                                            />
                                        </Box>

                                        <Box>
                                            <Box
                                                sx={{
                                                    width: 80,
                                                    height: 8,
                                                    bgcolor: "#fff",
                                                    borderRadius: 20,
                                                    mb: 1,
                                                }}
                                            />

                                            <Box
                                                sx={{
                                                    width: 50,
                                                    height: 6,
                                                    bgcolor: "rgba(255,255,255,.3)",
                                                    borderRadius: 20,
                                                }}
                                            />
                                        </Box>
                                    </Box>

                                    <Box
                                        sx={{
                                            width: "100%",
                                            height: 6,
                                            bgcolor: "rgba(255,255,255,.12)",
                                            borderRadius: 20,
                                            mb: 1,
                                        }}
                                    />

                                    <Box
                                        sx={{
                                            width: "70%",
                                            height: 6,
                                            bgcolor: "rgba(255,255,255,.12)",
                                            borderRadius: 20,
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>



                    </Box>
                </Box>


                <Box sx={{ width: { xs: '80%', md: '50%' }, px: { xs: 0, md: 2 }, gap: 2, display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>


                    <Typography
                        sx={{
                            color: "#ffffff",
                            fontSize: { xs: 14, md: 22 },
                            width: "100%",
                            textAlign: "center",
                        }}
                    >
                        لم تستلم البريد الإلكتروني؟ تحقق من مجلد الرسائل غير المرغوب فيها (spam)
                    </Typography>

                    <Button
                        variant="outlined"
                        sx={{
                            borderRadius: "999px",
                            px: 4,
                            color: "#fff",
                            borderColor: "rgba(255, 255, 255, 0.61)",
                        }}
                    >
                        إعادة إرسال البريد الإلكتروني
                    </Button>
                </Box>



            </Box>

        </Box>
    );
}
