


import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Chip,
    LinearProgress,
    Snackbar,
    Alert,
    AlertTitle,
    IconButton,
    Collapse,
    CircularProgress,
} from "@mui/material";

import Avatar from "@mui/material/Avatar";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import FaceIcon from "@mui/icons-material/Face";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PeopleIcon from '@mui/icons-material/People';
import CloseIcon from "@mui/icons-material/Close";
import StoreIcon from '@mui/icons-material/Store';
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useParams } from "react-router-dom";
import { useDebugValue, useEffect, useState } from "react";
import axios from "axios";
import API_GET_SERVICES from "../../../api/shopAdmin/services/API_GET_SERVICES";
import { useDispatch, useSelector } from "react-redux";
import { getService_selector, infoShop_selector, } from "../../../../redux/selectors/shopAdmin/ShopAdmin_selector";
import API_GET_INFO_SHOP from "../../../api/shopAdmin/infoShop/API_GET_INFO_SHOP";
import { bookPlace_selector, shop_selector } from "../../../../redux/selectors/users/Users_selector";
import { changeBookPlace } from "../../../../redux/slices/users/Users_slice";
import API_SEND_BOOK_PLACE from "../../../api/users/API_SEND_BOOK_PLACE";




const fieldStyle = {
    "& .MuiOutlinedInput-root": {
        borderRadius: "14px",
        background: "#1b1c1d",
        color: "#fff",
        "& fieldset": {
            borderColor:
                "rgba(255,255,255,.08)",
        },

        "&:hover fieldset": {
            borderColor:
                "rgba(99,91,255,.5)",
        },

        "&.Mui-focused fieldset": {
            borderColor: "#635bff",
            boxShadow:
                "0 0 15px rgba(99,91,255,.3)",
        },
    },

    "& input::placeholder": {
        color: "#b7b6b6",
        opacity: 1,
    },
}



