import React, { useState } from "react";
import {
    Box,
    Button,
    IconButton,
    Typography,
    Paper,
    Fade,
    ClickAwayListener,
    Container,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 9999,
                bgcolor: "rgba(15,15,30,.8)",
                backdropFilter: "blur(20px)",
                // borderBottom: "1px solid rgba(255,255,255,.08)",
            }}
        >
            <Container maxWidth="lg">
                <Box
                    dir="ltr"
                    sx={{
                        py: 1.5,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* Logo */}
                    <Box
                        component="img"
                        src="/images/spotlyLogo.png"
                        alt="Spotly"
                        sx={{


                            width: 140,
                            height: 60,
                            display: {
                                xs: "flex",
                                lg: "flex",
                            },
                            objectFit: "contain",
                            cursor: "pointer",
                        }}
                    />

                    {/* Desktop Buttons */}
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "flex",
                            },
                            alignItems: "center",
                            justifyContent: 'flex-start',
                            gap: 1,
                        }}
                    >
                        <Button
                            onClick={() => {
                                window.location.href = "/shopAdmin/login";
                            }}
                            variant="outlined"
                            sx={{
                                borderColor: "rgba(255,255,255,.2)",
                                color: "#fff",
                                borderRadius: "999px",
                                px: 2,
                                fontWeight: 700,

                                "&:hover": {
                                    borderColor: "#c3c0ff",
                                    bgcolor: "rgba(195,192,255,.08)",
                                },
                            }}
                        >
                            تسجيل الدخول
                        </Button>

                        <Button
                            onClick={() => {
                                window.location.href = "/shopAdmin/register";
                            }}
                            variant="contained"
                            sx={{
                                bgcolor: "#c3c0ff",
                                color: "#0f0069",
                                borderRadius: "999px",
                                px: 2,
                                fontWeight: 700,

                                "&:hover": {
                                    bgcolor: "#d5d2ff",
                                },
                            }}
                        >
                            حساب جديد
                        </Button>
                    </Box>

                    {/* Mobile Menu */}
                    <ClickAwayListener
                        onClickAway={() => setOpenMenu(false)}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                display: {
                                    xs: "block",
                                    sm: "none",
                                },
                            }}
                        >
                            <Box
                                onClick={() =>
                                    setOpenMenu(!openMenu)
                                }
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '0px 0px 30px 30px',
                                    width: 40,
                                    height: 40,
                                    color: "#fff",
                                    background:
                                        "linear-gradient(135deg, #743DB1 0%, #47CBE4 50%, #3989EC 100%)",

                                }}
                            >
                                <MenuRoundedIcon />
                            </Box>

                            <Fade
                                in={openMenu}
                                timeout={{
                                    enter: 180,
                                    exit: 120,
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "calc(100% + 12px)",
                                        right: 0,

                                        zIndex: 99999,

                                        // يمنع وجود أي مساحة قابلة للنقر عندما تكون مخفية
                                        // pointerEvents: openMenu ? "auto" : "none",
                                    }}
                                >
                                    {/* المؤشر */}
                                    <Box
                                        sx={{
                                            position: "absolute",

                                            top: -5,
                                            right: 15,

                                            width: 12,
                                            height: 12,

                                            bgcolor: "rgba(20,20,30,.96)",
                                            background:
                                                "linear-gradient(135deg, #47CBE4 50%, #3989EC 100%)",


                                            transform: "rotate(45deg)",



                                            zIndex: 0,
                                        }}
                                    />

                                    {/* القائمة */}
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            position: "relative",
                                            right: 12,
                                            width: 210,

                                            overflow: "hidden",

                                            borderRadius: "16px 3px 16px 16px",

                                            background:
                                                "linear-gradient(145deg, rgba(30,25,45,.98), rgba(15,20,35,.98))",
                                            background:
                                                "linear-gradient(135deg, #743DB1 20%, #47CBE4 60%, #3989EC 80%)",
                                        }}
                                    >

                                        {/* تسجيل الدخول */}
                                        <Box
                                            onClick={() => {
                                                window.location.href =
                                                    "/shopAdmin/login";
                                            }}
                                            sx={{
                                                px: 2,
                                                py: 1.7,

                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "flex-end",

                                                gap: 1.2,

                                                cursor: "pointer",

                                                transition:
                                                    "background .2s ease",

                                                "&:hover": {
                                                    bgcolor:
                                                        "rgba(255,255,255,.07)",
                                                },

                                                "&:active": {
                                                    bgcolor:
                                                        "rgba(255,255,255,.12)",
                                                },
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "#dfddff",
                                                    fontSize: 16,
                                                    fontWeight: 600,
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                تسجيل الدخول
                                            </Typography>

                                            <LoginIcon
                                                sx={{
                                                    fontSize: 21,
                                                    color: "#dfddff",
                                                }}
                                            />
                                        </Box>

                                        {/* الخط */}
                                        <Box
                                            sx={{
                                                height: "1px",
                                                mx: 1.5,
                                                bgcolor:
                                                    "rgba(255,255,255,.08)",
                                            }}
                                        />

                                        {/* حساب جديد */}
                                        <Box
                                            onClick={() => {
                                                window.location.href =
                                                    "/shopAdmin/register";
                                            }}
                                            sx={{
                                                px: 2,
                                                py: 1.7,

                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "flex-end",

                                                gap: 1.2,

                                                cursor: "pointer",

                                                transition:
                                                    "background .2s ease",

                                                "&:hover": {
                                                    bgcolor:
                                                        "rgba(255,255,255,.07)",
                                                },

                                                "&:active": {
                                                    bgcolor:
                                                        "rgba(255,255,255,.12)",
                                                },
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: 16,
                                                    fontWeight: 600,
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                حساب جديد
                                            </Typography>

                                            <PersonAddIcon
                                                sx={{
                                                    fontSize: 21,
                                                    color: "#fff"
                                                }}
                                            />
                                        </Box>

                                    </Paper>
                                </Box>
                            </Fade>
                        </Box>
                    </ClickAwayListener>
                </Box>
            </Container>
        </Box>
    );
}

export default Header;
