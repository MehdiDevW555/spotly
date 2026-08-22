import {
    Box,
    Card,
    CardContent,
    Typography,
    Chip,
    Button,
    IconButton,
    Divider,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import DownloadIcon from "@mui/icons-material/Download";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PaymentsIcon from "@mui/icons-material/Payments";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from '@mui/icons-material/Block';
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { ChangeCurrentPage, ChangePagesServices, ChangePreviousPage } from "../../../../../../redux/slices/shopAdmin/ShopAdmin_slice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import API_GET_SERVICES from "../../../../../api/shopAdmin/services/API_GET_SERVICES";
import FeatureUnavailableDialog from "../../../../../dialog/shopAdmin/mainContent/services/FeatureUnavailableDialog";

export default function AvailableServices(props) {
    let { idShop, services, maxServices } = props
    const [openUnavailable, setOpenUnavailable] = useState(false);




    let dispatch = useDispatch()

    let handelGoCreateService = () => {
        // if (currentPage === 'CreateService') {
        dispatch(ChangeCurrentPage('CreateService'))
        // }
    }

    return (
        <Box

            sx={{
                px: { xs: 0, md: 2 },
                py: { xs: 0, md: 2 },
                display: "flex",
                flexDirection: "column",
                gap: 4,
                position: "relative",


            }}
        >

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

            {/* Intro */}

            <Box
                sx={{
                    p: { xs: 2, md: 2 },
                    direction: 'rtl',
                    mt: { xs: 6, md: 5 },

                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: {
                        xs: "center",
                        md: "center",
                    },
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                    gap: 1,

                }}
            >
                <Box sx={{
                    mt: { xs: 2, md: 0 },
                    mb: { xs: 1, md: 0 },
                }}>
                    <Typography sx={{
                        fontSize: 38,
                        fontWeight: 700,

                    }}>
                        قائمة الخدمات المتاحة
                    </Typography>

                    <Typography sx={{
                        fontSize: 18,
                        color: "#424242",

                        // fontWeight: 700,

                    }}>
                        إدارة وتخصيص خدمات الصالون الخاصة بك
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        zIndex: 100,
                    }}
                >
                    {services?.lenght > maxServices && <Button
                        onClick={() => { dispatch(ChangeCurrentPage('CreateService')), dispatch(ChangePreviousPage('Services')) }}
                        sx={{
                            px: 2,
                            py: 1,
                            borderRadius: { xs: 5, md: 3 },
                            bgcolor: "#1976D2",
                            background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",

                            color: "#fff",
                            borderColor: "#D1D5DB",
                            border: "1px solid",
                            borderColor: "divider",
                            boxShadow: "0px 3px 15px rgb(25, 30, 112)",
                        }}
                    >
                        <AddCircleRoundedIcon />
                        <Typography sx={{ mr: 1, fontSize: 16 }}> إضافة  </Typography>
                    </Button>}
                    <Button
                    onClick={() => setOpenUnavailable(true)}
                        sx={{
                            px: 2,
                            py: 1,
                            borderRadius: { xs: 5, md: 3 },
                            bgcolor: "#63d219",
                            background:
                                "linear-gradient(135deg, #47CBE4 0%, #3989EC 50%, #2563EB 100%)",


                            color: "#ffffff",
                            borderColor: "#D1D5DB",
                            border: "1px solid",
                            borderColor: "divider",
                            boxShadow: "0px 3px 10px rgb(25, 30, 112)",
                        }}
                    >
                        <FilterListIcon />
                        <Typography sx={{ mr: 1, fontSize: 16 }}>فلترة</Typography>
                    </Button>
                    {/* <Button
                        sx={{
                            borderRadius:{xs:5,md:3},
                            bgcolor: "#16A34A",
                            color: "#fff",
                            border: "1px solid",
                            borderColor: "divider",
                             boxShadow:"0px 3px 10px rgb(25, 30, 112)",
                        }}
                    >
                        <DownloadIcon />
                        <Typography sx={{ fontSize: 13 }}>تصدير</Typography>
                    </Button> */}

                </Box>
            </Box>

            {/* Services */}

            <FeatureUnavailableDialog
                open={openUnavailable}
                handleClose={() => setOpenUnavailable(false)}
            />

            <Box
                dir='rtl'
                sx={{
                    borderRadius: '50px 50px 0 0',
                    mt: { xs: -9, md: -4 },
                    pt: { xs: 4, md: 3 },
                    pb: 15,
                    px: 2,
                    bgcolor: { xs: "#d8eff676", md: 'transparent' },
                    borderTop: { xs: 4, md: 0 },
                    borderTop: { xs: '6px solid #9C9EFF', md: 0 },
                    borderTop: '6px solid #9C9EFF',
                    // display: "flex",
                    // flexWrap: "wrap",
                    gap: 3,
                    zIndex: 99,
                    height: "calc(100vh)",
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                        width: "5px",
                        pt: 10,
                    },
                    "&::-webkit-scrollbar-track": {
                        marginTop: "30px",
                    },

                    "&::-webkit-scrollbar-thumb": {
                        bgcolor: "#9C9EFF",
                        borderRadius: "10px",

                    }



                    // overflow: "hidden",

                }}
            >

                <Box sx={{

                    display: "grid",

                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        // md: "repeat(3, 1fr)",
                        lg: "repeat(3, 1fr)",
                    },

                    // flexWrap: "wrap",
                    gap: 3,
                    zIndex: 99,
                }}>


                    {services.map((service) => (
                        <Box
                            key={service.id}
                            sx={{
                                flex: {
                                    xs: "1 1 100%",
                                    lg: "1 1 calc(50% - 12px)",
                                    xl: "1 1 calc(33.333% - 16px)",
                                },
                            }}
                        >

                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 4,
                                    border: service?.status
                                        ? "1px solid"
                                        : "2px dashed",
                                    borderColor: "divider",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    position: 'relative',

                                }}

                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        width: 300,
                                        height: 100,
                                        borderRadius: "50%",
                                        bgcolor: "rgba(0, 4, 255, 0.39)",
                                        //                                    background:
                                        //   "linear-gradient(135deg, #47CBE4 0%, #3989EC 50%, #2563EB 100%)",
                                        // filter: "blur(100px)",
                                        top: -20,
                                        right: -20,
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        width: 300,
                                        height: 100,
                                        borderRadius: "50%",
                                        bgcolor: "rgba(0, 4, 255, 0.39)",
                                        //                                    background:
                                        //   "linear-gradient(135deg, #47CBE4 0%, #3989EC 50%, #2563EB 100%)",
                                        // filter: "blur(100px)",
                                        bottom: -20,
                                        left: -20,
                                    }}
                                />



                                <CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            mb: 3,

                                        }}
                                    >


                                        <Chip
                                            sx={{ zIndex: 9999 }}
                                            label={
                                                service?.status
                                                    ? "مفعلة"
                                                    : "غير مفعلة"
                                            }
                                            color={
                                                service?.status
                                                    ? "success"
                                                    : "error"
                                            }
                                        />

                                        <Box
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: 3,
                                                bgcolor: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#2563EB",
                                            }}
                                        >
                                            <ContentCutIcon />
                                        </Box>
                                    </Box>

                                    <Typography
                                        variant="h6"
                                        fontWeight={700}
                                        mb={1}
                                    >
                                        {service.name}
                                    </Typography>

                                    <Typography
                                        color="text.secondary"
                                        sx={{
                                            mb: 3,
                                            minHeight: 50,
                                        }}
                                    >
                                        {service.description}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 2,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent:
                                                    "space-between",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    gap: 1,
                                                    alignItems:
                                                        "center",
                                                }}
                                            >
                                                <ScheduleIcon fontSize="small" />
                                                <Typography>
                                                    الوقت المتوقع
                                                </Typography>
                                            </Box>


                                            <Typography fontWeight={700}>
                                                {service.estimated_time}{' '}
                                                {service.estimated_time === 1
                                                    ? 'دقيقة'
                                                    : service.estimated_time >= 2 && service.estimated_time <= 10
                                                        ? 'دقائق'
                                                        : 'دقيقة'}
                                            </Typography>
                                        </Box>



                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent:
                                                    "space-between",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    gap: 1,
                                                    alignItems:
                                                        "center",
                                                }}
                                            >
                                                <PaymentsIcon fontSize="small" />
                                                <Typography>
                                                    السعر
                                                </Typography>
                                            </Box>

                                            <Typography
                                                color="primary"
                                                fontWeight={700}
                                            >
                                                {service.price} دج
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>

                                <Divider />
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: 'center',
                                        justifyContent: "center",
                                        py: 2,
                                        // zIndex:9999,
                                    }}
                                >


                                    <Box
                                        sx={{
                                            borderRadius: 30,
                                            px: 1,
                                            py: 0,
                                            // bgcolor: "#1c34d1",
                                            display: "flex",
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            gap: 1,
                                            // zIndex:9999,
                                        }}
                                    >

                                        <IconButton
                                            onClick={() => setOpenUnavailable(true)}
                                            sx={{
                                                bgcolor: "#1976D2",
                                                background:
                                                    "linear-gradient(135deg, #1492fa 0%, #16b6fa 50%, #086ed4 100%)",
                                                color: "#fff",
                                                border: "1px solid",
                                                borderColor: "divider",
                                            }}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => setOpenUnavailable(true)}
                                            sx={{
                                                background:
                                                    "linear-gradient(135deg, #faa614 0%, #fab216 50%, #D46B08 100%)",
                                                color: "#fff",
                                                // color: "#d26919",
                                                border: "1px solid",
                                                borderColor: "divider",
                                            }}
                                        >
                                            <BlockIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => setOpenUnavailable(true)}
                                            // color="error"
                                            sx={{
                                                background:
                                                    "linear-gradient(135deg, #FF4D4F 0%, #F5222D 50%, #CF1322 100%)",
                                                background:
                                                    "linear-gradient(135deg, #fa1414 0%, #fa1680 50%, #d40834 100%)",
                                                color: "#fff",
                                                border: "1px solid",
                                                borderColor: "divider",
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>
                    ))}
                </Box>

            </Box>
        </Box>
    );
}
