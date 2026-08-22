import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { Box, Button, LinearProgress, Paper, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { ChangeCurrentPage, ChangePreviousPage } from "../../../../../../redux/slices/shopAdmin/ShopAdmin_slice";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


export default function TrialAlert(props) {
    let { getSubscription } = props
    let subscription = getSubscription?.subscription
    let dispatch = useDispatch()
    const startDate = new Date(subscription?.starts_at);
    const endDate = new Date(subscription?.ends_at);
    const today = new Date();

    const totalDays = Math.max(
        1,
        Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))
    );

    const remainingDays = Math.max(
        0,
        Math.ceil((endDate - today) / (1000 * 60 * 60 * 24))
    );

    const elapsedDays = totalDays - remainingDays;

    const progressPercentage =
        (elapsedDays / totalDays) * 100;
    let openSubscriptionPage = () => {
        dispatch(ChangeCurrentPage('Subscriptions'))
        dispatch(ChangePreviousPage('Subscriptions'))
    }

    return (
        <Box
            onClick={openSubscriptionPage}
            dir="rtl"
            elevation={0}
            sx={{
                mt: 4,
                px: { xs: 1, md: 3 },
                py: { xs: 1, md: 2 },
                borderRadius: 3,
                bgcolor: "#ffdad6",
                bgcolor:
                    "rgba(255,184,0,0.08)",
                // border: "1px solid rgba(186,26,26,.2)",
                borderRight: '5px solid #ff0000',
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: "row",
                },
                alignItems: "center",
                justifyContent: {
                    xs: "right",
                    md: "space-between",
                },
                gap: 0,
                // cursor: 'pointer',
            }}
        >
            <Box
                // onClick={openSubscriptionPage}
                sx={{
                    mr: { xs: 0, sm: 0 },
                    display: "flex",
                    alignItems: "center",
                    // justifyContent:'flex-start',
                    gap: { xs: 1, md: 2 },
                }}
            >
                <WarningAmberRoundedIcon
                    sx={{
                        color: "#ff0000",
                        fontSize: 35,
                    }}
                />

                <Box>

                    <Typography
                        sx={{
                            fontSize: { xs: 16, md: 18 },
                            fontWeight: 900,
                            color: "#ff0000",
                            // mb: 0.5,
                        }}
                    >
                        {subscription?.plan?.name} - متبقي {remainingDays} {remainingDays === 1 ? "يوم" : "أيام"}
                    </Typography>




                    <Typography
                        sx={{
                            fontSize: { xs: 12, md: 14 },
                            color: "#ff0000",
                        }}
                    >
                        {subscription?.plan?.alert}

                        <Button
                            onClick={openSubscriptionPage}
                            component="span"
                            sx={{
                                color: "#635BFF",
                                color: "#1976d2",
                                // textDecoration: "underline",
                                cursor: "pointer",
                                fontWeight: 700,
                                display: "inline-flex",
                                alignItems: "center",
                                mr: -0.5,
                            }}
                        >
                            <Typography sx={{ mt: -0.5 }}>
                                المزيد
                            </Typography>

                            <ChevronLeftIcon
                                sx={{
                                    mr: -0.5,
                                    fontSize: 20,
                                    color: "#1976d2",
                                }}
                            />
                        </Button>
                    </Typography>



                </Box>
            </Box>

            <Box
                onClick={openSubscriptionPage}
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
                        {totalDays} يوم
                    </Typography>

                    <Typography variant="caption">
                        {remainingDays} يوم
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: "relative",
                        height: 8,
                        bgcolor: "rgba(255,255,255,.6)",
                        borderRadius: 999,
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            right: 0, // <-- هنا السر

                            height: "100%",
                            width: `${progressPercentage}%`,

                            bgcolor: "#ff0000",

                            transition: "all .8s ease",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
