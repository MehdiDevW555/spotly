import {
    Box,
    Typography,
    TextField,
    Button,
    MenuItem,
    InputAdornment,
    Alert,
    CircularProgress,
} from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";
import { useDispatch, useSelector } from "react-redux";
import { changeCreateService, ChangeCurrentPage, ChangePagesServices, } from "../../../../../../redux/slices/shopAdmin/ShopAdmin_slice";
import { createService_selector, currentPage_selector, infoShop_selector, previousPage_selector } from "../../../../../../redux/selectors/shopAdmin/ShopAdmin_selector";
import { __unsafe_useEmotionCache } from "@emotion/react";
import API_SEND_CREATE_SERVICE from "../../../../../api/shopAdmin/services/API_SEND_CREATE_SERVICE";

export default function CreateService(props) {
    let dispatch = useDispatch()
    const currentPage = useSelector(currentPage_selector)
    let previousPage = useSelector(previousPage_selector)
    let createService = useSelector(createService_selector)
    let { idShop ,uuid} = props
    let { name, description, price, status, estimated_time, loading, message, errors } = createService
    let Name = name
    let Description = description
    let Price = price
    let Status = status
    let EstimatedTime = estimated_time
    let Loading = loading
    let Message = message
    let Errors = errors


    // console.log(currentPage)
    let handelGoDashboard = () => {
        resetCreateService()
        if (previousPage === 'Services') {
            dispatch(ChangeCurrentPage('Services'))
        };
        if (previousPage === 'AvailableServices') {
            dispatch(ChangeCurrentPage('AvailableServices'))
        }
        if (previousPage === 'Queues') {
            dispatch(ChangeCurrentPage('Queues'))
        }
    }

    let handelChangeCreateService = (field) => (e) => {
        dispatch(changeCreateService({ [field]: e.target.value }))
    }

    const resetCreateService = () => {
        dispatch(
            changeCreateService({
                name: "",
                description: "",
                price: "",
                estimated_time: "",
                status: "",
            })
        );
    };

    console.log(createService)

    let sendDataCreateService = () => {
        API_SEND_CREATE_SERVICE(dispatch, idShop, createService)
    }


    return (
        <Box
            sx={{
                mt:{xs:-2,md:0},
                mb:5,
                direction: 'rtl',
                // py: { xs: 12, md: 10 },
                // mb: 8,
                minHeight: "calc(100vh)",
                px: 2,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    // maxWidth: 750,
                    width: '100%',
                    height: 400,
                    borderRadius: "50%",
                    bgcolor: "rgba(124, 58, 237, 0.23)",
                    filter: "blur(120px)",
                    top: -100,
                    left: -50,

                }}
            />

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTop: '4px solid #000000',
                    borderRadius: 10,
                    px: 2,
                    bgcolor: { xs: '#e8e8e891', md: '#e8e8e891' },


                }}>

                {/* Header */}

                <Box
                    sx={{
                        mb: 2,
                        py: 1,
                        borderBottom: "1px solid #3c3c3c",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",

                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 40,
                            fontWeight: 700,

                        }}
                    >
                        إنشاء خدمة جديدة
                    </Typography>

                    <Typography color="text.secondary">
                        أضف تفاصيل الخدمة الجديدة لتسهيل إدارة الطوابير
                    </Typography>
                </Box>

                {/* Form */}

                <Box
                    component="form"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                    }}
                >
                    {/* Service Name */}

                    <Box>
                        <Typography
                            variant="body2"
                            mb={1}
                            fontWeight={600}
                        >
                            اسم الخدمة
                        </Typography>

                        <TextField
                            value={Name}
                            onChange={handelChangeCreateService('name')}
                            sx={fieldStyle}
                            fullWidth
                            placeholder="مثال: حلاقة الشعر"
                            error={Boolean(Errors?.name)}
                            helperText={Errors?.name?.[0] || ""}
                        />
                    </Box>

                    {/* Description */}

                    <Box>
                        <Typography
                            variant="body2"
                            mb={1}
                            fontWeight={600}
                        >
                            وصف الخدمة
                        </Typography>

                        <TextField
                            value={Description}
                            onChange={handelChangeCreateService('description')}
                            sx={fieldStyle}
                            fullWidth
                            multiline
                            rows={3}
                            placeholder="اكتب تفاصيل الخدمة والمهام المشمولة..."
                            error={Boolean(Errors?.description)}
                            helperText={Errors?.description?.[0] || ""}
                        />
                    </Box>

                    {/* Row */}

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: {
                                xs: "row",
                                md: "row",
                            },
                            gap: 3,
                        }}
                    >
                        {/* Duration */}

                        <Box sx={{ flex: 1 }}>
                            <Typography
                                variant="body2"
                                mb={1}
                                fontWeight={600}

                            >
                                الوقت المتوقع (بالدقائق)
                            </Typography>

                            <TextField
                                value={EstimatedTime}
                                onChange={handelChangeCreateService('estimated_time')}
                                sx={fieldStyle}
                                fullWidth
                                type="number"
                                placeholder="15"
                                error={Boolean(Errors?.estimated_time)}
                                        helperText={Errors?.estimated_time?.[0] || ""}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            دقيقة
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>

                        {/* Status */}

                        <Box sx={{ flex: 1 }}>
                            <Typography
                                variant="body2"
                                mb={1}
                                fontWeight={600}
                            >
                                السعر
                            </Typography>

                            <TextField
                                value={Price}
                                onChange={handelChangeCreateService('price')}
                                sx={fieldStyle}
                                type="number"
                                placeholder="450"
                                fullWidth
                                error={Boolean(Errors?.price)}
                                        helperText={Errors?.price?.[0] || ""}
                            />

                        </Box>
                    </Box>

                    {/* Info Banner */}

                    <Box
                        // severity="info"
                        sx={{
                            p: 1.5,
                            bgcolor: '#cdfef7',
                            mt: 2,
                            borderRadius: '20px 20px 0 20px',
                            display: "flex",
                            // flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            gap: 1,
                        }}
                    >
                        <InfoIcon sx={{ color: "#00b7ff" }} />
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

                            <Typography variant="body2">
                                سيظهر اسم هذه الخدمة للعملاء عند ححز
                                التذاكر.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Footer */}

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 2,
                            mt: 2,
                            mb: 3,
                        }}
                    >
                        <Button
                            onClick={handelGoDashboard}
                            sx={{
                                width: '50%',
                                px: 2,
                                borderRadius: 3,
                                fontSize: 18,
                                background:
                                    "linear-gradient(135deg, #9CA3AF 0%, #6B7280 100%)",
                                color: "#fff",

                            }}
                        >
                            تخطي
                        </Button>

                        <Button
                            // onClick={() => dispatch(ChangeCurrentPage('AvailableServices'))}
                            onClick={sendDataCreateService}

                            sx={{
                                borderRadius: 3,
                                width: '50%',
                                px: 2,
                                // py:1,
                                fontSize: 18,
                                bgcolor: "#22C55E",
                                background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
                                color: "#fff",
                            }}
                        >
                            {Loading === 0 ? (
                                "حفظ"
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
                    </Box>
                </Box>

            </Box>

        </Box>
    );
}



const fieldStyle = {
    "& .MuiOutlinedInput-root": {
        borderRadius: "14px",
        backdropFilter: "blur(10px)",
        background: "rgba(225, 241, 255, 0.49)",


        "& .MuiOutlinedInput-input": {
            color: "#000000",
            WebkitTextFillColor: "#020202",
        },

        "& .Mui-disabled .MuiOutlinedInput-input": {
            WebkitTextFillColor: "#4f4e4e",
        },




        "&.Mui-focused fieldset": {
            color: "#ffffff",
            borderColor: "#635bff",
            boxShadow:
                "0 0 15px rgba(99,91,255,.3)",
        },
    },


}
