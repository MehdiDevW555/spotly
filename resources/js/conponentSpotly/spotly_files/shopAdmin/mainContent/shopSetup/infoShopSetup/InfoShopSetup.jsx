

import {
    Box,
    Typography,
    Button,
    TextField,
    MenuItem,
    CircularProgress,
} from "@mui/material";
import { keyframes } from "@mui/system";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { UNSAFE_decodeViaTurboStream } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ChangeInfoShop, ChangePagesShopSetup } from "../../../../../../redux/slices/shopAdmin/ShopAdmin_slice";
import API_SEND_SETUP_INFO_SHOP from "../../../../../api/shopAdmin/infoShop/API_SEND_SETUP_INFO_SHOP";
import screen2 from './../../../../../../../img/app/screen2.png'
import "leaflet/dist/leaflet.css";
import MapLocation from "./mapLocation/MapLocation";

import { useState, useEffect } from "react";

import {
    MapContainer,
    TileLayer,
    Marker,
    useMap,
} from "react-leaflet";

function ChangeMapView({ center }) {

    const map = useMap();

    map.setView(center, 15);

    return null;
}

export default function InfoShopSetup(props) {

    const revealAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) scale(.5);
    filter: blur(12px);
  }

  to {
    opacity: 1;
    transform: translateX(-50%) scale(1);
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

    let { infoShop } = props

    let dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState("");
    const [searching, setSearching] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(false);
    const [notFound, setNotFound] = useState(false);



    const [mapPosition, setMapPosition] = useState([
        36.365,
        6.614
    ]);

    const searchLocation = async (value) => {

        const query = value.trim();

        if (query.length < 1) {
            setSearchResults([]);
            return;
        }

        try {

            setSearching(true);

            // تحديد لغة البحث
            const isArabic = /[\u0600-\u06FF]/.test(query);

            const language = isArabic ? "ar" : "fr";

            const url =
                `https://nominatim.openstreetmap.org/search` +
                `?format=jsonv2` +
                `&q=${encodeURIComponent(query)}` +
                `&countrycodes=dz` +
                `&addressdetails=1` +
                `&namedetails=1` +
                // `&layer=address` +
                `&accept-language=${language}` +
                `&limit=10`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();

            console.log("Nominatim results:", data);


            if (data.length === 0) {

                setNotFound(true);
                setSearchResults([]);

                return;
            }

            setNotFound(false);
            setSearchResults(data);

        } catch (error) {

            console.error("Location search error:", error);

            setSearchResults([]);

        } finally {

            setSearching(false);

        }
    };


    const selectLocation = (location) => {

        setSelectedLocation(true);

        const lat = Number(location.lat);
        const lng = Number(location.lon);

        setMapPosition([lat, lng]);

        setSearchValue(location.display_name);

        setSearchResults([]);

        dispatch(
            ChangeInfoShop({
                address: location.display_name,
            })
        );
    };



    useEffect(() => {

        if (selectedLocation) {
            setSelectedLocation(false);
            return;
        }

        if (searchValue.trim().length < 1) {
            setSearchResults([]);
            setSearching(false);
            return;
        }

        const timer = setTimeout(() => {
            searchLocation(searchValue);
        }, 1000);

        return () => clearTimeout(timer);

    }, [searchValue]);


    let handelBackWelcome = () => {
        dispatch(ChangePagesShopSetup('WelcomeShopSetup'))
    }
    let handelGoFinished = () => {
        dispatch(ChangePagesShopSetup('SuccessShopSetup'))
    }

    console.log(infoShop.address)
    let IdShop = infoShop.shop.id
    // console.log(idShop)
    let BusinessType = infoShop.business_type
    let Address = infoShop.address

    let handelChange = (field) => (e) => {
        let value = e.target.value
        dispatch(ChangeInfoShop({
            [field]: value,
            // errors: {
            //     ...dataRegisterShopAdmin.errors,
            //     [field]: undefined
            // }
        }));
    }
    let sendSetupInfoShop = () => {
        API_SEND_SETUP_INFO_SHOP(dispatch, IdShop, BusinessType, Address)
    }

    let Loading = infoShop.loading
    return (
        <Box
            sx={{
                minHeight: "100vh",
                position: "relative",
                // overflow: "hidden",
                direction: "rtl",
            }}
        >
            {/* Background */}
            <Box
                component="img"
                // src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzsG61lvQ5NcLbYv6fNHs-lWqh7SF0W8Ue-qUuGLGeVZhKsQJRdaSVlxq6Dd6g6Vx0NG0hpFCjQ8f9KRlkYDEC4ux28HbHivdRyR4R26_jl3wp-spVmoxokFt0lOzGdhZbcLfcXEvSjEnPfU6vr3KJAQ-NLMKpHjyC5mbsh_QJD3IsmjybIjlZ3tVOv4vS7DBLtwG4FDrtq8gkqkX2xezPXKmwDspjZo4YWUT9YjhqmvhW-3oSwOIyqn5eCFaDhXmiiNPbz5CPX5E"
                // src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfM2_EmvLiY_jwklvO4gUCoVqWzoyx5bmxEKLKo0Z298SGnvnNqwwjOymU7GJGioajpR2SIytrLWbcOnpRfgYmZ6641o9Y0TPrM8HboVMJ6zlL0ikWE8sYx4kYtnNlxoaQ3_0xhW08yeuytm-nsnJ8R4W9P2cFvGn5TWNXtrl3_FOgSUk7hR6OKgCF5wzg1jbsg4F0EX-9cjhhrD6zFICRJkPUzBwlemtU-S0ThFSp8_4g53LE95Zr8nJLAEYFQ_lYk_-HRnwi0xY"
                src={screen2}
                sx={{
                    position: "fixed",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(1.05)",
                }}
            />

            <Box
                sx={{
                    position: "fixed",
                    inset: 0,
                    bgcolor: "rgba(0, 0, 0, 0.55)",
                    zIndex: 1,
                }}
            />




            {/* Content */}
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 2,
                    mt: { xs: -5, sm: 0 },
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: 850,
                        // minHeight: "70vh",
                        p: { xs: 3, md: 6 },
                        borderRadius: 6,
                        backdropFilter: "blur(20px)",
                        bgcolor: "rgba(255,255,255,.05)",
                        border: "1px solid rgba(255,255,255,.1)",
                        animation: `${fadeUp} .7s ease-out .2s both`,
                    }}
                >
                    {/* Title */}
                    <Box
                        sx={{
                            textAlign: "center",
                            mb: { xs: 3, md: 5 },
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#e0c6ff",
                                fontSize: 32,
                                fontWeight: 700,
                            }}
                        >
                            الموقع ونوع النشاط
                        </Typography>

                        <Typography
                            sx={{
                                color: "#d7d7d7",
                                mt: 1,
                                fontWeight: 700,
                            }}
                        >
                            أخبرنا أين يقع عملك التجاري لنتمكن من تهيئة الإعدادات المحلية لك
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        gap: { xs: 2, sm: 2 },
                        flexDirection: {
                            xs: "row",
                            sm: "row",
                        },
                        alignItems: 'center',
                        justifyContent: "space-between",

                    }}>

                        {/* ShopName */}
                        <Box sx={{
                            width: { xs: '100%', md: '50%' },
                            display: "flex",
                            gap: 1,
                            flexDirection: {
                                xs: "column",
                                md: "column",
                            },
                            mb: { xs: 2, md: 2 }
                        }}>
                            <Typography
                                sx={{
                                    color: "#e0c6ff",
                                    fontSize: 18,
                                    fontWeight: 700,
                                }}
                            >
                                اسم المحل
                            </Typography>
                            <TextField
                                disabled
                                value={infoShop?.shop?.shop_name}
                                sx={fieldStyle}
                                fullWidth
                            />
                        </Box>


                        {/* Phone */}
                        <Box sx={{
                            width: { xs: '100%', md: '50%' },
                            display: "flex",
                            gap: 1,
                            flexDirection: {
                                xs: "column",
                                md: "column",
                            },
                            mb: { xs: 2, md: 2 }
                        }}>
                            <Typography
                                sx={{
                                    color: "#e0c6ff",
                                    fontSize: 18,
                                    fontWeight: 700,
                                }}
                            >
                                الهاتف
                            </Typography>
                            <TextField
                                disabled
                                value={infoShop?.shop?.phone}
                                sx={fieldStyle}
                                fullWidth
                            />
                        </Box>
                    </Box>


                    {/* Address */}
                    <Box sx={{
                        display: "flex",
                        gap: 1,
                        flexDirection: {
                            xs: "column",
                            md: "column",
                        },
                        mb: { xs: 2, md: 2 }
                    }}>
                        <Typography
                            sx={{
                                color: "#e0c6ff",
                                fontSize: 18,
                                fontWeight: 700,
                            }}
                        >
                            العنوان
                        </Typography>



                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                mb: 2,
                            }}
                        >
                            <TextField
                                placeholder="ابحث عن موقع المحل، مثل: حامة بوزيان، قسنطينة"
                                fullWidth
                                value={searchValue}
                                sx={fieldStyle}
                                onChange={(e) => {
                                    setSearchValue(e.target.value);
                                    setSearching(true);
                                }}
                            />

                            {searching && (
                                <CircularProgress
                                    size={20}
                                    sx={{
                                        position: "absolute",
                                        left: 15,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        color: "#a78bfa",
                                    }}
                                />
                            )}

                            {searchResults.length > 0 && (
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "calc(100% + 8px)",
                                        left: 0,
                                        right: 0,
                                        zIndex: 9999,

                                        maxHeight: 300,
                                        overflowY: "auto",

                                        borderRadius: "16px",

                                        bgcolor: "rgba(25,25,30,.97)",

                                        backdropFilter: "blur(20px)",

                                        border:
                                            "1px solid rgba(255,255,255,.12)",

                                        boxShadow:
                                            "0 20px 50px rgba(0,0,0,.45)",
                                    }}
                                >
                                    {searchResults.map((location) => (

                                        <Box
                                            key={location.place_id}
                                            onClick={() => selectLocation(location)}
                                            sx={{
                                                px: 2,
                                                py: 1.5,
                                                cursor: "pointer",
                                                borderBottom:
                                                    "1px solid rgba(255,255,255,.08)",

                                                "&:hover": {
                                                    bgcolor:
                                                        "rgba(124,58,237,.25)",
                                                },
                                            }}
                                        >

                                            <Typography
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: 15,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                {location.name || location.display_name}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    color: "#aaa",
                                                    fontSize: 12,
                                                    mt: 0.5,
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                {location.display_name}
                                            </Typography>

                                        </Box>

                                    ))}
                                </Box>
                            )}

