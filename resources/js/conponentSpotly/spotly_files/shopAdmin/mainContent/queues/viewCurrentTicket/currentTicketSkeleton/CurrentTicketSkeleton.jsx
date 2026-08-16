import { Box, Skeleton } from "@mui/material";

function CurrentTicketSkeleton() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >

            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Skeleton
                    variant="rounded"
                    width={240}
                    height={34}
                    sx={{ borderRadius: 20 }}
                />

                <Box
                    sx={{
                        display: "flex",
                        gap: 1,
                    }}
                >
                    <Skeleton
                        variant="circular"
                        width={30}
                        height={30}
                    />

                    <Skeleton
                        variant="circular"
                        width={30}
                        height={30}
                    />
                </Box>
            </Box>

            {/* Content */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 3,
                }}
            >

                {/* Ticket Info */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Skeleton
                        variant="rounded"
                        width={120}
                        height={100}
                        sx={{
                            borderRadius: 3,
                        }}
                    />

                    <Box>
                        <Skeleton
                            variant="text"
                            width={180}
                            height={40}
                        />

                        <Skeleton
                            variant="text"
                            width={120}
                            height={25}
                        />
                    </Box>
                </Box>

                {/* Actions */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        flexWrap: "wrap",
                    }}
                >
                    <Skeleton
                        variant="rounded"
                        width={140}
                        height={45}
                        sx={{ borderRadius: 3 }}
                    />

                    <Skeleton
                        variant="rounded"
                        width={50}
                        height={45}
                        sx={{ borderRadius: 3 }}
                    />

                    <Skeleton
                        variant="rounded"
                        width={50}
                        height={45}
                        sx={{ borderRadius: 3 }}
                    />
                </Box>

            </Box>

        </Box>
    );
}

export default CurrentTicketSkeleton;
