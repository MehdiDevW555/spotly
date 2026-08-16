import { Box, Typography } from '@mui/material'
import React from 'react'
import QueueHeaderSkeleton from './queueHeaderSkeleton/QueueHeaderSkeleton'

function QueueHeader(props) {
    let { getCurrentTicket, getAllTicket } = props
    let CurrentTicket = getCurrentTicket?.CurrentTicket
    let loadingCurrentTicket = getCurrentTicket?.loading
    let tickets = getAllTicket?.tickets
    let ticketsLoading = getAllTicket?.loading
    return (
        <Box  >


            {loadingCurrentTicket === 1 && !CurrentTicket ?
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                    <QueueHeaderSkeleton />
                </Box>


                :


                <Box
                    sx={{
                        width: '100%',
                        // mt:5,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                        pb: { xs: 0, sm: 0 },
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                        scrollbarWidth: "none",
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: '#f3feeb91',
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            px: 1,
                            borderLeft: '2px solid #30b720',
                            borderRight: '2px solid #30b720',
                            borderRadius: 3,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: 1,
                                color: "text.secondary",
                            }}
                        >
                            في الانتظار:
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 16,
                                fontWeight: 900,
                                color: "primary.main",
                            }}
                        >
                            {tickets?.length || 0}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: "2px",
                            height: 22,
                            bgcolor: "#b0b0b0",
                        }}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            bgcolor: '#F2EBFD',
                            // py: 0.5,
                            px: 1,
                            borderRight: '2px solid #aa00ff',
                            borderLeft: '2px solid #aa00ff',
                            borderRadius: 3,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: 1,
                                color: "text.secondary",
                            }}
                        >
                            متوسط الانتظار:
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 16,
                                fontWeight: 700,
                                color: "#aa00ff",
                            }}
                        >
                            12 دقيقة
                        </Typography>
                    </Box>




                </Box>
            }
        </Box>
    )
}

export default QueueHeader
