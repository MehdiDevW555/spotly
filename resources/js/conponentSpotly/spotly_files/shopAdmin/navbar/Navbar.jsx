import {
    Avatar,
    Box,
    Button,
    IconButton,
    InputBase,
    Paper,
    Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeCurrentPage, ChangeToggleMenu } from "../../../../redux/slices/shopAdmin/ShopAdmin_slice";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Navbar(props) {
    let { dispatch } = props

    let openMenu = () => { dispatch(ChangeToggleMenu()) }

    return (
        <Box
            dir="rtl"
            sx={{
                position: "fixed",
                top: { xs: 3, md: 0 },
                mx: 0.5,
                right: 0,
                left: 0,

                height: 64,
                bgcolor: "#e1d0fb17",

                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: '15px 15px 15px 15px',


                zIndex: 1200,
                py: { xs: 4.2, md: 2 },
                px: {
                    xs: 2,
                    md: 4,
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }
            }
        >

            <Box
                onClick={openMenu}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: "center",
                    justifyContent: 'space-around',
                    gap: { xs: 22, sm: 1 },
                }}
            >
                <IconButton
                    sx={{
                        background:
                            "linear-gradient(135deg, #743DB1 30%, #47CBE4 60%, #3989EC 90%)",
                        color: "#ffffff",
                        boxShadow: "0 5px 10px rgb(94, 94, 94)",
                        border: '1.5px solid #31afee',
                        display: {
                            xs: "none",
                            lg: "none",
                        },
                    }}
                >
                    <MenuIcon />
                </IconButton>











                <Box
                    onClick={openMenu}
                    component="img"
                    src="/images/spotlylogo.png"
                    alt="Logo"
                    sx={{
                        // borderRadius: '50%',
                        // background: '#e8cfff',
                        // filter: `
                        //     drop-shadow(0 5px 8px rgba(158, 155, 158, 0.99))
                        //     drop-shadow(0 0 8px rgba(41, 41, 41, 0))
                        // `,
                        //  boxShadow: "0 6px 15px rgb(94, 94, 94)",
                        // ml:-40,
                        // border:1,
                        width: 180,
                        height: 80,
                        display: {
                            xs: "none",
                            lg: "flex",
                        },
                    }}
                />
            </Box>



            <Box
                sx={{
                    display: {
                        xs: "flex",
                        sm: "none",
                    },
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                    // border:2,
                }}
            >

                <IconButton
                onClick={openMenu}
                    sx={{
                         background:
                            "linear-gradient(135deg, #743DB1 30%, #47CBE4 60%, #3989EC 90%)",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        color: "#f2ebf8",
                        // border: '1.5px solid #31afee',
                        width: 40,
                        height: 40,
                        boxShadow: "0 5px 10px rgb(94, 94, 94)",


                        display: {
                            xs: "flex",
                            lg: "none",
                        },
                    }}
                >
                    <MenuIcon />
                </IconButton>


                <Box
                    sx={{
                        background:
                            "linear-gradient(135deg, #743DB1 30%, #47CBE4 60%, #3989EC 90%)",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        color: "#f2ebf8",
                        // border: '1.5px solid #31afee',
                        width: 40,
                        height: 40,
                        boxShadow: "0 5px 10px rgb(94, 94, 94)",


                        display: {
                            xs: "flex",
                            sm: "flex",
                        },
                    }}
                >
                    <NotificationsIcon />
                </Box>


            </Box>





            <Box
                onClick={openMenu}
                component="img"
                src="/images/spotlylogo.png"
                // src="/images/slogo.png"
                alt="Logo"
                sx={{
                    borderRadius: '10px 10px 10px 10px',
                    // border:1,
                    ml: -.5,
                    width: 140,
                    height: 65,
                    display: {
                        xs: "flex",
                        lg: "none",
                    },
                }}
            />






















            <Box

                sx={{
                    display: {
                        xs: "none",
                        sm: "flex",
                    },
                    alignItems: "center",
                    gap: 1,
                }}
            >



                <Box
                    sx={{
                        background:
                            "linear-gradient(135deg, #743DB1 0%, #47CBE4 50%, #3989EC 100%)",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        color: "#f2ebf8",
                        border: '1.5px solid #31afee',
                        width: 45,
                        height: 45,
                        boxShadow: "0 5px 10px rgb(94, 94, 94)",


                        display: {
                            xs: "none",
                            sm: "flex",
                        },
                    }}
                >
                    <NotificationsIcon />
                </Box>



                <Avatar
                    src="https://i.pravatar.cc/150?img=10"
                    sx={{
                        background:
                            "linear-gradient(135deg, #743DB1 0%, #47CBE4 50%, #3989EC 100%)",
                        display: {
                            xs: "none",
                            sm: "none",
                        },
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        color: "#f2ebf8",
                        border: '1.5px solid #31afee',
                        width: 45,
                        height: 45,
                        boxShadow: "0 5px 10px rgb(94, 94, 94)",



                    }}
                />



                <IconButton
                    onClick={() => { window.location.href = '/shopAdmin/logout' }}
                    sx={{
                        background:
                            "linear-gradient(135deg, #ff4d4f 0%, #f5222d 50%, #cf1322 100%)",
                        // background:
                        //     "linear-gradient(135deg, #F44336 0%, #743DB1 35%, #47CBE4 70%, #3989EC 100%)",
                        color: "#fff",
                        width: 45,
                        height: 45,
                        boxShadow: "0 5px 10px rgb(94, 94, 94)",
                        "&:hover": {
                            background:
                                "linear-gradient(135deg, #ff7875 0%, #ff4d4f 50%, #f5222d 100%)",
                            transform: "scale(1.05)",
                        },

                        transition: "all .2s ease",
                        display: {
                            xs: "none",
                            sm: "flex",
                        },
                    }}
                >
                    <LogoutIcon />
                </IconButton>
            </Box>

        </ Box>
    );
}
