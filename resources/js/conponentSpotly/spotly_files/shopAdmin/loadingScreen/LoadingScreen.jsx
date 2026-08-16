import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

function LoadingScreen() {

    const fadeUp = keyframes`
      from {
        opacity: 0;
        transform: translateY(40px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    `;


    return (
        <Box
            sx={{
                width: "100%",
                height: "100dvh",
                display: "flex",
                justifyContent: "center",
                flexDirection: 'column',
                alignItems: "center",
                bgcolor: "#0e0716",
                bgcolor: "rgba(124, 58, 237, 0.23)",
                gap: 2,
            }}
        >
            {/* <Box
                component="img"
                src="/images/slogo.png"
                alt="Logo"
                sx={{
                    borderRadius:8,
                    mt:{xs:-15,md:0},
                    width:120,
                    bgcolor:'#000000',
                    border:'4px solid #422562',
                    height: 120,
                    objectFit: "contain",
                    animation: `${fadeUp} .7s ease-out .2s both`,
                }}
            /> */}
            <Box
                component="img"
                // src="/images/spotlylogo.png"
                src="/images/slogo.png"
                alt="Logo"
                sx={{
                    borderRadius: '30%',
                     border:'4px solid #422562',
                      objectFit: "contain",
                    width: 150,
                    height: 150,
                    animation: `${fadeUp} .7s ease-out .2s both`,
                }}
            />
            <Typography sx={{
                color:'#422562',
                fontSize:50,
                fontWeight:700,
                animation: `${fadeUp} .7s ease-out .2s both`,
            }} >Spotlly</Typography>
        </Box>
    );
}

export default LoadingScreen;
