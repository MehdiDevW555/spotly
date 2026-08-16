import React from "react";

import {
    Box,
    Paper,
    Typography,
    Divider,
} from "@mui/material";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import ContentCutRoundedIcon from "@mui/icons-material/ContentCutRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ArabicReshaper from "arabic-persian-reshaper";
import bidiFactory from "bidi-js";
import { formatArabicText } from "../../../../someFunctions/FormatArabicText";
// import {formatArabicText} from
function TicketDownload({
    lastTicketNumber,
    lastCustomer,
    serviceName
}) {

    const date = new Date();


    return (

        <Paper
            elevation={0}
            sx={{
                width:360,
                mx:"auto",
                bgcolor:"#ffffff",
                borderRadius:6,
                overflow:"hidden",
                border:"1px solid #E2E8F0",
                boxShadow:"0 25px 60px rgba(15,23,42,.12)",
            }}
        >


            {/* Header */}

            <Box
                sx={{
                    p:4,
                    textAlign:"center",
                    background:
                    "linear-gradient(135deg,#EFF6FF,#FFFFFF)",
                }}
            >

                <Typography
                    sx={{
                        fontSize:30,
                        fontWeight:900,
                        color:"#0F172A",
                        letterSpacing:.5,
                    }}
                >
                    BARBER HOUSE
                </Typography>


                <Typography
                    sx={{
                        mt:1,
                        color:"#64748B",
                        fontSize:15,
                        fontWeight:700,
                    }}
                >
                    Ticket de file d'attente
                </Typography>


            </Box>



            <Divider sx={{borderStyle:"dashed"}} />




            {/* Ticket Number */}


            <Box
                sx={{
                    py:2,
                    display:"flex",
                    alignItems:"center",
                    flexDirection:"column",
                }}
            >


                <Typography
                    sx={{
                        color:"#64748B",
                        fontSize:16,
                        fontWeight:700,
                    }}
                >
                    Numéro de ticket
                </Typography>



                <Box
                    sx={{
                        mt:1.5,
                        width:150,
                        height:150,
                        borderRadius:"50%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        background:
                        "linear-gradient(135deg,#2563EB,#60A5FA)",
                        boxShadow:
                        "0 15px 35px rgba(37,99,235,.35)",
                    }}
                >

                    <Typography
                        sx={{
                            mt:-10,
                            fontSize:80,
                            fontWeight:1000,
                            color:"#fff",
                            lineHeight:1,
                        }}
                    >
                        {lastTicketNumber}
                    </Typography>


                </Box>


            </Box>




            <Divider sx={{borderStyle:"dashed"}} />




            {/* Client Information */}


            <Box
                sx={{
                    p:3,
                }}
            >

                <Box
                    sx={{
                        background:"#F8FAFC",
                        borderRadius:4,
                        p:2,
                        display:"flex",
                        flexDirection:"column",
                        gap:2,
                    }}
                >


                    <Box
                        sx={{
                            display:"flex",
                            alignItems:"center",
                            gap:1.5,
                        }}
                    >

                        <PersonRoundedIcon
                            sx={{
                                color:"#2563EB",
                                fontSize:28,
                            }}
                        />


                        <Typography
                        sx={{mt:-2}}
                            fontSize={18}
                            fontWeight={800}
                            color="#0F172A"
                        >
                            {formatArabicText(lastCustomer?.name)}
                        </Typography>


                    </Box>



                    <Box
                        sx={{
                            display:"flex",
                            alignItems:"center",
                            gap:1.5,
                        }}
                    >

                        <PhoneRoundedIcon
                            sx={{
                                color:"#2563EB",
                                fontSize:26,
                            }}
                        />


                        <Typography
                        sx={{mt:-2}}
                            fontSize={18}
                            fontWeight={800}
                            color="#0F172A"
                        >
                            {lastCustomer?.phone ?? "-"}
                        </Typography>


                    </Box>


                </Box>


            </Box>





            <Divider sx={{borderStyle:"dashed"}} />





            {/* Date Time */}


            <Box
                sx={{
                    p:3,
                    display:"flex",
                    justifyContent:"space-around",
                }}
            >


                <Box
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        gap:1,
                    }}
                >

                    <CalendarMonthRoundedIcon
                        sx={{
                            color:"#2563EB",
                            fontSize:32,
                        }}
                    />


                    <Box>

                        <Typography
                        sx={{mt:-2}}
                            fontSize={12}
                            color="#64748B"
                            fontWeight={600}
                        >
                            Date
                        </Typography>


                        <Typography
                            fontWeight={900}
                            fontSize={16}
                        >
                            {date.toLocaleDateString("fr-FR")}
                        </Typography>


                    </Box>


                </Box>




                <Box
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        gap:1,
                    }}
                >

                    <AccessTimeRoundedIcon
                        sx={{
                            color:"#2563EB",
                            fontSize:32,
                        }}
                    />


                    <Box>

                        <Typography
                        sx={{mt:-2}}
                            fontSize={12}
                            color="#64748B"
                            fontWeight={600}
                        >
                            Heure
                        </Typography>


                        <Typography
                            fontWeight={900}
                            fontSize={16}
                        >
                            {date.toLocaleTimeString("fr-FR",{
                                hour:"2-digit",
                                minute:"2-digit"
                            })}
                        </Typography>


                    </Box>


                </Box>


            </Box>




            <Divider sx={{borderStyle:"dashed"}} />





            {/* Service */}


            <Box
                sx={{
                    p:3,
                    display:"flex",
                    alignItems:"center",
                    gap:2,
                }}
            >

                <Box
                    sx={{
                        width:55,
                        height:55,
                        borderRadius:3,
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        background:"#EFF6FF",
                    }}
                >

                    <ContentCutRoundedIcon
                        sx={{
                            color:"#2563EB",
                            fontSize:32,
                        }}
                    />


                </Box>



                <Box>

                    <Typography
                    sx={{mt:-2}}
                        color="#64748B"
                        fontSize={13}
                        fontWeight={700}
                    >
                        Service
                    </Typography>


                    <Typography
                        fontSize={20}
                        fontWeight={900}
                    >
                        {formatArabicText(lastCustomer?.service?.name ?? "-")}
                    </Typography>


                </Box>


            </Box>




            <Divider sx={{borderStyle:"dashed"}} />





            {/* Footer */}


            <Box
                sx={{
                    p:3,
                    textAlign:"center",
                }}
            >

                <Typography
                    fontWeight={900}
                    fontSize={16}
                    color="#0F172A"
                >
                    Merci de nous avoir choisis
                </Typography>


                <Typography
                    mt={.5}
                    color="#64748B"
                    fontSize={14}
                >
                    Nous apprécions votre visite
                </Typography>


            </Box>


        </Paper>

    );
}


export default TicketDownload;
