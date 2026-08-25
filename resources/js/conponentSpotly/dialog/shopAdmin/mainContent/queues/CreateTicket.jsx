import {
    Box,
    Typography,
    IconButton,
    TextField,
    Button,
    Chip,
    useTheme,
    useMediaQuery,
    CircularProgress,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { useSelector } from "react-redux";

import {
    bookPlaceManually_selector,
    getService_selector,
} from "../../../../../redux/selectors/shopAdmin/ShopAdmin_selector";

import { changeBookPlaceManually } from "../../../../../redux/slices/shopAdmin/ShopAdmin_slice";

import API_CREATE_BOOK_PLACE_MANUALLY from "../../../../api/shopAdmin/dialogs/API_CREATE_BOOK_PLACE_MANUALLY";

function CreateTicket(props) {
    let {
        dispatch,
        openDialogCreateTicket,
    } = props;

    const theme = useTheme();

    const isMobile = useMediaQuery(
        theme.breakpoints.down("sm")
    );

    // الخدمات
    let getServices = useSelector(getService_selector);

    let services = getServices?.services || [];

    // بيانات التذكرة
    let bookPlaceManually = useSelector(
        bookPlaceManually_selector
    );
    console.log(bookPlaceManually)
    // تغيير بيانات الحجز
    let handelChangeBookPlace = (field) => (e) => {
        dispatch(
            changeBookPlaceManually({
                [field]: e.target.value,
            })
        );
    };

    // إنشاء التذكرة
    let handleCreateTicket = () => {

        API_CREATE_BOOK_PLACE_MANUALLY(
            dispatch,
            bookPlaceManually?.full_name,
            bookPlaceManually?.phone,
            bookPlaceManually?.service_id
        );

    };

    return (
        <Box
            dir="rtl"
            sx={{
                position: "fixed",
                inset: 0,

                zIndex: 1500,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                p: { xs: 1.5, sm: 3 },

                background:
                    "rgba(15, 23, 42, 0.35)",

                backdropFilter:
                    "blur(8px)",

                WebkitBackdropFilter:
                    "blur(8px)",
            }}
        >

            {/* النافذة نفسها */}
            <Box
                sx={{
                    position: "relative",

                    width: "100%",
                    maxWidth: 560,

                    maxHeight: "90vh",

                    overflowY: "auto",

                    borderRadius: {
                        xs: 3,
                        sm: 4,
                    },

                    background:
                        "linear-gradient(145deg, #ffffff 0%, #f8faff 100%)",

                    border:
                        "1px solid rgba(255,255,255,0.8)",

                    boxShadow:
                        "0 30px 80px rgba(15,23,42,.25)",

                    overflow: "hidden",

                    animation:
                        "createTicketIn .25s ease-out",

                    "@keyframes createTicketIn": {
                        from: {
                            opacity: 0,
                            transform:
                                "translateY(20px) scale(.96)",
                        },

                        to: {
                            opacity: 1,
                            transform:
                                "translateY(0) scale(1)",
                        },
                    },
                }}
            >

                {/* تأثير الخلفية البنفسجي */}
                <Box
                    sx={{
                        position: "absolute",

                        width: 350,
                        height: 350,

                        borderRadius: "50%",

                        bgcolor:
                            "rgba(124,58,237,.15)",

                        filter: "blur(100px)",

                        top: -180,
                        right: -100,

                        pointerEvents: "none",
                    }}
                />

                {/* تأثير أزرق */}
                <Box
                    sx={{
                        position: "absolute",

                        width: 250,
                        height: 250,

                        borderRadius: "50%",

                        bgcolor:
                            "rgba(0,157,255,.10)",

                        filter: "blur(100px)",

                        bottom: -150,
                        left: -100,

                        pointerEvents: "none",
                    }}
                />

                {/* HEADER */}
                <Box
                    sx={{
                        position: "relative",

                        px: {
                            xs: 2,
                            sm: 3,
                        },

                        py: 2.2,

                        display: "flex",

                        alignItems: "center",

                        justifyContent:
                            "space-between",

                        borderBottom:
                            "1px solid rgba(15,23,42,.07)",
                    }}
                >

                    <Box>

                        <Typography
                            sx={{
                                color: "#111827",

                                fontSize: {
                                    xs: 20,
                                    sm: 24,
                                },

                                fontWeight: 900,

                                lineHeight: 1.3,
                            }}
                        >
                            إضافة تذكرة جديدة
                        </Typography>

                        <Typography
                            sx={{
                                mt: 0.5,

                                color: "#64748b",

                                fontSize: 13,

                                fontWeight: 600,
                            }}
                        >
                            إنشاء تذكرة للعميل يدويًا
                        </Typography>

                    </Box>

                    <IconButton
                        onClick={
                            openDialogCreateTicket
                        }
                        sx={{
                            width: 42,
                            height: 42,

                            borderRadius: "14px",

                            bgcolor:
                                "rgba(15,23,42,.05)",

                            color: "#475569",

                            transition: ".2s",

                            "&:hover": {
                                bgcolor:
                                    "rgba(239,68,68,.1)",

                                color: "#ef4444",

                                transform:
                                    "rotate(90deg)",
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                </Box>

                {/* BODY */}
                <Box
                    sx={{
                        position: "relative",

                        px: {
                            xs: 2,
                            sm: 3,
                        },

                        py: 2.5,

                        display: "flex",

                        flexDirection:
                            "column",

                        gap: 2.5,
                    }}
                >

                    {/* بيانات العميل */}
                    <Box>

                        <Typography
                            sx={{
                                color: "#0f172a",

                                fontSize: 16,

                                fontWeight: 900,

                                mb: 1.5,
                            }}
                        >
                            بيانات العميل
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",

                                flexDirection:
                                    "column",

                                gap: 1.7,
                            }}
                        >

                            {/* الاسم */}
                            <Box>

                                <Typography
                                    sx={{
                                        color:
                                            "#009dff",

                                        fontWeight: 800,

                                        fontSize: 14,

                                        mb: 0.7,
                                    }}
                                >
                                    اسم العميل
                                </Typography>

                                <TextField
                                    value={
                                        bookPlaceManually?.full_name ||
                                        ""
                                    }
                                    onChange={handelChangeBookPlace(
                                        "full_name"
                                    )}
                                    sx={fieldStyle}
                                    fullWidth
                                    placeholder="أدخل الاسم الكامل"
                                    error={Boolean(bookPlaceManually?.errors?.full_name)}
                                    helperText={bookPlaceManually?.errors?.full_name?.[0] || ""}

                                />

                            </Box>

                            {/* الهاتف */}
                            <Box>

                                <Typography
                                    sx={{
                                        color:
                                            "#009dff",

                                        fontWeight: 800,

                                        fontSize: 14,

                                        mb: 0.7,
                                    }}
                                >
                                    رقم الهاتف
                                </Typography>

                                <TextField
                                    type="phone"
                                    value={bookPlaceManually?.phone || ""}
                                    onChange={handelChangeBookPlace("phone")}
                                    sx={fieldStyle}
                                    fullWidth
                                    placeholder="أدخل رقم الهاتف"
                                    inputProps={{
                                        maxLength: 10,
                                    }}
                                    error={Boolean(bookPlaceManually?.errors?.phone)}
                                    helperText={bookPlaceManually?.errors?.phone?.[0] || ""}
                                />
                            </Box>

                        </Box>

                    </Box>

                    {/* الخدمة */}
                    <Box>

                        <Typography
                            sx={{
                                color: "#0f172a",

                                fontSize: 16,

                                fontWeight: 900,

                                mb: 1.5,
                            }}
                        >
                            اختيار الخدمة
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",

                                flexWrap: "wrap",

                                gap: 1,
                            }}
                        >

                            {services.map((item) => {

                                const selected =
                                    Number(
                                        bookPlaceManually?.service_id
                                    ) ===
                                    Number(item.id);

                                return (
                                    <Chip
                                        key={item.id}
                                        label={item.name}
                                        clickable

                                        onClick={() =>
                                            dispatch(
                                                changeBookPlaceManually(
                                                    {
                                                        service_id:
                                                            item.id,
                                                    }
                                                )
                                            )
                                        }

                                       sx={{
    minHeight: 40,
    borderRadius: "15px",
    px: { xs: 0.5, sm: 1.5 },
    fontSize: { xs: 12, sm: 14 },
    fontWeight: 800,

    border: "2px solid",

    borderColor: bookPlaceManually?.errors?.service_id
        ? "#ef4444"
        : selected
            ? "#635bff"
            : "#e2e8f0",

    bgcolor: selected
        ? "rgba(99,91,255,.10)"
        : "#fff",

    color: selected
        ? "#5147d9"
        : "#334155",

    boxShadow: selected
        ? "0 6px 18px rgba(99,91,255,.15)"
        : "0 2px 8px rgba(15,23,42,.04)",

    transition: ".2s",

    "&:hover": {
        borderColor: bookPlaceManually?.errors?.service_id
            ? "#dc2626"
            : "#635bff",

        bgcolor: "rgba(99,91,255,.08)",
        transform: "translateY(-2px)",
    },
}}
                                    />
                                );

                            })}

                        </Box>

                        {bookPlaceManually?.errors?.service_id && (
                            <Typography
                                sx={{
                                    color: "#f44336",
                                    fontSize: 12,
                                    mt: 1
                                }}
                            >
                                {bookPlaceManually?.errors?.service_id[0]}
                            </Typography>
                        )}



                    </Box>

                </Box>

                {/* FOOTER */}
                <Box
                    sx={{
                        position: "relative",

                        px: {
                            xs: 2,
                            sm: 3,
                        },

                        py: 2,

                        display: "flex",

                        // flexDirection: {
                        //     xs: "column",
                        //     sm: "row",
                        // },

                        gap: 1.2,

                        borderTop:
                            "1px solid rgba(15,23,42,.07)",

                        bgcolor:
                            "rgba(248,250,252,.85)",
                    }}
                >

                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleCreateTicket}
                        disabled={bookPlaceManually?.loading === 1}
                        sx={{
                            height: 52,
                            borderRadius: "15px",
                            fontWeight: 900,
                            fontSize: 15,

                            background:
                                "linear-gradient(135deg,#635bff,#7c3aed)",

                            boxShadow:
                                "0 8px 22px rgba(99,91,255,.25)",

                            "&:hover": {
                                background:
                                    "linear-gradient(135deg,#574fe8,#6d28d9)",

                                boxShadow:
                                    "0 12px 28px rgba(99,91,255,.3)",
                            },
                        }}
                    >
                        {bookPlaceManually?.loading === 1 ? (
                            <CircularProgress
                                size={25}
                                thickness={5}
                                sx={{
                                    color: "#fff",
                                }}
                            />
                        ) : (
                            "إصدار التذكرة"
                        )}
                    </Button>

                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={
                            openDialogCreateTicket
                        }
                        sx={{
                            height: 52,

                            borderRadius: "15px",

                            fontWeight: 900,

                            fontSize: 15,

                            borderWidth: 2,

                            color: "#475569",

                            borderColor:
                                "#cbd5e1",

                            "&:hover": {
                                borderWidth: 2,

                                borderColor:
                                    "#94a3b8",

                                bgcolor:
                                    "#f8fafc",
                            },
                        }}
                    >
                        إلغاء
                    </Button>

                </Box>

            </Box>

        </Box>
    );
}

export default CreateTicket;


/* =========================
   TextField Style
========================= */

const fieldStyle = {

    "& .MuiOutlinedInput-root": {

        minHeight: 52,

        borderRadius: "15px",

        backdropFilter:
            "blur(10px)",

        background:
            "rgba(225,241,255,.49)",

        transition: ".2s",

        "& fieldset": {
            borderColor:
                "rgba(148,163,184,.35)",
        },

        "&:hover fieldset": {
            borderColor:
                "rgba(99,91,255,.5)",
        },

        "&.Mui-focused fieldset": {

            borderColor:
                "#635bff",

            borderWidth: 2,

            boxShadow:
                "0 0 15px rgba(99,91,255,.15)",
        },

        "& .MuiOutlinedInput-input": {

            color: "#000",

            WebkitTextFillColor:
                "#020202",

            fontWeight: 600,

        },

    },

};