{notFound && (
    <Typography
    sx={{
        color: "#ffb4b4",
        mt: 1,
        fontSize: 14,
    }}
    >
        لم يتم العثور على العنوان .
    </Typography>
)}
</Box>

                        {/* <MapContainer
                            center={mapPosition}
                            zoom={13}
                            style={{
                                height: "150px",
                                width: "100%",
                                borderRadius: "20px",
                                marginBottom: "20px",
                            }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <Marker position={mapPosition} />

                            <ChangeMapView
                                center={mapPosition}
                            />
                        </MapContainer> */}


                    </Box>

                    {/* Business Type + Currency */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 1,
                            flexDirection: {
                                xs: "column",
                                md: "column",
                            },
                            mb: { xs: 5, md: 7 },
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#e0c6ff",
                                fontSize: 18,
                                fontWeight: 700,
                            }}
                        >
                            نوع النشاط
                        </Typography>
                        <TextField
                            value={BusinessType}
                            onChange={handelChange('business_type')}
                            sx={fieldStyle}
                            select
                            fullWidth
                            placeholder="نوع النشاط"
                        >
                            <MenuItem value="barber">حلاق</MenuItem>
                            <MenuItem value="doctor">طبيب</MenuItem>
                        </TextField>

                    </Box>

                    {/* Actions */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: { xs: 1, sm: 3 },
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: {
                                xs: "row",
                                md: "row",
                            },
                        }}
                    >
                        <Button
                            onClick={() => handelBackWelcome()}
                            variant="outlined"
                            sx={{
                                px: 1,
                                py: 1.5,
                                width: '50%',
                                borderRadius: 999,
                                color: "#fff",
                                borderColor:
                                    "rgba(255,255,255,.15)",
                            }}
                        >
                            <KeyboardDoubleArrowRightIcon />
                            <Typography sx={{ mr: 1 }}>رجوع</Typography>

                        </Button>

                        <Button
                            onClick={() => sendSetupInfoShop()}
                            variant="contained"

                            sx={{
                                px: 1,
                                py: 1.5,
                                width: '50%',
                                bgcolor: "#7C3AED",
                                borderRadius: 999,
                            }}
                        >
                            {Loading === 0 ? (
                                <>
                                    <Typography sx={{ ml: 1 }}>متابعة</Typography>
                                    <KeyboardDoubleArrowLeftIcon />
                                </>
                            ) : (

                                <CircularProgress
                                    size={24}
                                    sx={{
                                        color: "#ffffff",
                                        fontWeight: "bold",
                                        animationDuration: "1.2s",
                                    }}
                                />
                            )}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}


const fieldStyle = {
    "& .MuiOutlinedInput-root": {
        borderRadius: "14px",
        backdropFilter: "blur(10px)",
        // background: "rgba(255, 255, 255, 0.04)",
        color: "#ffffff",


        "& .MuiOutlinedInput-input": {
            color: "#ffffff",
            WebkitTextFillColor: "#c0c0c0",
        },

        "& .Mui-disabled .MuiOutlinedInput-input": {
            WebkitTextFillColor: "#8a8a8a",
        },




        "&.Mui-focused fieldset": {
            color: "#ffffff",
            borderColor: "#635bff",
            boxShadow:
                "0 0 15px rgba(99,91,255,.3)",
        },
    },


}