function CreateBookPlace(props) {
    let { lastTicketNumber, waitingCount, tUEFF, uuid, ticketNumber ,fcmToken} = props
    let scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    };

    // const { uuid } = useParams();

    const [shopData, setShopData] = useState(null);
    let dispatch = useDispatch()
    let shop = useSelector(shop_selector)

    let getServices = useSelector(getService_selector)
    let services = getServices?.services
    let bookPlace = useSelector(bookPlace_selector)
    let { full_name, phone, service_id, loading, errors } = bookPlace
    let FullName = full_name
    let Phone = phone
    let ServiceId = service_id
    let Loading = loading
    let Errors = errors
    console.log(lastTicketNumber)



    // console.log(shop)
    // console.log(getServices?.services)
    // useEffect(() => {
    //     API_GET_SHOP_QUEUE_STATUS(dispatch,uuid)
    //     API_GET_SERVICES(dispatch, uuid)
    // }, [uuid]);

    const openGoogleMaps = (address) => {

        if (!address) return;

        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

        window.open(url, "_blank");
    };

    let handelChangeBookPlace = (field) => (e) => {
        dispatch(changeBookPlace({ [field]: e.target.value }))
    }


    let sendBookPlace = () => {
        API_SEND_BOOK_PLACE(dispatch, uuid, full_name, phone, ServiceId, tUEFF,fcmToken)
    }


    return (
        <Box
            dir="rtl"
            sx={{
                bgcolor: 'black',
                // maxWidth: 700,
                mx: "auto",
                px: { xs: 3, md: 15 },
                py: 0,
                display: "flex",
                flexDirection: "column",
                gap: 3,
            }}
        >






            {/* {(Loading === 1 || Loading === 2) && (
                <Box
                    sx={{
                        position: "fixed",
                        top: 20,
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 9999,
                        width: {
                            xs: "80%",
                            sm: 'fit-content',
                        },
                    }}
                >
                    <Alert
                        action={
                            <IconButton
                                size="small"
                                onClick={() =>
                                    dispatch(
                                        changeBookPlace({
                                            loading: -1,
                                        })
                                    )
                                }
                            >
                                <CloseIcon sx={{ color: "#fff" }} />
                            </IconButton>
                        }
                        sx={{
                            background:
                                Loading === 2
                                    ? "linear-gradient(135deg,#16a34a,#22c55e)"
                                    : "linear-gradient(135deg,#dc2626,#ef4444)",

                            color: "#fff",
                            borderRadius: 4,
                            fontWeight: 700,
                            boxShadow:
                                Loading === 2
                                    ? "0 12px 35px rgba(34,197,94,.35)"
                                    : "0 12px 35px rgba(239,68,68,.35)",

                            "& .MuiAlert-icon": {
                                color: "#fff",
                            },

                            "& .MuiAlert-message": {
                                width: "100%",
                                textAlign: "center",
                            },

                            "& .MuiIconButton-root": {
                                color: "#fff",
                            },
                        }}
                    >
                        {Loading === 2
                            ? "تم حجز دورك بنجاح 🎉"
                            : "حدث خطأ أثناء حجز الدور"}
                    </Alert>
                </Box>
            )} */}






            {/* Header */}




            <Paper
                elevation={0}
                sx={{
                    px: 2,
                    pt: 2,
                    pb: { xs: 4, sm: 10 },
                    borderRadius: "20px 20px 0px 0px",
                    //  borderRadius: "0 0 50% 50% / 0 0 12% 12%",
                    position: "relative",
                    overflow: "hidden",
                    background:
                        "linear-gradient(135deg,#4338CA 0%,#6366F1 50%,#06B6D4 100%)",
                    background:
                        "linear-gradient(135deg, #743DB1 0%, #47CBE4 50%, #3989EC 100%)",
                    color: "#fff",
                }}
            >
                {/* Background Effects */}

                <Box
                    sx={{
                        position: "absolute",
                        top: -120,
                        right: -120,
                        width: 280,
                        height: 280,
                        borderRadius: "50%",
                        bgcolor: "rgba(255,255,255,.08)",
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        bottom: -60,
                        left: -60,
                        width: 220,
                        height: 220,
                        borderRadius: "50%",
                        bgcolor: "rgba(255,255,255,.06)",
                    }}
                />

                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    textAlign: 'center',
                    my: { xs: 1, sm: 3 },
                    // opacity: 0.9,
                }}>

                    <Typography
                        sx={{
                            fontSize: { xs: 35, md: 40 },
                            // mt: 2,
                            opacity: 0.9,
                            // maxWidth: 400,
                        }}
                    >
                        مرحباً بك، احجز دورك بسهولة وتابع
                        تقدمك لحظة بلحظة.
                    </Typography>
                </Box>

                <Box
                    dir='rtl'
                    sx={{
                        mt: 2,
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        gap: 2,
                    }}
                >
                    {/* Left Side */}
                    <Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'row', sm: 'row' },
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 1,
                                textAlign: {
                                    xs: "right",
                                    md: "right",
                                },
                            }}
                        >
                            <StoreIcon
                                sx={{
                                    fontSize: { xs: 90, sm: 110 },
                                    // mb: 1,
                                }}
                            />
                            <Box>

                                <Typography
                                    sx={{ fontSize: { xs: 20, md: 23 }, fontWeight: 700 }}
                                >
                                    {shop?.shop_name}
                                </Typography>

                                <Box
                                    onClick={() => openGoogleMaps(shop?.address)}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: {
                                            xs: "center",
                                            md: "flex-start",
                                        },
                                        gap: 1,
                                        // mt: 1,
                                        // border:1,
                                        flexWrap: 'nowrap',
                                        opacity: 0.9,
                                    }}
                                >
                                    <LocationOnIcon fontSize="small" />

                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                        }}
                                    >
                                        {shop?.address}
                                    </Typography>
                                </Box>

                            </Box>

                        </Box>

                        <Box
                            sx={{
                                mt: { xs: 0, sm: 3 },
                                display: { xs: 'none', sm: 'block' },
                                flexWrap: "wrap",
                                justifyContent: {
                                    xs: "center",
                                    md: "flex-start",
                                },
                            }}
                        >
                            <Chip
                                label="مفتوح الآن"
                                sx={{
                                    ml: 1.5,
                                    px: 1,
                                    bgcolor:
                                        "rgba(255,255,255,.15)",
                                    color: "#fff",
                                    backdropFilter: "blur(10px)",
                                }}
                            />

                            <Chip
                                label={`${waitingCount} منتظرين`}
                                sx={{
                                    ml: 1.5,
                                    px: 1,
                                    bgcolor:
                                        "rgba(255,255,255,.15)",
                                    color: "#fff",
                                    backdropFilter: "blur(10px)",
                                }}
                            />

                            {/* <Chip
                                label="15 دقيقة انتظار"
                                sx={{
                                    ml: 1.5,
                                    px: 1,
                                    bgcolor:
                                        "rgba(255,255,255,.15)",
                                    color: "#fff",
                                    backdropFilter: "blur(10px)",
                                }}
                            /> */}
                        </Box>

                    </Box>






                    {/* Right Side */}

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                width: {
                                    xs: 200,
                                    md: 180,
                                },
                                height: {
                                    xs: 200,
                                    md: 180,
                                },
                                borderRadius: "50%",
                                background:
                                    "linear-gradient(135deg,#ffffff,#eef4ff)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                color: "primary.main",
                                border:
                                    "8px solid rgba(255,255,255,.25)",
                                boxShadow:
                                    "0 25px 50px rgba(0,0,0,.15)",
                                textAlign: "center",
                                px: 2
                            }}
                        >

                            {
                                lastTicketNumber === 0 || lastTicketNumber === undefined || lastTicketNumber === null ? (
                                    <>
                                        <Typography
                                            sx={{
                                                fontSize: 28,
                                                fontWeight: 900,
                                                lineHeight: 1.3
                                            }}
                                        >
                                            كن أول من يحجز
                                        </Typography>

                                        <Typography
                                            sx={{
                                                mt: 1,
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: "text.secondary"
                                            }}
                                        >
                                            لا توجد تذاكر اليوم
                                        </Typography>
                                    </>
                                ) : (
                                    <>
                                        <Typography
                                            sx={{
                                                fontSize: 90,
                                                fontWeight: 900,
                                                lineHeight: 1
                                            }}
                                        >
                                            {lastTicketNumber}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontSize: 18,
                                                fontWeight: 700
                                            }}
                                        >
                                            آخر تذكرة
                                        </Typography>
                                    </>
                                )
                            }

                        </Box>

                        <Box
                            sx={{
                                mt: { xs: 5, sm: 3 },
                                display: { xs: 'block', sm: 'none' },
                                flexWrap: "wrap",
                                gap: 1,
                                justifyContent: {
                                    xs: "center",
                                    md: "flex-start",
                                },
                            }}
                        >
                            <Chip
                                label="مفتوح الآن"
                                sx={{
                                    ml: 0.5,
                                    px: 0.5,
                                    bgcolor:
                                        "rgba(255,255,255,.15)",
                                    color: "#fff",
                                    backdropFilter: "blur(10px)",
                                }}
                            />

                            <Chip
                                label={`${waitingCount} منتظرين`}
                                sx={{
                                    ml: 0.5,
                                    px: 0.5,
                                    bgcolor:
                                        "rgba(255,255,255,.15)",
                                    color: "#fff",
                                    backdropFilter: "blur(10px)",
                                }}
                            />

                            {/* <Chip
                                label="15 دقيقة انتظار"
                                sx={{
                                    ml: 0.5,
                                    px: 0.5,
                                    bgcolor:
                                        "rgba(255,255,255,.15)",
                                    color: "#fff",
                                    backdropFilter: "blur(10px)",
                                }}
                            /> */}
                        </Box>


                    </Box>



                </Box>

                <Box sx={{
                    mt: { xs: 3, sm: 0 },
                    mb: { xs: 5, sm: 0 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <Box
                        onClick={scrollToBottom}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            // width: 60,
                            // height: 60,
                            borderRadius: "50%",
                            // bgcolor: "rgba(255,255,255,.15)",
                            backdropFilter: "blur(10px)",
                            // border: "1px solid rgba(255,255,255,.2)",
                            cursor: "pointer",

                            animation: "bounce 1.5s infinite",

                            "@keyframes bounce": {
                                "0%,100%": {
                                    transform: "translateY(0)",
                                },
                                "50%": {
                                    transform: "translateY(8px)",
                                },
                            },
                        }}
                    >
                        <KeyboardDoubleArrowDownIcon
                            sx={{
                                fontSize: 80,
                                color: "#fff",
                            }}
                        />
                    </Box>
                </Box>

                <Box

                    component="svg"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: { xs: 80, sm: 80 },
                        display: "block",
                    }}
                >
                    <path
                        d="M0,64C120,120,240,0,360,64C480,128,600,0,720,64C840,128,960,0,1080,64C1200,128,1320,0,1440,64V120H0Z"
                    />
                </Box>


            </Paper>







            {/* Booking Form */}

            <Box
                sx={{
                    mt: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <TextField
                    fullWidth
                    value={FullName}
                    onChange={handelChangeBookPlace('full_name')}
                    placeholder="أدخل اسمك الكامل"
                    sx={fieldStyle}
                    error={Boolean(Errors?.full_name)}
                    helperText={Errors?.full_name?.[0] || ""}
                />

                <TextField
                    fullWidth
                    value={Phone}
                    onChange={handelChangeBookPlace('phone')}
                    placeholder="05XXXXXXXX"
                    sx={fieldStyle}
                    error={Boolean(Errors?.phone)}
                    helperText={Errors?.phone?.[0] || ""}
                />

                {services?.length > 0 && (
                    <Typography
                        sx={{
                            color: "#B7B6B6",
                            fontWeight: 800,
                            mt: 1,
                        }}
                    >
                        اختر الخدمة
                    </Typography>
                )}

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(3,1fr)",
                        gap: 2,
                    }}
                >
                    {services?.map((item) => {

                        const selected =
                            bookPlace?.service_id === item.id;

                        return (
                            <Paper
                                key={item.id}
                                onClick={() =>
                                    dispatch(
                                        changeBookPlace({
                                            service_id: item.id,
                                        })
                                    )
                                }
                                elevation={0}
                                sx={{
                                    p: 2,
                                    cursor: "pointer",
                                    borderRadius: 4,
                                    textAlign: "center",

                                    bgcolor: selected
                                        ? "#7C3AED"
                                        : "#1B1C1D",

                                    color: "#fff",

                                    border: selected
                                        ? "2px solid #A78BFA"
                                        : "1px solid rgba(255,255,255,.15)",

                                    boxShadow: selected
                                        ? "0 0 25px rgba(124,58,237,.45)"
                                        : "none",

                                    transform: selected
                                        ? "translateY(-4px)"
                                        : "translateY(0)",

                                    transition: "all .25s ease",

                                    position: "relative",

                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            >
                                {selected && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 8,
                                            left: 8,
                                            width: 22,
                                            height: 22,
                                            borderRadius: "50%",
                                            bgcolor: "#fff",
                                            color: "#7C3AED",

                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",

                                            fontSize: 12,
                                            fontWeight: 900,
                                        }}
                                    >
                                        ✓
                                    </Box>
                                )}

                                <Typography
                                    fontWeight={700}
                                    fontSize={13}
                                >
                                    {item.name}
                                </Typography>
                            </Paper>
                        );
                    })}
                </Box>

                {Errors?.service_id && (
                    <Typography
                        sx={{
                            color: "#f44336",
                            fontSize: 12,
                            mt: 1
                        }}
                    >
                        {Errors.service_id[0]}
                    </Typography>
                )}

                <Button
                    fullWidth
                    onClick={sendBookPlace}
                    variant="contained"
                    // endIcon={}
                    sx={{
                        mt: 2,
                        mb: 10,
                        height: 65,
                        borderRadius: "24px",
                        fontWeight: 900,
                        fontSize: 18,
                        background:
                            "linear-gradient(135deg,#4F46E5,#06B6D4)",
                        boxShadow:
                            "0 15px 35px rgba(79,70,229,.35)",
                    }}
                >
                    {Loading === 0 ? (
                        <CircularProgress
                            size={24}
                            sx={{ color: "#fff" }}
                        />
                    ) : (
                        <>
                            احجز دوري الآن
                            <ArrowBackIcon />
                        </>
                    )}

                </Button>
            </Box>

            {/* Stats */}


        </Box>
    );
}

export default CreateBookPlace;
