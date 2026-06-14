"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Star, ShieldCheck, Medal, ArrowUpRight } from "lucide-react";

/* ─── Types ─────────────────────────────────────────── */
interface BadgeData {
    title?: string;
    label: string;
    bg: string;
    color: string;
    icon?: React.ReactNode;
    img?: string;
    width?: number;
    height?: number;
    imgStyle?: React.CSSProperties;
    borderStyle?: string;
    rotation: number;          // actual degrees
    alignSelf: "flex-start" | "flex-end" | "center";
}

/* ─── Data ───────────────────────────────────────────── */
const LEFT_BADGES: BadgeData[] = [
    {
        label: "NABH Accreditation",
        bg: "linear-gradient(135deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%), #fbbf24",
        color: "#000",
        img: "Assets/Logo/nabh-seeklogo.webp",
        width: 2000,
        height: 2000,
        rotation: -6,
        alignSelf: "flex-start",
    },
    {
        label: "Ayur Diamond Classification",
        bg: "linear-gradient(135deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%), #93c5fd",
        color: "#0f172a",
        img: "Assets/Logo/ayur-diamond.webp",
        width: 200,
        height: 198,
        rotation: 4,
        alignSelf: "flex-end",
    },
    {
        label: "AHMA Hospital Award (2024)",
        bg: "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #7756b5",
        color: "#fff",
        img: "Assets/Logo/Ahma-Logo.webp",
        width: 600,
        height: 600,
        rotation: -3,
        alignSelf: "flex-start",
    },
    {
        label: "Best Ayurvedic Hospital Award",
        bg: "linear-gradient(135deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%), #c0f249",
        color: "#000",
        icon: <Star size={28} />,
        rotation: 5,
        alignSelf: "flex-end",
    },
    {
        title: "50+",
        label: "Nations Served",
        bg: "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #8b0042",
        color: "#fff",
        rotation: -4,
        alignSelf: "flex-start",
    },
];

const RIGHT_BADGES: BadgeData[] = [
    {
        title: "25+",
        label: "Years of Legacy",
        bg: "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #f97316",
        color: "#fff",
        rotation: 4,
        alignSelf: "flex-end",
    },
    {
        title: "50K+",
        label: "Patients Recovered",
        bg: "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #00c08b",
        color: "#fff",
        rotation: -3,
        alignSelf: "flex-start",
    },
    {
        label: "Excellence in Integrative Stroke Rehab (2026)",
        bg: "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #db2777",
        color: "#fff",
        img: "Assets/Logo/VOH Logo.webp",
        width: 320,
        height: 130,
        imgStyle: { maxHeight: 36 },
        rotation: 3,
        alignSelf: "flex-end",
    },
    {
        label: "COSIDICI Award for Outstanding Entrepreneur (2023)",
        bg: "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #0891b2",
        color: "#fff",
        icon: <Medal size={28} />,
        rotation: -4,
        alignSelf: "flex-start",
    },
    {
        label: "Ayush Certified",
        bg: "#fff",
        color: "#000",
        img: "Assets/Logo/ayush-logo.webp",
        width: 335,
        height: 151,
        borderStyle: "1px solid #e5e7eb",
        rotation: 3,
        alignSelf: "flex-end",
    },
];

/* ─── Single Badge Card ──────────────────────────────── */
function BadgeCard({
    badge,
    fromLeft,
    delay,
}: {
    badge: BadgeData;
    fromLeft: boolean;
    delay: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: fromLeft ? -60 : 60, rotate: badge.rotation * 1.5 }}
            whileInView={{ opacity: 1, x: 0, rotate: badge.rotation }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.65,
                delay,
                type: "spring",
                stiffness: 70,
                damping: 14,
            }}
            whileHover={{
                scale: 1.07,
                rotate: 0,
                y: -8,
                zIndex: 30,
                boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="nations-badge-card"
            style={{
                alignSelf: badge.alignSelf,
                background: badge.bg,
                color: badge.color,
                border: badge.borderStyle ?? "none",
                transform: `rotate(${badge.rotation}deg)`,
            }}
        >
            {badge.icon && (
                <div style={{ marginBottom: 8, opacity: 0.95 }}>{badge.icon}</div>
            )}
            {badge.img && (
                <img
                    src={badge.img}
                    alt={badge.label}
                    width={badge.width}
                    height={badge.height}
                    loading="lazy"
                    style={{
                        maxHeight: 48,
                        width: "auto",
                        objectFit: "contain",
                        marginBottom: 8,
                        ...badge.imgStyle,
                    }}
                />
            )}
            {badge.title && (
                <div
                    style={{
                        fontSize: 28,
                        fontWeight: 800,
                        lineHeight: 1.1,
                        fontFamily: "var(--font-heading)",
                        marginBottom: 4,
                    }}
                >
                    {badge.title}
                </div>
            )}
            <div
                style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.6px",
                    lineHeight: 1.4,
                }}
            >
                {badge.label}
            </div>
        </motion.div>
    );
}

/* ─── Main Section ───────────────────────────────────── */
export default function DifferentNationsSection() {
    return (
        <section
            id="international-patients"
            aria-label="International Patients and Legacy"
            className="nations-section"
        >
            <div className="nations-container">
                {/* ── Heading ── */}
                <motion.h2
                    initial={{ opacity: 0, y: -24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="premium-title"
                    style={{
                        textAlign: "center",
                        marginBottom: 64,
                    }}
                >
                    Different Nations, One Destination
                </motion.h2>

                {/* ── 3-column layout ── */}
                <div className="nations-grid">
                    {/* LEFT column */}
                    <div className="nations-col">
                        {LEFT_BADGES.map((badge, i) => (
                            <BadgeCard
                                key={i}
                                badge={badge}
                                fromLeft={true}
                                delay={i * 0.1}
                            />
                        ))}
                    </div>

                    {/* CENTER */}
                    <div className="nations-centerpiece">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src="Assets/Logo/international_patients_transparent.webp"
                                alt="International Patients"
                                width={1856}
                                height={1376}
                                loading="lazy"
                                style={{
                                    width: "100%",
                                    maxWidth: 380,
                                    height: "auto",
                                    filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.14))",
                                    display: "block",
                                }}
                            />

                            {/* CTA Button - Lowered and aligned properly below centerpiece */}
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    marginTop: 32,
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 14,
                                    background: "#ffffff",
                                    color: "#0f172a",
                                    border: "1.5px solid #e5e7eb",
                                    borderRadius: 999,
                                    padding: "14px 22px 14px 28px",
                                    fontFamily: "var(--font-heading)",
                                    fontSize: 13,
                                    fontWeight: 700,
                                    letterSpacing: "1px",
                                    textDecoration: "none",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                    cursor: "pointer",
                                    position: "relative",
                                    zIndex: 20,
                                }}
                            >
                                INTERNATIONAL PATIENTS
                                <span
                                    style={{
                                        width: 34,
                                        height: 34,
                                        background: "#0f172a",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#fff",
                                        flexShrink: 0,
                                    }}
                                >
                                    <ArrowUpRight size={16} />
                                </span>
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* RIGHT column */}
                    <div className="nations-col">
                        {RIGHT_BADGES.map((badge, i) => (
                            <BadgeCard
                                key={i}
                                badge={badge}
                                fromLeft={false}
                                delay={i * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
