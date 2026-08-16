import { Box, Paper, Typography, Chip, Pagination, Avatar, Button } from '@mui/material'
import React from 'react'
import WaitingListSkeleton from './waitingListSkeleton/WaitingListSkeleon'
import AddIcon from "@mui/icons-material/Add";
import QrCodeRoundedIcon from "@mui/icons-material/QrCodeRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AirlineSeatReclineNormalRoundedIcon from "@mui/icons-material/AirlineSeatReclineNormalRounded";
import { useDispatch } from 'react-redux';
import { ChangeCurrentPage, ChangePreviousPage } from '../../../../../../redux/slices/shopAdmin/ShopAdmin_slice';
function WaitingList(props) {
    let dispatch = useDispatch()
    let { getAllTicket, getCurrentTicket, openDialogCreateTicket } = props
    let tickets = getAllTicket?.tickets
    let ticketsLoading = getAllTicket?.loading
    let CurrentTicket = getCurrentTicket?.CurrentTicket
    let loadingCurrentTicket = getCurrentTicket?.loading

    let openQrCodePage = () => {
        dispatch(ChangeCurrentPage('AvailableQrCode'))
        dispatch(ChangePreviousPage('QrCode'))
    }

    return (
        <Box>
            {
                loadingCurrentTicket === 1 && !CurrentTicket ? (
                    <WaitingListSkeleton />
                ) : tickets.length > 0 ? (

                    < Box
                        sx={{
                            // maxWidth:100,
                            mt: 2,
                            bgcolor: "#f6f6f6",
                            bgcolor: "rgba(144,0,255,.05)",
                            //  p: { xs: 2, md: 3 },
                            borderTop: "4px solid #8c00ff",
                            // borderColor: "divider",
                            borderRadius: 4,
                            overflow: "hidden",
                            boxShadow: 1,



                        }
                        }
                    >

                        {/* Header */}
                        < Box
                            sx={{

                                px: 3,
                                py: 1,
                                // borderTop: "1px solid ",
                                // borderColor: "divider",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                gap: 1,
                            }}
                        >
                            <Typography fontWeight={800}>
                                قائمة الانتظار
                            </Typography>

                            <Chip
                                label={`${tickets?.length || 0} تذكرة`}
                                size="small"
                                color="primary"
                                variant="outlined"
                            />
                        </Box >

                        {/* Cards */}

                        < Box
                            sx={{
                                my: 1,
                                mx: 1,
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    sm: tickets?.length > 0 ? "repeat(2,1fr)" : "1fr",
                                    lg: tickets?.length > 0 ? "repeat(3,1fr)" : "1fr",
                                },
                                gap: 2,
                            }}
                        >

                            <Box
                                sx={{
                                    my: 1,
                                    mx: 1,
                                    display: "grid",
                                    gridTemplateColumns: {
                                        xs: "1fr",
                                        sm: "repeat(2,1fr)",
                                        lg: "repeat(3,1fr)",
                                    },
                                    gap: 2,
                                }}
                            >
                                {tickets?.map((item, index) => (
                                    <Paper
                                        key={index}
                                        elevation={0}
                                        sx={{
                                            p: 2,
                                            borderRadius: 4,
                                            borderRight: item.isServing
                                                ? "2px solid #5ae135"
                                                : "2px solid #ED6C02",

                                            bgcolor: "#fff",

                                            display: "flex",
                                            flexDirection: "column",

                                            gap: 2,

                                            transition: "all .2s ease",

                                            boxShadow: "0 4px 20px rgba(0,0,0,0.04)",

                                            "&:hover": {
                                                transform: "translateY(-2px)",
                                                boxShadow:
                                                    "0 10px 30px rgba(0,0,0,0.08)",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                                width: "100%",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    flex: 1,
                                                    borderLeft:
                                                        "2px dashed #e5e7eb",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 1,
                                                        mb: 0.5,
                                                    }}
                                                >
                                                    <Avatar
                                                        sx={{
                                                            width: 38,
                                                            height: 38,
                                                            fontSize: 14,
                                                            bgcolor: "#6366f1",
                                                        }}
                                                    >
                                                        {item.initials}
                                                    </Avatar>

                                                    <Box>
                                                        <Typography
                                                            sx={{
                                                                fontWeight: 800,
                                                                fontSize: 15,
                                                            }}
                                                        >
                                                            {item?.customer?.name}
                                                        </Typography>

                                                        <Typography
                                                            sx={{
                                                                fontSize: 12,
                                                                color:
                                                                    "text.secondary",
                                                            }}
                                                        >
                                                            {item?.service?.name}
                                                        </Typography>
                                                    </Box>
                                                </Box>

                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        gap: 3,
                                                        mt: 1,
                                                    }}
                                                >
                                                    <Box>
                                                        <Typography
                                                            sx={{
                                                                fontSize: 11,
                                                                color:
                                                                    "text.secondary",
                                                            }}
                                                        >
                                                            وقت الحجز
                                                        </Typography>

                                                        <Typography
                                                            sx={{
                                                                fontWeight: 700,
                                                                fontSize: 13,
                                                            }}
                                                        >
                                                            {new Date(
                                                                item.created_at
                                                            ).toLocaleTimeString(
                                                                "ar-DZ",
                                                                {
                                                                    hour: "2-digit",
                                                                    minute: "2-digit",
                                                                    hour12: false,
                                                                }
                                                            )}
                                                        </Typography>
                                                    </Box>

                                                    <Box>
                                                        <Typography
                                                            sx={{
                                                                fontSize: 11,
                                                                color:
                                                                    "text.secondary",
                                                            }}
                                                        >
                                                            الحالة
                                                        </Typography>

                                                        <Chip
                                                            size="small"
                                                            label={
                                                                item.isServing
                                                                    ? "التالي"
                                                                    : "في الانتظار"
                                                            }
                                                            color={
                                                                item.isServing
                                                                    ? "success"
                                                                    : "warning"
                                                            }
                                                        />
                                                    </Box>
                                                </Box>
                                            </Box>

                                            <Box
                                                sx={{
                                                    minWidth: 90,
                                                    textAlign: "center",
                                                    pl: 2,
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: 36,
                                                        fontWeight: 900,
                                                        color: "#6366f1",
                                                        lineHeight: 1,
                                                    }}
                                                >
                                                    {item?.ticket_number}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        fontSize: 11,
                                                        color:
                                                            "text.secondary",
                                                    }}
                                                >
                                                    رقم التذكرة
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Paper>
                                ))}
                            </Box>

                        </Box >


                        {/* Pagination */}
                        {
                            tickets?.length > 0 && (
                                <Box
                                    sx={{
                                        px: 3,
                                        py: 2,
                                        borderTop: "1px solid",
                                        borderColor: "divider",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        flexWrap: "wrap",
                                        gap: 2,
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        عرض 5 من أصل 24 تذكرة
                                    </Typography>

                                    <Pagination
                                        count={5}
                                        page={1}
                                        color="primary"
                                    />
                                </Box>
                            )
                        }
                    </Box >

                ) : (

                    <Box
                        sx={{
                            mt: 2,
// maxWidth:'100%',
                            position: "relative",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            p: 3,
                            borderRadius: "32px",
                            bgcolor: "#fff",
                            boxShadow: "0 4px 20px rgba(0,0,0,.06)",
                        }}
                    >







                        <Box
                            sx={{
                                position: "relative",
                                width: 150,
                                height: 150,
                                my: 2,
                                zIndex: 1,
                            }}
                        >

                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: -10,
                                    borderRadius: "50%",
                                    bgcolor: "rgba(144,0,255,.08)",


                                }}
                            />

                            <Box
                                sx={{
                                    // width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",

                                    bgcolor: "#fff",

                                    border: "1px solid #eee",

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",

                                    boxShadow: "0 10px 40px rgba(0,0,0,.08)",

                                    position: "relative",
                                    zIndex: 2,
                                }}
                            >
                                <AirlineSeatReclineNormalRoundedIcon
                                    sx={{
                                        fontSize: 80,
                                        color: "#9000ff",
                                    }}
                                />
                            </Box>

                        </Box>


                        <Box
                            sx={{
                                // my: 1,

                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 1,
                                textAlign: "center",
                            }}
                        >

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: 22,
                                        md: 34,
                                    },
                                    fontWeight: 800,
                                    mb: 0,
                                    zIndex: 1,
                                }}
                            >
                                قائمة الانتظار فارغة
                            </Typography>




                            <Typography
                                sx={{
                                    // maxWidth: 500,
                                    color: "#777",
                                    fontSize: 15,
                                    // lineHeight: 1.8,
                                    mb: 2,
                                    zIndex: 1,
                                }}
                            >
                                ابدأ بإضافة أول زبون إلى قائمة الانتظار أو شارك رابط الحجز
                                الذاتي ليتمكن الزبائن من حجز أدوارهم مباشرة.
                            </Typography>


                        </Box>





                        {/* Actions */}

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: {
                                    xs: "row",
                                    md: "row",
                                },
                                alignItems: "center",
                                gap: 2,
                                zIndex: 1,
                            }}
                        >

                            <Button
                                onClick={openDialogCreateTicket}
                                sx={{
                                    px: {xs:2,sm:3},
                                    py: 1.5,
                                    // width: 200,
                                    display: "flex",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    borderRadius: 3,
                                    color: "#fff",
                                    fontWeight: 700,

                                    background:
                                        "linear-gradient(135deg,#9000ff,#2196f3)",


                                    "&:hover": {
                                        background:
                                            "linear-gradient(135deg,#9000ff,#2196f3)",
                                    },
                                }}
                            >
                                <Box>

                                    <AddIcon />
                                </Box>

                                <Typography sx={{ whiteSpace: "nowrap" }}>

                                    تذكرة جديدة
                                </Typography>

                            </Button>
                            <Button
                                onClick={openQrCodePage}
                                variant="outlined"
                                sx={{
                                    // width: 200,

                                    px: {xs:2,sm:3},
                                    py: 1.5,
                                    display: "flex",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    borderRadius: 3,
                                }}
                            >
                                <Box>
                                    <QrCodeRoundedIcon />
                                </Box>
                                <Typography sx={{ whiteSpace: "nowrap" }}>

                                    رابط الحجز
                                </Typography>
                            </Button>


                        </Box>

                    </Box>
                )



            }
        </Box >
    )
}

export default WaitingList
