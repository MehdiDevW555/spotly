import React from "react";
import {
    Box,
    Typography,
    Chip,
} from "@mui/material";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import EventBusyRoundedIcon from "@mui/icons-material/EventBusyRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import SubscriptionPlans from "./subscriptionPlans/SubscriptionPlans";
import CurrentSubscriptionCard from "./currentSubscriptionCard/CurrentSubscriptionCard";
import { getSubscription_selector } from "../../../../../redux/selectors/shopAdmin/ShopAdmin_selector";
import { useSelector } from "react-redux";






function Subscriptions() {
let getSubscription = useSelector(getSubscription_selector)
    return (
        <Box
            dir="rtl"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                // alignItems:'center',
                // justifyContent:'center',
                mb:10,
                gap: 5,
                mt: 11,
                mx: { xs: 0, md: 2 },
                p: { xs: 2, md: 3 },

                // height: "calc(100vh - 96px)",
                overflowY: "auto",

                borderTop: "8px solid #ff00e1",
                borderRadius: "50px 50px 0 0",

                "&::-webkit-scrollbar": {
                    width: "4px",
                },

                "&::-webkit-scrollbar-thumb": {
                    bgcolor: "#9000FF",
                    borderRadius: "10px",
                },


            }}
        >

            <CurrentSubscriptionCard getSubscription={getSubscription} />

            <SubscriptionPlans getSubscription={getSubscription} />






        </Box>
    );
}


export default Subscriptions;
