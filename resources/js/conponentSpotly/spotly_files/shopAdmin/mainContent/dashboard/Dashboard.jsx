import { Box } from "@mui/material";
import TrialAlert from "./trialAlert/TrialAlert";
import HeroSection from "./heroSection/HeroSection";
import StatsCards from "./statesCards/statesCards";
import Subscription from "./subscription/Subscription";
import NewActivity from "./newActivity/NewActivity";

export default function Dashboard() {
    return (
        <Box
            dir="rtl"
            sx={{
                minHeight: "100vh",
                position:'relative',
                mt:5,
                p:2,
                // bgcolor: "#f7f9fb",
                // display: "flex",
            }}
        >
             {/* <Box
                sx={{
                    position: "absolute",
                    width: '100%',
                    height: 400,
                    borderRadius: "50%",
                    bgcolor: "rgba(124, 58, 237, 0.23)",

                    filter: "blur(120px)",
                    top: -100,
                    left: -50,
                }}
            /> */}


            <TrialAlert />
            <HeroSection />
            <StatsCards />
            <Box
                sx={{
                    mt: 3,
                    display: "grid",
                    gap: 3,
                    gridTemplateColumns: {
                        xs: "1fr",
                        lg: "4fr 8fr",
                    },
                }}
            >
                {/* Subscription Card */}
                <Subscription />
                {/* Activity Section */}
                <NewActivity />

            </Box>

        </Box>
    );
}
