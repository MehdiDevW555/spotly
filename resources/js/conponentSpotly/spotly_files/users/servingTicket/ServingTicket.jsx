import {
    Box,
    Paper,
    Typography,
    Avatar,
} from "@mui/material";

import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ContentCutRoundedIcon from "@mui/icons-material/ContentCutRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";


function ServingTicket({
    shop,
    ticketNumber,
    lastCustomer
}) {

    console.log(ticketNumber)

    return (
        <Box
            dir="rtl"
            sx={{
                minHeight: "100dvh",
                px: 2,
                py: 5,

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                background:
                    "linear-gradient(135deg,#f8fafc,#ecfdf5)",

                position: "relative",
                overflow: "hidden",


                "&::before": {
                    content: '""',
                    position: "absolute",
                    width: 350,
                    height: 350,
                    borderRadius: "50%",
                    background:
                        "rgba(34,197,94,.18)",
                    filter: "blur(100px)",
                    top: -100,
                    right: -100,
                },

                "&::after": {
                    content: '""',
                    position: "absolute",
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background:
                        "rgba(37,99,235,.15)",
                    filter: "blur(100px)",
                    bottom: -100,
                    left: -100,
                }
            }}
        >


            <Paper
                elevation={0}
                sx={{
                    width: "100%",
                    maxWidth: 420,

                    p: 3,

                    borderRadius: 8,

                    background:
                        "rgba(255,255,255,.75)",

                    backdropFilter:
                        "blur(20px)",

                    border:
                        "1px solid rgba(255,255,255,.8)",

                    boxShadow:
                        "0 30px 70px rgba(15,23,42,.12)",

                    textAlign: "center",

                    position: "relative",
                    zIndex: 2
                }}
            >


                {/* SHOP */}

                <Box
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        gap:1.5,
                        mb:4
                    }}
                >



                    <Box>

                        <Typography
                            fontSize={20}
                            fontWeight={1000}
                        >
                            {shop?.shop_name}
                        </Typography>


                        <Typography
                            fontSize={13}
                            color="text.secondary"
                            fontWeight={700}
                        >
                            {shop?.business_type}
                        </Typography>

                    </Box>

                     <Avatar
                        sx={{
                            width:55,
                            height:55,
                            bgcolor:"#dcfce7",
                            color:"#16a34a"
                        }}
                    >

                        <StorefrontRoundedIcon />

                    </Avatar>



                </Box>




                {/* TITLE */}

                <Typography
                    fontSize={28}
                    fontWeight={1000}
                    color="#16a34a"
                   sx={{mb:3}}
                >
                    🎉 حان دورك
                </Typography>





                {/* NUMBER */}


                <Box
                    sx={{
                        width:200,
                        height:200,

                        mx:"auto",

                        borderRadius:"50%",

                        background:
                        "linear-gradient(135deg,#16a34a,#22c55e)",

                        color:"#fff",

                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center",

                        boxShadow:
                        "0 25px 50px rgba(22,163,74,.35)",


                        animation:
                        "pulse 2s infinite",


                        "@keyframes pulse":{
                            "0%":{
                                boxShadow:
                                "0 0 0 0 rgba(22,163,74,.5)"
                            },

                            "70%":{
                                boxShadow:
                                "0 0 0 25px rgba(22,163,74,0)"
                            },

                            "100%":{
                                boxShadow:
                                "0 0 0 0 rgba(22,163,74,0)"
                            }
                        }

                    }}
                >

                    <Typography
                        fontSize={16}
                        fontWeight={800}
                    >
                        رقم التذكرة
                    </Typography>


                    <Typography
                        sx={{
                            fontSize:50,
                        }}
                    >
                        {ticketNumber}
                    </Typography>


                </Box>





                {/* CUSTOMER INFO */}


                <Box
                    sx={{
                        mt:4,

                        p:2,

                        borderRadius:4,

                        bgcolor:"#f8fafc",

                        display:"flex",
                        flexDirection:"column",
                        gap:1.5
                    }}
                >


                    <Box
                        sx={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"space-between"
                        }}
                    >

                        <Box
                            sx={{
                                display:"flex",
                                alignItems:"center",
                                gap:1
                            }}
                        >

                            <PersonRoundedIcon
                                sx={{
                                    color:"#2563eb"
                                }}
                            />

                            <Typography
                                fontWeight={800}
                            >
                                الاسم
                            </Typography>

                        </Box>


                        <Typography
                            fontWeight={900}
                            color="primary"
                        >
                            {lastCustomer?.customer?.name}
                        </Typography>


                    </Box>





                    <Box
                        sx={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"space-between"
                        }}
                    >

                        <Box
                            sx={{
                                display:"flex",
                                alignItems:"center",
                                gap:1
                            }}
                        >

                            <ContentCutRoundedIcon
                                sx={{
                                    color:"#2563eb"
                                }}
                            />

                            <Typography
                                fontWeight={800}
                            >
                                الخدمة
                            </Typography>

                        </Box>


                        <Typography
                            fontWeight={900}
                            color="primary"
                        >
                              {lastCustomer?.service?.name ?? "غير محدد"}
                        </Typography>


                    </Box>



                </Box>





                {/* STATUS */}


                <Box
                    sx={{
                        mt:3,

                        py:1.5,

                        borderRadius:4,

                        bgcolor:"#dcfce7",

                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",

                        gap:1
                    }}
                >

                    <CheckCircleRoundedIcon
                        sx={{
                            color:"#16a34a"
                        }}
                    />


                    <Typography
                        color="#15803d"
                        fontWeight={900}
                    >
                        توجه إلى الموظف الآن
                    </Typography>


                </Box>


            </Paper>


        </Box>
    )
}


export default ServingTicket;
