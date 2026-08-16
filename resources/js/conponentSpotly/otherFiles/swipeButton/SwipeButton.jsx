import React, { useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

export default function SwipeButton({ handelChangePage }) {
    const containerRef = useRef(null);

    const [position, setPosition] = useState(0);
    const [dragging, setDragging] = useState(false);

    const handleStart = () => {
        setDragging(true);
    };

    const handleMove = (e) => {
        if (!dragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        const clientX =
            e.touches?.[0]?.clientX ?? e.clientX;

        let newPos = rect.right - clientX - 30;

        const max = rect.width - 64;

        if (newPos < 0) newPos = 0;
        if (newPos > max) newPos = max;

        setPosition(newPos);
    };

    const handleEnd = () => {
        if (!containerRef.current) return;

        setDragging(false);

        const max =
            containerRef.current.getBoundingClientRect().width - 64;

        if (position > max * 0.8) {
            handelChangePage?.();
        }

        setPosition(0);
    };

    return (
        <Box
            ref={containerRef}
            sx={{
                position: "relative",
                width: 270,
                height: 64,
                // py:2,
                // px:10,
                borderRadius: "50px",
                overflow: "hidden",
                userSelect: "none",
                border: '1.5px solid #fff',
                background: '#8e33efa8',
                boxShadow:
                    "0 10px 30px rgba(116,61,177,.35)",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.5,
                    pointerEvents: "none",
                }}
            >
                <KeyboardDoubleArrowLeftIcon sx={{ color: "rgba(255,255,255,.20)" }} />
                <KeyboardDoubleArrowLeftIcon sx={{ color: "rgba(255,255,255,.30)" }} />
                <KeyboardDoubleArrowLeftIcon sx={{ color: "rgba(255,255,255,.40)" }} />
                <KeyboardDoubleArrowLeftIcon sx={{ color: "rgba(255,255,255,.50)" }} />
            </Box>

            <Box
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
                sx={{
                    position: "absolute",
                    top: 4,
                    right: position,

                    width: 56,
                    height: 56,

                    borderRadius: "50%",
                    bgcolor: "#fff",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    cursor: "grab",

                    boxShadow:
                        "0 4px 15px rgba(0,0,0,.15)",

                    transition: dragging
                        ? "none"
                        : "right .25s ease",
                }}
            >
                <KeyboardDoubleArrowLeftIcon
                    sx={{
                        color: "#743DB1",
                        fontSize: 30,
                    }}
                />
            </Box>
        </Box>
    );
}
