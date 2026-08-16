import React from 'react'
import { Box, Skeleton,Paper } from "@mui/material";


function WaitingListSkeleton() {
  return (

      <Box
      dir='rtl'
                sx={{
                    mt: 2,
                    bgcolor: "#f6f6f6",
                    // borderTop: "4px solid #8c00ff",
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: 1,
                }}
            >

                {/* Header */}
                <Box
                    sx={{
                        px: 3,
                        py: 1.5,

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Skeleton
                        variant="text"
                        width={140}
                        height={35}
                    />

                    <Skeleton
                        variant="rounded"
                        width={90}
                        height={28}
                    />
                </Box>

                {/* Cards */}
                <Box
                    sx={{
                        // my: 1,
                        mx: 1,

                        display: "grid",

                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2,1fr)",
                            lg: "repeat(3,1fr)",
                        },

                        gap: 2,
                    }}
                >
                    {[1, 2].map((item) => (
                        <Paper
                            key={item}
                            elevation={0}
                            sx={{
                                p: 2,
                                borderRadius: 4,
                                bgcolor: "#fff",
                                borderRight: "2px solid #ececec",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                }}
                            >

                                {/* معلومات الزبون */}
                                <Box
                                    sx={{
                                        flex: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                        }}
                                    >
                                        <Skeleton
                                            variant="circular"
                                            width={38}
                                            height={38}
                                        />

                                        <Box sx={{ flex: 1 }}>
                                            <Skeleton
                                                variant="text"
                                                width="60%"
                                                height={24}
                                            />

                                            <Skeleton
                                                variant="text"
                                                width="40%"
                                                height={18}
                                            />
                                        </Box>
                                    </Box>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 3,
                                            mt: 2,
                                        }}
                                    >
                                        <Box>
                                            <Skeleton
                                                variant="text"
                                                width={60}
                                                height={18}
                                            />

                                            <Skeleton
                                                variant="text"
                                                width={70}
                                                height={22}
                                            />
                                        </Box>

                                        <Box>
                                            <Skeleton
                                                variant="text"
                                                width={50}
                                                height={18}
                                            />

                                            <Skeleton
                                                variant="rounded"
                                                width={70}
                                                height={24}
                                            />
                                        </Box>
                                    </Box>
                                </Box>

                                {/* رقم التذكرة */}
                                <Box
                                    sx={{
                                        minWidth: 90,
                                        textAlign: "center",
                                    }}
                                >
                                    <Skeleton
                                        variant="text"
                                        width={70}
                                        height={60}
                                    />

                                    <Skeleton
                                        variant="text"
                                        width={60}
                                        height={18}
                                        sx={{ mx: "auto" }}
                                    />
                                </Box>

                            </Box>
                        </Paper>
                    ))}
                </Box>

                {/* Pagination */}

            </Box>

  )
}

export default WaitingListSkeleton
