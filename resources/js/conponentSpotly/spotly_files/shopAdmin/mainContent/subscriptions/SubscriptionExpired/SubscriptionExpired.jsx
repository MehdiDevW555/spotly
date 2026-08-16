import { Box, Typography } from "@mui/material";
import LockClockRoundedIcon from "@mui/icons-material/LockClockRounded";
import TimerOffOutlinedIcon from '@mui/icons-material/TimerOffOutlined';
import SubscriptionPlans from "../subscriptionPlans/SubscriptionPlans";


function SubscriptionExpired() {

    return (
        <Box
            dir="rtl"
            sx={{
                minHeight: "100vh",
                background: "#faf8fc",
                px: { xs: 2, md: 5 },
                py: 5,
            }}
        >

            <Box
    sx={{
        mb: 5,

        p: 2,

        display: "flex",
        alignItems: "center",
        // justifyContent:'center',

        gap: 1,

        borderRadius: "30px 30px 0px 30px",

        background: "#FFDAD6",

        border: "1px solid rgba(0,0,0,0.08)",

        boxShadow:
            "0 15px 40px rgba(0,0,0,0.06)",

        flexDirection: {
            xs: "row",
            md: "row",
        },
    }}
>

    <Box
        sx={{
            width: 80,
            height: 80,

            flexShrink: 0,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            borderRadius: "25px",

            background:'#EEBFBF',
//
            color: "#BA1A1A",

            "& svg": {
                fontSize: 45
            }
        }}
    >
        <TimerOffOutlinedIcon />
    </Box>


    <Box
        sx={{
            textAlign: {
                xs: "right",
                md: "right",
            }
        }}
    >

        <Typography
            sx={{
                fontSize: {
                    xs: '150%',
                    md: 34
                },

                fontWeight: 900,
                color: "#222",
            }}
        >
            انتهت الفترة التجريبية
        </Typography>


        <Typography
            sx={{
                // mt: 1,

                color:"#777",

                fontSize:{xs:'90%',md:'130%'},
            }}
        >
                       نأمل أن تكون قد استمتعت بتجربة Spotly. يرجى اختيار خطة للمتابعة والاستمرار في إدارة قوائم الانتظار خاصتك بذكاء.

        </Typography>

    </Box>

</Box>



<Box sx={{px:{xs:1,md:4}}}>

            <SubscriptionPlans />
</Box>


        </Box>
    );
}


export default SubscriptionExpired;
