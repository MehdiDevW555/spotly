import {
    Dialog,
    DialogContent,
    DialogActions,
    Box,
    Typography,
    IconButton,
    TextField,
    Button,
    Paper,
    Avatar,
    Switch,
    useTheme,
    useMediaQuery,
    Chip,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import FaceIcon from "@mui/icons-material/Face";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
function CreateTicket(props) {
    let {dispatch,openDialogCreateTicket}=props
    const theme = useTheme();

    const isMobile = useMediaQuery(
        theme.breakpoints.down("sm")
    );



    return (
        <>

            <Dialog
                open={open}
                // fullScreen={isMobile}
                dir="rtl"

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
                        left: 0,
                    }}
                />


                {/* Header */}
                <Box
                    sx={{
                        px: 3,
                        py: 2,
                        // borderBottom: "1px solid",
                        // borderColor: "divider",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        // bgcolor: "#f8fafc",
                    }}
                >
                    <Typography
                        sx={{
                            color: "#000000",
                            fontSize: 24,
                            fontWeight: 900,
                        }}
                    >
                        إضافة تذكرة جديدة
                    </Typography>

                    <IconButton onClick={openDialogCreateTicket} >
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Body */}
                <DialogContent
                    sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                    <Box
                        sx={{

                            display: "flex",
                            flexDirection: "column",
                            gap: 1.5,
                        }}
                    >
                        {/* بيانات العميل */}
                        <Box>


                            <Box
                                sx={{
                                    direction: 'rtl',
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1,
                                }}
                            >
                                <Box >
                                    <Typography sx={{
                                        color: "#009dff",
                                        fontWeight: 900,
                                        mb: 0.5,
                                    }}>
اسم العمبل
                                    </Typography>
                                    <TextField
                                        sx={fieldStyle}
                                        fullWidth
                                        // label="اسم العميل"
                                        placeholder="أدخل الاسم الكامل"
                                    />
                                </Box>


                                <Box >
                                    <Typography sx={{
                                        color: "#009dff",
                                        fontWeight: 900,
                                        mb: 0.5,
                                    }}
                                    >رقم الهاتف
                                    </Typography>
                                    <TextField
                                        sx={fieldStyle}
                                        fullWidth
                                        // label="رقم الهاتف"
                                        placeholder="أدخل الاسم الكامل"
                                    />
                                </Box>


                            </Box>
                        </Box>

                        {/* الخدمات */}
                        <Box>
                            <Typography
                                sx={{
                                    color: "#009dff",
                                    fontWeight: 900,
                                    mb: 0.5,
                                }}
                            >
                                اختيار الخدمة
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 0.5,
                                }}
                            >
                                {[
                                    {
                                        title: "حلاقة شعر",
                                        // icon: <ContentCutIcon />,
                                    },
                                    {
                                        title: "حلاقة ذقن",
                                        // icon: <FaceIcon />,
                                    },
                                    {
                                        title: "تنظيف بشرة",
                                        // icon: <CleanHandsIcon />,
                                    },
                                ].map((item) => (
                                    <Chip
                                        key={item.title}
                                        icon={item.icon}
                                        label={item.title}
                                        clickable
                                        sx={{
                                            // height: 42,
                                            borderRadius: "14px",
                                            px: { xs: 0.3, md: 1 },
                                            py: 2,
                                            fontWeight: 700,
                                            border: "2px solid",
                                            borderColor: "divider",
                                            bgcolor: "#fff",
                                            transition: ".2s",

                                            "& .MuiChip-icon": {
                                                color: "primary.main",
                                            },

                                            "&:hover": {
                                                bgcolor: "primary.50",
                                                borderColor: "primary.main",
                                            },
                                        }}
                                    />
                                ))}
                            </Box>



                        </Box>


                    </Box>
                </DialogContent>

                {/* Footer */}
                <DialogActions
                    sx={{
                        p: 2,
                        borderTop: "1px solid",
                        borderColor: "divider",
                        bgcolor: "#f8fafc",
                        gap: 1,
                    }}
                >
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            height: 52,
                            borderRadius: 3,
                            fontWeight: 800,
                        }}
                    >
                        إصدار تذكرة
                    </Button>

                    <Button
                        fullWidth
                        variant="outlined"
                        // onClick={handleClose}
                        sx={{
                            height: 52,
                            borderRadius: 3,
                            fontWeight: 800,
                        }}
                    >
                        إلغاء
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export default CreateTicket






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
