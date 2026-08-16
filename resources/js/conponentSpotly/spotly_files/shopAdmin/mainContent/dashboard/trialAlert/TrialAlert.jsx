import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { Box, LinearProgress, Paper, Typography } from "@mui/material";

export default function TrialAlert() {
    return (
        <Paper
            elevation={0}
            sx={{
                mt: 4,
                px: 3,
                py:2,
                borderRadius: 3,
                bgcolor: "#ffdad6",
                border: "1px solid rgba(186,26,26,.2)",
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: "row",
                },
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <WarningAmberRoundedIcon
                    sx={{
                        color: "#ba1a1a",
                        fontSize: 32,
                    }}
                />

                <Box>
                    <Typography
                        sx={{
                            fontSize: 20,
                            fontWeight: 900,
                            color: "#93000a",
                            // mb: 0.5,
                        }}
                    >
                        نسخة تجريبية - متبقي 7 أيام
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 14,
                            color: "#93000a",
                        }}
                    >
                        يرجى ترقية اشتراكك لضمان استمرارية الخدمة.
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    width: {
                        xs: "100%",
                        md: 260,
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="caption">
                        7 أيام
                    </Typography>

                    <Typography variant="caption">
                        30 يوم
                    </Typography>
                </Box>

                <LinearProgress
                    variant="determinate"
                    value={23}
                    sx={{
                        height: 8,
                        borderRadius: 999,
                        bgcolor: "rgba(255,255,255,.6)",
                        "& .MuiLinearProgress-bar": {
                            bgcolor: "#ba1a1a",
                            borderRadius: 999,
                        },
                    }}
                />
            </Box>
        </Paper>
    );
}
