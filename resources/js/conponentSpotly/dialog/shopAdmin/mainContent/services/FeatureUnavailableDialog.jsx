import {
    Dialog,
    DialogContent,
    Typography,
    Button,
    Box,
} from "@mui/material";

import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";

export default function FeatureUnavailableDialog({
    open,
    handleClose,
}) {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="xs"
            fullWidth
            sx={{
                "& .MuiPaper-root": {
                    borderRadius: "24px",
                },
            }}
        >
            <DialogContent
                sx={{
                    textAlign: "center",
                    py: 4,
                    px: 3,
                }}
            >
                <Box
                    sx={{
                        width: 90,
                        height: 90,
                        mx: "auto",
                        mb: 2,

                        borderRadius: "50%",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        bgcolor: "rgba(99,91,255,.08)",
                    }}
                >
                    <ConstructionRoundedIcon
                        sx={{
                            fontSize: 50,
                            color: "#635BFF",
                        }}
                    />
                </Box>

                <Typography
                    sx={{
                        fontSize: 24,
                        fontWeight: 800,
                        color: "#16191D",
                        mb: 1,
                    }}
                >
                    الميزة غير متاحة حالياً
                </Typography>

                <Typography
                    sx={{
                        color: "#666",
                        lineHeight: 1.9,
                        mb: 3,
                    }}
                >
                    نعمل على إتاحة هذه الميزة في أقرب وقت ممكن
                </Typography>

                <Button
                    fullWidth
                    onClick={handleClose}
                    sx={{
                        py: 1.5,
                        borderRadius: "12px",

                        color: "#fff",

                        background:"#0ed51c",

                        fontWeight: 700,

                        "&:hover": {
                            opacity: 0.9,
                        },
                    }}
                >
                    حسناً
                </Button>
            </DialogContent>
        </Dialog>
    );
}
