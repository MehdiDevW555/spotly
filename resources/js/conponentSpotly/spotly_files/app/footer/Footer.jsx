
import React from "react";
import {
    Box,
    Typography,
    IconButton,
    Container,
} from "@mui/material";

import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                width: "100%",
                bgcolor: "rgba(10, 10, 15, 0.85)",
                backdropFilter: "blur(24px)",
                borderTop: "1px solid rgba(255,255,255,.05)",
                mt:5,
                py: 6,
                position: "relative",
                zIndex: 10,
            }}
        >
            <Container maxWidth="lg">

                {/* Logo + Description + Social */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        mb: 5,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 2.5,
                        }}
                    >

                        {/* Logo */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <Box
                                component="img"
                                src="/images/spotlyLogo.png"
                                alt="Spotly Logo"
                                sx={{
                                    height: {xs:50,md:70},
                                    width: "auto",
                                    objectFit: "contain",
                                }}
                            />


                        </Box>

                        {/* Description */}
                        <Typography
                            sx={{
                                maxWidth: 380,
                                color: "rgba(255,255,255,.55)",
                                fontSize: {xs:14,sm:18},
                                lineHeight: 1.8,
                            }}
                        >
                            الحل الذكي لإدارة طوابير الانتظار
                            وتعزيز تجربة العملاء.
                        </Typography>

                        {/* Social Media */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: 1.2,
                                mt: 1,
                            }}
                        >

                            {/* X */}
                            <IconButton
                                aria-label="X"
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    bgcolor: "rgba(255,255,255,.02)",
                                    border:
                                        "1px solid rgba(255,255,255,.1)",
                                    color: "rgba(255,255,255,.55)",
                                    transition: ".3s",

                                    "&:hover": {
                                        color: "#fff",
                                        bgcolor:
                                            "rgba(255,255,255,.1)",
                                        borderColor:
                                            "rgba(255,255,255,.2)",
                                        transform:
                                            "translateY(-3px)",
                                    },
                                }}
                            >
                                <XIcon fontSize="small" />
                            </IconButton>

                            {/* LinkedIn */}
                            <IconButton
                                aria-label="LinkedIn"
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    bgcolor: "rgba(255,255,255,.02)",
                                    border:
                                        "1px solid rgba(255,255,255,.1)",
                                    color: "rgba(255,255,255,.55)",
                                    transition: ".3s",

                                    "&:hover": {
                                        color: "#0077b5",
                                        bgcolor:
                                            "rgba(255,255,255,.1)",
                                        borderColor:
                                            "rgba(255,255,255,.2)",
                                        transform:
                                            "translateY(-3px)",
                                    },
                                }}
                            >
                                <LinkedInIcon fontSize="small" />
                            </IconButton>

                            {/* Instagram */}
                            <IconButton
                                aria-label="Instagram"
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    bgcolor: "rgba(255,255,255,.02)",
                                    border:
                                        "1px solid rgba(255,255,255,.1)",
                                    color: "rgba(255,255,255,.55)",
                                    transition: ".3s",

                                    "&:hover": {
                                        color: "#E1306C",
                                        bgcolor:
                                            "rgba(255,255,255,.1)",
                                        borderColor:
                                            "rgba(255,255,255,.2)",
                                        transform:
                                            "translateY(-3px)",
                                    },
                                }}
                            >
                                <InstagramIcon fontSize="small" />
                            </IconButton>

                            {/* Facebook */}
                            <IconButton
                                aria-label="Facebook"
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    bgcolor: "rgba(255,255,255,.02)",
                                    border:
                                        "1px solid rgba(255,255,255,.1)",
                                    color: "rgba(255,255,255,.55)",
                                    transition: ".3s",

                                    "&:hover": {
                                        color: "#1877F2",
                                        bgcolor:
                                            "rgba(255,255,255,.1)",
                                        borderColor:
                                            "rgba(255,255,255,.2)",
                                        transform:
                                            "translateY(-3px)",
                                    },
                                }}
                            >
                                <FacebookIcon fontSize="small" />
                            </IconButton>

                            {/* TikTok */}
                            <IconButton
                                aria-label="TikTok"
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    bgcolor: "rgba(255,255,255,.02)",
                                    border:
                                        "1px solid rgba(255,255,255,.1)",
                                    color: "rgba(255,255,255,.55)",
                                    transition: ".3s",

                                    "&:hover": {
                                        color: "#fff",
                                        bgcolor:
                                            "rgba(255,255,255,.1)",
                                        borderColor:
                                            "rgba(255,255,255,.2)",
                                        transform:
                                            "translateY(-3px)",
                                    },
                                }}
                            >
                                <MusicNoteIcon fontSize="small" />
                            </IconButton>

                        </Box>
                    </Box>
                </Box>

                {/* Bottom */}
                <Box
                    sx={{
                        pt: 3,
                        borderTop:
                            "1px solid rgba(255,255,255,.05)",
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                    }}
                >

                    {/* Copyright */}
                    <Typography
                        sx={{
                            fontSize: 13,
                            color: "rgba(255,255,255,.5)",
                            fontWeight: 500,
                            textAlign: "center",
                        }}
                    >
                        © 2026 Spotly. جميع الحقوق محفوظة.
                    </Typography>

                    {/* Links */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,
                            direction: "rtl",
                        }}
                    >
                        <Typography
                            component="a"
                            href="#"
                            sx={{
                                fontSize: 13,
                                color: "rgba(255,255,255,.5)",
                                textDecoration: "none",
                                transition: ".3s",

                                "&:hover": {
                                    color: "#fff",
                                },
                            }}
                        >
                            الشروط والأحكام
                        </Typography>

                        <Typography
                            component="a"
                            href="#"
                            sx={{
                                fontSize: 13,
                                color: "rgba(255,255,255,.5)",
                                textDecoration: "none",
                                transition: ".3s",

                                "&:hover": {
                                    color: "#fff",
                                },
                            }}
                        >
                            سياسة الخصوصية
                        </Typography>
                    </Box>

                </Box>

            </Container>
        </Box>
    );
}

export default Footer;
