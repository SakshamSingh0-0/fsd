import React, { useEffect, useState } from "react";

const images = [
    "https://picsum.photos/id/1018/1200/600",
    "https://picsum.photos/id/1025/1200/600",
    "https://picsum.photos/id/1037/1200/600",
    "https://picsum.photos/id/1043/1200/600"
];

export default function ImageSlider() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, 1000); // 1 second
        return () => clearInterval(timer);
    }, [paused]);

    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
    const next = () => setIndex((i) => (i + 1) % images.length);

    const containerStyle = {
        maxWidth: 800,
        width: "100%",
        height: 400,
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
    };

    const slideStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "opacity 400ms ease",
    };

    const buttonStyle = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        background: "rgba(0,0,0,0.5)",
        color: "#fff",
        border: "none",
        padding: "8px 12px",
        cursor: "pointer",
        borderRadius: 4
    };

    const dotsStyle = {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: 12,
        display: "flex",
        gap: 8
    };

    return (
        <div
            style={containerStyle}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {images.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt={`slide-${i}`}
                    style={{ ...slideStyle, opacity: i === index ? 1 : 0, pointerEvents: i === index ? "auto" : "none" }}
                />
            ))}

            <button
                onClick={prev}
                style={{ ...buttonStyle, left: 12 }}
                aria-label="Previous"
            >
                ◀
            </button>
            <button
                onClick={next}
                style={{ ...buttonStyle, right: 12 }}
                aria-label="Next"
            >
                ▶
            </button>

            <div style={dotsStyle}>
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            border: "none",
                            background: i === index ? "#fff" : "rgba(255,255,255,0.5)",
                            cursor: "pointer",
                            padding: 0
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
