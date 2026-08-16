import React, { useState } from 'react'
import {
    Box,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    CircularProgress,
} from "@mui/material";
import API_SEND_DATA_REGISTER_SHOP_ADMIN from '../../../../api/shopAdmin/register/API_SEND_DATA_REGISTER_SHOP_ADMIN';
import { ChangeDataRegisterShopAdmin } from '../../../../../redux/slices/shopAdmin/ShopAdmin_slice';
import registerImagex from "../../../../../../img/app/registerImagex.png"
import registerImagey from "../../../../../../img/app/registerImagey.png"

function RegisterPage(props) {
    const [acceptTerms, setAcceptTerms] = useState(false);
    let { dispatch, dataRegisterShopAdmin } = props
    let { full_name, shop_name, email, phone, password, confirm_password, loading, message, errors } = dataRegisterShopAdmin
    let FullName = full_name
    let ShopName = shop_name
    let Email = email
    let Phone = phone
    let Password = password
    let ConfirmPassword = confirm_password
    let Loading = loading
    let Message = message
    let Errors = errors
    console.log(Errors)

    const passwordMismatch =
        ConfirmPassword &&
        Password !== ConfirmPassword;

    let handelChange = (field) => (e) => {
        let value = e.target.value
        dispatch(ChangeDataRegisterShopAdmin({
            [field]: value,
            errors: {
                ...dataRegisterShopAdmin.errors,
                [field]: undefined
            }
        }));
    }


    let sendDataRegisterShopAdmin = () => {

        if (!acceptTerms) {
            alert("يجب الموافقة على الشروط والأحكام وسياسة الخصوصية");
            return;
        }

        if (
            !FullName.trim() ||
            !ShopName.trim() ||
            !Email.trim() ||
            !Phone.trim() ||
            !Password.trim() ||
            !ConfirmPassword.trim()
        ) {
            alert("يرجى ملء جميع الحقول");
            return;
        }

        if (Password !== ConfirmPassword) {
            alert("كلمتا المرور غير متطابقتين");
            return;
        }
        API_SEND_DATA_REGISTER_SHOP_ADMIN(dispatch, dataRegisterShopAdmin)
    }
    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#000000",
                color: "#e3e2e3",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // px: 2,
            }}
        >
            {/* Background Glow */}
            <Box
                sx={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 0,
                    background: `
                        radial-gradient(circle at 80% 20%, rgba(99,91,255,.15) 0%, transparent 40%),
                        radial-gradient(circle at 20% 80%, rgba(112,0,255,.1) 0%, transparent 40%)
                    `,
                }}
            />

            {/* Decorative Circles */}
            <Box
                sx={{
                    position: "absolute",
                    width: 600,
                    height: 600,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    opacity: 0.2,
                    pointerEvents: "none",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        border: "1px solid rgba(195,192,255,.2)",
                        borderRadius: "50%",
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        inset: 60,
                        border: "1px solid rgba(167,202,243,.1)",
                        borderRadius: "50%",
                    }}
                />
            </Box>

            {/* Content */}
            <Box
                sx={{
                    direction: "rtl",
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                    gap: {
                        xs: 0,
                        lg: 8,
                    },
                    width: "100%",
                    minHeight: "100vh",
                    zIndex: 2,
                }}
            >
                {/* Image Section */}
                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            md: "45%",
                        },
                        height: {
                            xs: "100%",
                            md: "100vh",
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    {/* الشعار فوق الصورة */}
                    {/* <Box
                        component="img"
                        src="/images/spotlyLogo.png"
                        alt="Spotly Logo"
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'block',
                            },
                            position: "absolute",
                            top: {
                                xs: 5,
                                md: 50,
                            },
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: {
                                xs: 250,
                                sm: 300,
                                md: 250,
                            },
                            height: {
                                xs: 80,
                                sm: 150,
                                md: 125,
                            },
                            zIndex: 2,
                        }}
                    /> */}


                    {/* الصورة الرئيسية */}
                    <Box
                        component="img"
                        src={registerImagex}
                        // src={Step5}
                        alt="Spotly"
                        sx={{
                            mt: { xs: 0, md: 0 },
                            width: "100%",
                            height: "100%",
                            objectFit: {
                                xs: "cover",
                                md: "cover",
                            },
                        }}
                    />
                </Box>

                {/* Form Section */}
                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            md: "45%",
                        },
                        // height:'100%',

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: {
                            xs: 0,
                            md: 0,
                        },
                    }}
                >
                    <Box
                        sx={{
                            boxShadow: {
                                xs: "0 -20px 40px rgba(89, 186, 215, 0.36)",
                                sm: "none",
                            },
                            width: "100%",
                            maxWidth: 650,
                            background: {
                                xs: "rgba(22,25,29,.6)",
                                md: 'none',
                            },
                            backdropFilter: "blur(20px)",
                            borderTop: {
                                xs: "10px double rgba(127, 0, 246, 0.73)",
                                md: 'none',
                            },

                            height: {
                                // xs: "100vh",
                                // sm: "100vh",
                                md: "100vh",
                            },

                            borderRadius: "50px 50px 0 0",
                            mt: {
                                xs: -4,
                                md: 0,
                            },
                            p: {
                                xs: 3,
                                md: 4,
                            },
                        }}
                    >
                        <Box sx={{
                            display: {
                                xs: 'flex',
                                md: 'none',
                            },
                            alignItems: 'flex-start',
                            justifyContent: "center"
                        }}>

                            <Box
                                component="img"
                                src="/images/spotlyLogo.png"
                                alt="Spotly Logo"
                                sx={{

                                    // position: "absolute",
                                    mt: { xs: -2, md: -1 },
                                    mb: { xs: 0, md: 1.5 },
                                    // left: "50%",
                                    // transform: "translateX(-50%)",
                                    width: {
                                        xs: 250,
                                        sm: 300,
                                        md: 250,
                                    },
                                    height: {
                                        xs: 90,
                                        sm: 150,
                                        md: 125,
                                    },
                                    zIndex: 2,
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: {
                                    xs: 3,
                                    md: 2
                                }
                            }}

                        >
                            <Typography

                                sx={{
                                    fontSize: {
                                        xs: 30,
                                        md: 45,
                                    },
                                    fontWeight: 800,
                                    mb: 1,
                                    textAlign: "center",
                                }}
                            >
                                Create Account
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#c7c4d8",
                                    textAlign: "center",
                                }}
                            >
                                ابدا رحلتك مع Spotly في دقائق معدودة
                            </Typography>
                        </Box>

                        <Box
                            component="form"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: {
                                    xs: 1,
                                    md: 2,
                                },
                            }}
                        >
                            <Box sx={{
                                width: '100%',
                                display: "flex",
                                flexDirection: {
                                    xs: "row",
                                    lg: "row",
                                },
                                alignItems: 'center',
                                justifyContent: {
                                    xs: 'space-between',
                                    lg: "space-between",
                                },
                                gap: 2

                            }}>

                                <Box sx={{ width: '50%', }}>
                                    <Typography
                                        sx={{
                                            color: "#c7c4d8",
                                            fontSize: 14,
                                            mb: 1,
                                        }}
                                    >
                                        الاسم و اللقب
                                    </Typography>

                                    <TextField
                                        fullWidth
                                        onChange={handelChange('full_name')}
                                        value={FullName || ""}
                                        placeholder="أدخل الاسم و اللقب"
                                        error={Boolean(Errors?.full_name)}
                                        helperText={Errors?.full_name?.[0] || ""}
                                        sx={fieldStyle}
                                    />
                                </Box>

                                <Box sx={{ width: '50%', }}>
                                    <Typography
                                        sx={{
                                            color: "#c7c4d8",
                                            fontSize: 14,
                                            mb: 1,
                                        }}
                                    >
                                        اسم الشركة
                                    </Typography>

                                    <TextField
                                        onChange={handelChange('shop_name')}
                                        value={ShopName}
                                        fullWidth
                                        placeholder=" اسم جهة العمل"
                                        error={Boolean(Errors?.shop_name)}
                                        helperText={Errors?.shop_name?.[0] || ""}
                                        sx={fieldStyle}
                                    />
                                </Box>

                            </Box>



                            <Box sx={{ width: '100%' }}>
                                <Typography
                                    sx={{
                                        color: "#c7c4d8",
                                        fontSize: 14,
                                        mb: 1,
                                    }}
                                >
                                    البريد الإلكتروني
                                </Typography>

                                <TextField
                                    onChange={handelChange('email')}
                                    value={Email}
                                    fullWidth
                                    type="email"
                                    placeholder="name@company.com"
                                    error={Boolean(Errors?.email)}
                                    helperText={Errors?.email?.[0] || ""}
                                    sx={fieldStyle}
                                />
                            </Box>

                            <Box sx={{ width: '100%', }} >
                                <Typography
                                    sx={{
                                        color: "#c7c4d8",
                                        fontSize: 14,
                                        mb: 1,
                                    }}
                                >
                                    رقم الهاتف
                                </Typography>

                                <TextField
                                    onChange={handelChange('phone')}
                                    value={Phone}
                                    fullWidth
                                    type="phone"
                                    placeholder="0700000000"
                                    error={Boolean(Errors?.phone)}
                                    helperText={Errors?.phone?.[0] || ""}
                                    sx={fieldStyle}
                                />
                            </Box>







                            <Box sx={{
                                width: '100%',
                                display: "flex",
                                flexDirection: {
                                    xs: "column",
                                    lg: "row",
                                },
                                alignItems: 'center',
                                justifyContent: {
                                    xs: 'space-between',
                                    lg: "space-between",
                                },
                                gap: 2

                            }}>


                                <Box sx={{ width: '100%', }}>
                                    <Typography
                                        sx={{
                                            color: "#c7c4d8",
                                            fontSize: 14,
                                            mb: 1,
                                        }}
                                    >
                                        كلمة المرور
                                    </Typography>

                                    <TextField
                                        onChange={handelChange('password')}
                                        value={Password}
                                        fullWidth
                                        type="password"
                                        placeholder="••••••••"
                                        error={Boolean(Errors?.password)}
                                        helperText={Errors?.password?.[0] || ""}
                                        sx={fieldStyle}
                                    />
                                </Box>

                                <Box sx={{ width: '100%', }}>
                                    <Typography
                                        sx={{
                                            color: "#c7c4d8",
                                            fontSize: 14,
                                            mb: 1,
                                        }}
                                    >

                                        تاكيد كلمة المرور
                                    </Typography>

                                    <TextField
                                        onChange={handelChange('confirm_password')}
                                        value={ConfirmPassword}
                                        fullWidth
                                        type="password"
                                        placeholder="••••••••"
                                        error={passwordMismatch}
                                        helperText={
                                            passwordMismatch
                                                ? "كلمتا المرور غير متطابقتين"
                                                : ""
                                        }
                                        sx={fieldStyle}
                                    />
                                </Box>
                            </Box>

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={acceptTerms}
                                        onChange={(e) => setAcceptTerms(e.target.checked)}
                                        sx={{
                                            color: "#635BFF",
                                            "&.Mui-checked": {
                                                color: "#635BFF",
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Typography
                                        sx={{
                                            color: "#c7c4d8",
                                            fontSize: 14,
                                        }}
                                    >
                                        أوافق على الشروط والأحكام وسياسة الخصوصية
                                    </Typography>
                                }
                            />

                            <Button
                                fullWidth
                                onClick={sendDataRegisterShopAdmin}
                                variant="contained"
                                sx={{
                                    mt: 1,
                                    py: 1.5,
                                    borderRadius: "14px",
                                    background: "#635bff",
                                    fontWeight: 700,
                                    fontSize: "1rem",

                                    "&:hover": {
                                        background: "#7000FF",
                                    },
                                }}
                            >
                                {Loading === 0 ? (
                                    "تسجيل"
                                ) : (

                                    <CircularProgress
                                        size={24}
                                        sx={{
                                            color: "#ffffff",
                                            fontWeight: "bold",
                                            animationDuration: "1.2s",
                                        }}
                                    />
                                )}
                            </Button>

                            <Typography
                                sx={{
                                    // mt: 1,
                                    mb: 3,
                                    textAlign: "center",
                                    fontSize: 13,
                                    color: "rgba(255,255,255,.65)",
                                }}
                            >
                                لديك حساب بالفعل؟{" "}

                                <Box
                                    component="span"
                                    onClick={() => {
                                        window.location.href = "/shopAdmin/login";
                                    }}
                                    sx={{
                                        color: "#8c00ff",
                                        fontWeight: 700,
                                        cursor: "pointer",
                                        transition: "all .2s ease",

                                        "&:hover": {
                                            // color: "#47CBE4",
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    تسجيل الدخول
                                </Box>
                            </Typography>


                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}


const fieldStyle = {
    width: "100%",

    "& .MuiOutlinedInput-root": {
        minHeight: "52px",
        borderRadius: "14px",
        background: "#1b1c1d",
        color: "#fff",

        "& fieldset": {
            borderColor: "rgba(255,255,255,.08)",
        },

        "&:hover fieldset": {
            borderColor: "rgba(99,91,255,.5)",
        },

        "&.Mui-focused fieldset": {
            borderColor: "#635bff",
            boxShadow: "0 0 15px rgba(99,91,255,.3)",
        },
    },

    "& input": {
        padding: "14px 16px",
    },

    "& input::placeholder": {
        color: "#888",
        opacity: 1,
    },
};


export default RegisterPage

