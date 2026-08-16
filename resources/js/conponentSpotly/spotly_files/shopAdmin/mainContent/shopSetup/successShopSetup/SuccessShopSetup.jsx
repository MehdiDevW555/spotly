import React, { useMemo } from "react";
import {
    Box,
    Button,
    Chip,
    Paper,
    Typography,
} from "@mui/material";
import { keyframes } from "@mui/system";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import { useDispatch } from "react-redux";
import { ChangeInfoShop, ChangePagesShopSetup } from "../../../../../../redux/slices/shopAdmin/ShopAdmin_slice";
import screen3 from './../../../../../../../img/app/screen3.png'

const confettiFall = keyframes`
  0% {
    transform: translateY(-150px) rotate(0deg);
    opacity: 1;
  }

  100% {
    transform: translateY(130vh) rotate(1080deg);
    opacity: 0;
  }
`;
const floating = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-12px);
  }

  100% {
    transform: translateY(0px);
  }
`;


const revealAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.75);
    filter: blur(8px);
  }

  60% {
    opacity: 1;
    transform: translateY(-6px) scale(1.03);
    filter: blur(0);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
function SuccessShopSetup() {

    const confettiItems = useMemo(() => {
        return Array.from({ length: 90 }, (_, index) => ({
            id: index,
            left: Math.random() * 100,
            size: Math.random() * 14 + 8,
            duration: Math.random() * 2 + 2,
            delay: Math.random() * 5,
            shape: Math.floor(Math.random() * 4),
            color: [
                "#2563EB",
                "#60A5FA",
                "#9333EA",
                "#22C55E",
                "#F59E0B",
                "#EC4899",
            ][Math.floor(Math.random() * 6)],
        }));
    }, []);


    let dispatch = useDispatch()
    let handelGoShopAdminPanel = () => {
        dispatch(ChangeInfoShop({TUE:true}))
        dispatch(ChangePagesShopSetup('Dashboard'))
    }

    return (
        <Box
            sx={{
                minHeight: "100vh",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 3,
            }}
        >
            {/* Background Image */}
            <Box
                component="img"
                // src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMW8KR5xFuoS54NxcIlJy19Wp9d5E50gkFafGBqmHlew-SDq78lmm3YQqCFHON_flG_F2WfXhkEqjMlooOoK6OULaBcrprM-WObqF4e4c2uMSfidWO6XXB-U9RYmoLu1vIdLGFE1mw3sr8EVFdNiyTnWA9mU1k6m02IxBNdD0cIKBMsk0ePa5R7gItYPZ99qk4N-pY_3xAGnGFKpcEn8ODVW1k-jcDzq1uCE46R7p51eYdx3_uKRPtvGjglBsybdYwAvquZR_6zR8"
              src={screen3}
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(1.05)",
                }}
            />

            {/* Dark Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,.8))",
                    zIndex: 1,
                }}
            />

            {/* Confetti */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    pointerEvents: "none",
                    zIndex: 2,
                }}
            >
                {confettiItems.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            position: "absolute",
                            top: -100,
                            left: `${item.left}%`,
                            width: item.size,
                            height: item.size,
                            bgcolor: item.color,

                            borderRadius:
                                item.shape === 0
                                    ? "50%"
                                    : item.shape === 1
                                        ? "4px"
                                        : item.shape === 2
                                            ? "0"
                                            : "50% 0",

                            transform:
                                item.shape === 2
                                    ? "rotate(45deg)"
                                    : "rotate(0deg)",

                            boxShadow: `0 0 12px ${item.color}`,

                            animation: `${confettiFall} ${item.duration}s linear infinite`,
                            animationDelay: `${item.delay}s`,
                        }}
                    />
                ))}
            </Box>

            {/* Glow Effects */}
            <Box
                sx={{
                    position: "absolute",
                    width: 350,
                    height: 350,
                    borderRadius: "50%",
                    bgcolor: "#256eeb",
                    opacity: 0.2,
                    filter: "blur(140px)",
                    top: "15%",
                    left: "15%",
                    zIndex: 1,
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    width: 450,
                    height: 450,
                    borderRadius: "50%",
                    bgcolor: "#256eeb",
                    opacity: 0.15,
                    filter: "blur(160px)",
                    bottom: "10%",
                    right: "10%",
                    zIndex: 1,
                }}
            />

            {/* Main Content */}
            <Box
                sx={{
                    mt: -10,
                    position: "relative",
                    zIndex: 5,
                    width: "100%",
                    maxWidth: 900,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    animation: `${revealAnimation} 900ms cubic-bezier(0.22, 1, 0.36, 1)`,
                }}
            >
                {/* Success Icon */}
                <Box
                    sx={{
                        width: { xs: 110, md: 140 },
                        height: { xs: 110, md: 140 },
                        borderRadius: "50%",
                        bgcolor: "#7C3AED",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 4,
                        boxShadow:
                            "0 20px 50px rgba(37,99,235,.45)",
                        animation: `
            ${floating} 4s ease-in-out infinite,
            ${fadeUp} .7s ease-out
        `,
                    }}
                >
                    <CheckCircleRoundedIcon
                        sx={{
                            color: "#fff",
                            fontSize: { xs: 60, md: 80 },
                        }}
                    />
                </Box>

                {/* Title */}
                <Typography
                    sx={{
                        color: "#fff",
                        fontWeight: 900,
                        mb: 2,
                        fontSize: {
                            xs: "2rem",
                            md: "3.5rem",
                        },
                         animation: `${fadeUp} .7s ease-out .2s both`,
                    }}
                >
                    تهانينا! متجرك أصبح جاهزاً
                </Typography>

                {/* Description */}
                <Typography
                    sx={{
                        color: "rgba(255,255,255,.85)",
                        maxWidth: 700,
                        lineHeight: 1.9,
                        mb: 5,
                        fontSize: {
                            xs: "1rem",
                            md: "1.15rem",
                        },
                         animation: `${fadeUp} .7s ease-out .2s both`,
                    }}
                >
                    لقد قمت بإعداد كل شيء بنجاح.
                    عالم التجارة الإلكترونية بانتظارك،
                    ابدأ الآن في استقبال طلباتك الأولى
                    وبناء علامتك التجارية.
                </Typography>


                {/* Buttons */}
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: 420,
                    }}
                >
                    <Button
                    onClick={()=>handelGoShopAdminPanel()}
                        fullWidth
                        variant="contained"
                        endIcon={<DashboardRoundedIcon />}
                        sx={{
                            px: 6,
                            py: 2,
                            borderRadius: 10,
                            fontWeight: 700,
                            fontSize: "1rem",
                            bgcolor: "#8525eb",
                            boxShadow: "0 15px 40px rgba(100, 37, 235, 0.35)",

                            "&:hover": {
                                bgcolor: "#7a00fc",
                            },
                        }}
                    >
                        الدخول إلى لوحة التحكم
                    </Button>

                </Box>
            </Box>
        </Box>
    );
}

export default SuccessShopSetup;
