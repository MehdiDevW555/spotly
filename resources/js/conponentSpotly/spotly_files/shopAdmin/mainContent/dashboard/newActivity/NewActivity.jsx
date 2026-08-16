import React from 'react'
import UpgradeRoundedIcon from "@mui/icons-material/UpgradeRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import {
    Box,
    Button,
    Chip,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
function NewActivity() {

 const activities = [
        {
            id: "#T-842",
            client: "أحمد القحطاني",
            service: "استشارة تقنية",
            status: "مكتمل",
            color: "#16A34A",
            bg: "#DCFCE7",
            time: "10:45 ص",
        },
        {
            id: "#T-843",
            client: "سارة منصور",
            service: "طلب صيانة",
            status: "جارٍ التنفيذ",
            color: "#2563EB",
            bg: "#DBEAFE",
            time: "11:02 ص",
        },
        {
            id: "#T-844",
            client: "خالد العتيبي",
            service: "تحديث بيانات",
            status: "انتظار",
            color: "#D97706",
            bg: "#FEF3C7",
            time: "11:15 ص",
        },
        {
            id: "#T-845",
            client: "ليلى الحربي",
            service: "خدمة الدفع",
            status: "انتظار",
            color: "#D97706",
            bg: "#FEF3C7",
            time: "11:20 ص",
        },
    ];

  return (
      <Paper
                elevation={0}
                sx={{
                    bgcolor:'#fff',
                    border: "1px solid #E5E7EB",
                    borderRadius: 4,
                    overflow: "hidden",
                    order: {
                        xs: 1,
                        lg: 2,
                    },
                }}
            >
                <Box
                    sx={{
                        p: 3,
                        borderBottom: "1px solid #E5E7EB",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        fontWeight={700}
                    >
                        أحدث العمليات
                    </Typography>

                    <Button size="small">
                        عرض الكل
                    </Button>
                </Box>

                {/* Desktop */}

                <Box
                    sx={{
                        display: {
                            xs: "none",
                            md: "block",
                        },
                    }}
                >
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>الرقم</TableCell>
                                    <TableCell>العميل</TableCell>
                                    <TableCell>الخدمة</TableCell>
                                    <TableCell>الحالة</TableCell>
                                    <TableCell align="left">
                                        التوقيت
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {activities.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell
                                            sx={{
                                                color: "primary.main",
                                                fontWeight: 700,
                                            }}
                                        >
                                            {item.id}
                                        </TableCell>

                                        <TableCell>
                                            {item.client}
                                        </TableCell>

                                        <TableCell
                                            sx={{
                                                color: "text.secondary",
                                            }}
                                        >
                                            {item.service}
                                        </TableCell>

                                        <TableCell>
                                            <Box
                                                sx={{
                                                    display: "inline-flex",
                                                    px: 1.5,
                                                    py: 0.5,
                                                    borderRadius: 999,
                                                    bgcolor: item.bg,
                                                    color: item.color,
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                {item.status}
                                            </Box>
                                        </TableCell>

                                        <TableCell
                                            align="left"
                                            sx={{
                                                color: "text.secondary",
                                            }}
                                        >
                                            {item.time}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                {/* Mobile */}

                <Box
                    sx={{
                        display: {
                            xs: "block",
                            md: "none",
                        },
                    }}
                >
                    {activities.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                p: 2,
                                borderBottom:
                                    "1px solid #E5E7EB",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent:
                                        "space-between",
                                    mb: 1,
                                }}
                            >
                                <Typography
                                    color="primary"
                                    fontWeight={700}
                                >
                                    {item.id}
                                </Typography>

                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                >
                                    {item.time}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent:
                                        "space-between",
                                    alignItems: "flex-end",
                                }}
                            >
                                <Box>
                                    <Typography
                                        fontWeight={700}
                                    >
                                        {item.client}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {item.service}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        px: 1.5,
                                        py: 0.5,
                                        borderRadius: 999,
                                        bgcolor: item.bg,
                                        color: item.color,
                                        fontSize: 11,
                                        fontWeight: 700,
                                    }}
                                >
                                    {item.status}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Paper>
  )
}

export default NewActivity
