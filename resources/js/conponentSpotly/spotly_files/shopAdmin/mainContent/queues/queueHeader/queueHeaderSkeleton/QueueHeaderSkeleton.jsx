import React from 'react'
import { Box, Skeleton,Paper } from "@mui/material";

function QueueHeaderSkeleton() {
  return (
     <Box
     dir='rtl'
                    sx={{
                        display: "flex",
                        // flexDirection: "column",
                        alignItems: "center",
                        justifyContent:'flex-end',

                        gap: 1,
                    }}
                >
                    <Skeleton
                        variant="rounded"
                        width={150}
                        height={25}
                    />

                    <Skeleton
                        variant="rounded"
                        width={110}
                        height={25}
                    />
                </Box>
  )
}

export default QueueHeaderSkeleton
