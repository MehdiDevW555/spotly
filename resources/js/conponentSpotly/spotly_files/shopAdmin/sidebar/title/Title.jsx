






import { Typography, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ChangeToggleMenu } from "../../../../../redux/slices/shopAdmin/ShopAdmin_slice";
function Title(props) {
    let { dispatch, toggleMenu, } = props

    const closeMenu = () => {
        dispatch(ChangeToggleMenu()); // إخفاء الـ Drawer
    };
    return (
        <Box>
            <Box sx={{
                mt: 2,
                mr: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 1,
            }}>

                <Box sx={{
                    borderRadius: '50%',
                    width: 10,
                    height: 10,
                    bgcolor: '#F7584F',
                }} />


                <Box sx={{
                    borderRadius: '50%',
                    width: 10,
                    height: 10,
                    bgcolor: '#F9BC27',
                }} />


                <Box sx={{
                    borderRadius: '50%',
                    width: 10,
                    height: 10,
                    bgcolor: '#2EC73D',
                }} />


            </Box>
            <Box
                close={closeMenu}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 1,
                }}
            >

                <Box
                    component="img"
                    src="/images/spotlylogo.png"
                    alt="Logo"
                    sx={{
                        width: 140,
                        height: 55,
                    }}
                />
                {toggleMenu && (
                    <IconButton onClick={closeMenu} size="small" >
                        <NavigateNextIcon sx={{
                            color: "#fff",
                            width: 35,
                            height: 35,
                            boxShadow: 10,
                            background: '#0084FF',
                            color: "#fff",
                            fontSize: 30,
                            borderRadius: '50%',
                        }} />
                    </IconButton>
                )}
            </Box>
            <Typography variant="body2" color="text.secondary" mb={3} sx={{ mr: 1 }}>
                Spotly.abd-tech.ca
            </Typography>
        </Box>
    );
}

export default Title;
