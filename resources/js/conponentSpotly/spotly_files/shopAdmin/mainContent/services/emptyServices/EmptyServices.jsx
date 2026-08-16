import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
} from "@mui/material";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import InfoIcon from "@mui/icons-material/Info";
import { useDispatch } from "react-redux";
import { ChangeCurrentPage, ChangePagesServices, ChangePreviousPage } from "../../../../../../redux/slices/shopAdmin/ShopAdmin_slice";
import emptyServiceImg from '../../../../../../../img/app/emptyServiceImg.png'
export default function EmptyServices() {
    let dispatch = useDispatch()
    let handelGoCreateService = () => {
        dispatch(ChangeCurrentPage('CreateService'))
    }

    return (
        <Box
            sx={{
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
            {/* Background Blur */}
            <Box
                sx={{
                    position: "absolute",
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
                    position: "absolute",
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    bgcolor: "rgba(99,102,241,.15)",
                    filter: "blur(100px)",
                    bottom: -50,
                    right: -50,
                }}
            />
            {/* Content */}
            <Box
                sx={{
                    mt: 0,
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: 'center',
                    textAlign: "center",
                    maxWidth: 750,
                }}
            >
                <Box
                    component="img"
                    src={emptyServiceImg}
                    sx={{
                        // border:1,
                        width: {
                            xs: 300,
                            md: 380,
                        },
                        width: {
                            xs: 300,
                            md: 380,
                        },
                        mt: { xs: -10, md: 0 },
                        mb: 0,
                    }}
                />

                <Typography
                    sx={{
                        fontSize: {
                            xs: 27,
                            md: 40,
                        },
                        fontWeight: 800,
                        color: "#1E293B",
                        mb: 0,
                    }}
                >
                    لا توجد خدمات مضافة حتى الآن
                </Typography>


                <Box
                    // severity="info"
                    sx={{
                        direction: 'rtl',
                        p: 1.5,
                        bgcolor: '#edcdfe',
                        my: 2,
                        borderRadius: '20px 20px 0 20px',
                        display: "flex",
                        // flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: 1,
                    }}
                >
                    <InfoIcon sx={{ color: "#9d00ff" }} />
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
                                fontSize: 16,
                                maxWidth: 600,
                                textAlign: 'right',
                                // lineHeight: 2,

                            }}
                        >
                            قم بإضافة خدماتك الأولى ليتمكن زبائنك من رؤيتها
                            وحجز أدوارهم بسهولة .
                        </Typography>
                    </Box>
                </Box>



                <Button
                    onClick={() => { dispatch(ChangeCurrentPage('CreateService')), dispatch(ChangePreviousPage('Services')) }}

                    // startIcon={}
                    sx={{
                        bgcolor: "#7C3AED",
                        color: "#fff",

                        mt: 2,
                        px: 4,
                        py: 1.7,
                        borderRadius: 4,
                        fontWeight: 700,
                        fontSize: "1rem",

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
                        <AddCircleRoundedIcon />
                        <Typography>
                            إضافة خدمتك الأولى
                        </Typography>
                    </Box>
                </Button>


            </Box>
        </Box>
    );
}
