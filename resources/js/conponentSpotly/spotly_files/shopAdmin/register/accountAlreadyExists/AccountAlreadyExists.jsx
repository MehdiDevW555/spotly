

import {
    Box,
    Button,
    Typography,
} from "@mui/material";

import ErrorIcon from "@mui/icons-material/Error";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import UserExistsImage from "../../../../../../img/app/UserExistsImage.png";
import { useDispatch, useSelector } from "react-redux";
import { dataRegisterShopAdmin_selector } from "../../../../../redux/selectors/shopAdmin/ShopAdmin_selector";
import { ChangeDataRegisterShopAdmin } from "../../../../../redux/slices/shopAdmin/ShopAdmin_slice";

export default function AccountAlreadyExists() {
    let dispatch = useDispatch()
    let dataRegisterShopAdmin = useSelector(dataRegisterShopAdmin_selector)
    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#000",
                color: "#fff",
                position: "relative",
                overflow: "hidden",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                px: 2,

            }}
        >
            {/* Purple Glow */}
            <Box
                sx={{
                    position: "absolute",
                    top: -200,
                    right: -200,
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(112,0,255,.15) 0%, transparent 70%)",
                }}
            />

            {/* Cyan Glow */}
            <Box
                sx={{

                    position: "absolute",
                    bottom: -200,
                    left: -200,
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(178,213,255,.1) 0%, transparent 70%)",
                }}
            />

            <Box
                sx={{

                    width: "100%",
                    maxWidth: 450,
                    position: "relative",


                    // zIndex: 2,
                }}
            >
                {/* Card */}
                <Box
                    sx={{
                        // mt: { xs: 0, sm: 2, md: 2 },
                        backdropFilter: "blur(20px)",
                        background: "rgba(255,255,255,.03)",
                        border: "1px solid rgba(255,255,255,.08)",
                        borderRadius: "32px",
                        p: 2,

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        justifyContent: "center",

                        boxShadow:
                            "0 25px 50px -12px rgba(0,0,0,.5)",
                    }}
                >
                    {/* Illustration */}
                    <Box
                        component="img"
                        src={UserExistsImage}
                        alt=""
                        sx={{
                            width: "100%",
                            width: { xs: 380, md: 480 },
                            height: { xs: 220, md: 280 },
                            mb: 2,
                            objectFit: "caver",
                            borderRadius: 5,
                            transition: ".5s",

                            "&:hover": {
                                transform: "scale(1.05)",
                            },
                        }}
                    />

                    {/* Error Icon */}
                    <Box
                        sx={{
                            width: 56,
                            height: 56,
                            borderRadius: "50%",

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",

                            bgcolor: "rgba(244,67,54,.08)",
                            border:
                                "1px solid rgba(244,67,54,.25)",

                            mb: 1,
                        }}
                    >
                        <ErrorIcon
                            sx={{
                                color: "#f44336",
                                fontSize: 32,
                            }}
                        />
                    </Box>

                    {/* Title */}
                    <Typography
                        sx={{
                            fontSize: 32,
                            fontWeight: 700,
                            mb: { xs: 0, md: 0 },
                        }}
                    >
                        الحساب موجود بالفعل
                    </Typography>

                    {/* Description */}
                    <Typography
                        sx={{
                            color: "#a8a8a8",
                            lineHeight: 1.8,
                            maxWidth: 280,
                            mb: 2,
                        }}
                    >
                        يرجى استخدام بريد إلكتروني مختلف
                        لإكمال عملية التسجيل
                    </Typography>

                    {/* Buttons */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <Button
                            fullWidth
                            onClick={() => { dispatch(ChangeDataRegisterShopAdmin({ message: '' })) }}
                            sx={{
                                py: 1.7,

                                borderRadius: "14px",

                                background:
                                    "linear-gradient(135deg,#635bff 0%,#7000ff 100%)",

                                color: "#fff",
                                fontWeight: 700,

                                "&:hover": {
                                    background:
                                        "linear-gradient(135deg,#6e67ff 0%,#7c18ff 100%)",
                                },
                            }}
                        >
                            العودة إلى التسجيل
                        </Button>

                        <Button
                            onClick={() => {
                                window.location.href = "/shopAdmin/login";
                            }}
                            fullWidth
                            variant="outlined"
                            sx={{
                                py: 1.7,
                                borderRadius: "14px",

                                border:
                                    "1px solid rgba(255,255,255,.08)",

                                color: "#bdbdbd",

                                "&:hover": {
                                    bgcolor:
                                        "rgba(255,255,255,.03)",
                                },
                            }}
                        >
                            تسجيل الدخول
                        </Button>
                    </Box>
                </Box>

                {/* Help */}
                <Box
                    sx={{
                        mt: 2,

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,

                        color: "rgba(255,255,255,.5)",
                    }}
                >
                    <InfoOutlinedIcon
                        sx={{
                            fontSize: 20,
                        }}
                    />

                    <Typography
                        sx={{
                            fontSize: 13,
                        }}
                    >
                        هل تواجه مشكلة؟ اتصل بالدعم
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
