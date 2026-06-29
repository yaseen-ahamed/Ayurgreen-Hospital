"use client";

import React, { useEffect } from "react";
import { galleryImages } from "../../gallery_data.js";

export default function UnderstandingSection() {

  return (
    <>
<section id="understanding-pin-trigger" aria-label="Understanding Ayurgreen">
            <div className="understanding-pin-content">
                {/*  Title Reveal  */}
                <h2 className="understanding-title premium-title">Understanding Ayurgreen</h2>

                {/*  Storytelling Layout  */}
                <div className="storytelling-layout">
                    {/*  Left/Center: Video Container  */}
                    <div className="storytelling-video-box">
                        <div className="ayurgreen-video-container"
                            style={{ "position": "relative", "width": "100%", "height": "100%", "borderRadius": "24px", "overflow": "hidden", "display": "block", "aspectRatio": "16/9", "cursor": "pointer" }}>

                            <style dangerouslySetInnerHTML={{ __html: `
                                .ayurgreen-video-container:hover .custom-player-controls {
                                    opacity: 1 !important;
                                    transform: translateY(0) scale(1) !important;
                                    filter: blur(0px) !important;
                                    pointer-events: auto !important;
                                }

                                .ayurgreen-video-container:hover #video-progress-handle {
                                    opacity: 1 !important;
                                }
                            ` }} />

                            <video id="ayurgreen-promo-video" src="/Assets/Ayurgreen_Hospitals.webm" autoPlay loop
                                muted playsInline
                                style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block" }}
                                title="Ayurgreen Hospital Promotional Video"
                                aria-label="Ayurgreen Hospital Promotional Video"></video>

                            {/*  Modern Blur Controls Container  */}
                            <div className="custom-player-controls"
                                style={{ "position": "absolute", "bottom": "0", "left": "0", "right": "0", "margin": "16px auto", "width": "calc(100% - 32px)", "maxWidth": "500px", "zIndex": "20", "background": "rgba(17, 17, 17, 0.6)", "backdropFilter": "blur(12px)", "WebkitBackdropFilter": "blur(12px)", "borderRadius": "16px", "padding": "12px 16px", "border": "1px solid rgba(255, 255, 255, 0.1)", "opacity": "0", "transform": "translateY(10px) scale(0.98)", "filter": "blur(5px)", "transition": "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)", "pointerEvents": "none", "boxShadow": "0 10px 30px rgba(0, 0, 0, 0.3)" }}>

                                {/*  Timeline Slider Row  */}
                                <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "8px" }}>
                                    <span id="video-current-time"
                                        style={{ "color": "#fff", "fontSize": "11px", "fontWeight": "500", "fontFamily": "monospace", "minWidth": "32px" }}>0:00</span>
                                    <div id="video-progress-container" role="slider" aria-label="Video Progress Slider"
                                        aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} tabIndex={0}
                                        style={{ "flex": "1", "height": "4px", "background": "rgba(255, 255, 255, 0.2)", "borderRadius": "999px", "position": "relative", "cursor": "pointer", "display": "flex", "alignItems": "center" }}>
                                        <div id="video-progress-bar"
                                            style={{ "height": "100%", "background": "#fff", "borderRadius": "999px", "width": "0%" }}>
                                        </div>
                                        <div id="video-progress-handle"
                                            style={{ "width": "8px", "height": "8px", "borderRadius": "50%", "background": "#fff", "position": "absolute", "left": "0%", "transform": "translateX(-50%)", "opacity": "0", "transition": "opacity 0.2s" }}>
                                        </div>
                                    </div>
                                    <span id="video-duration"
                                        style={{ "color": "#fff", "fontSize": "11px", "fontWeight": "500", "fontFamily": "monospace", "minWidth": "32px", "textAlign": "right" }}>0:00</span>
                                </div>

                                {/*  Action Buttons Row  */}
                                <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between" }}>
                                    <div style={{ "display": "flex", "alignItems": "center", "gap": "16px" }}>
                                        {/*  Play/Pause Button  */}
                                        <button id="video-play-btn" aria-label="Play Video"
                                            style={{ "background": "none", "border": "none", "cursor": "pointer", "color": "#fff", "padding": "0", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "32px", "height": "32px", "borderRadius": "8px", "transition": "background 0.2s" }}
                                            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                                            onMouseOut={(e) => { e.currentTarget.style.background = 'none'; }}>
                                            <i data-lucide="play" size="18" aria-hidden="true"></i>
                                        </button>

                                        {/*  Mute/Volume Controls  */}
                                        <div style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
                                            <button id="video-mute-btn" aria-label="Unmute Video"
                                                style={{ "background": "none", "border": "none", "cursor": "pointer", "color": "#fff", "padding": "0", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "32px", "height": "32px", "borderRadius": "8px", "transition": "background 0.2s" }}
                                                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                                                onMouseOut={(e) => { e.currentTarget.style.background = 'none'; }}>
                                                <i data-lucide="volume-x" size="18" aria-hidden="true"></i>
                                            </button>

                                            {/*  Volume Slider  */}
                                            <div id="video-volume-container" role="slider" aria-label="Volume Slider"
                                                aria-valuemin={0} aria-valuemax={100} aria-valuenow={60} tabIndex={0}
                                                style={{ "width": "80px", "height": "4px", "background": "rgba(255, 255, 255, 0.2)", "borderRadius": "999px", "position": "relative", "cursor": "pointer", "display": "flex", "alignItems": "center" }}>
                                                <div id="video-volume-bar"
                                                    style={{ "height": "100%", "background": "#fff", "borderRadius": "999px", "width": "60%" }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Script removed from JSX and moved to useEffect */}
                        </div>
                    </div>

                    {/*  Right: Text Card Overlay  */}
                    <div className="storytelling-card">
                        <p className="story-para">
                            At Ayurgreen Hospitals, we know that healing is not only physical. When someone goes
                            through illness, injury, or long periods of recovery, it affects emotions, confidence,
                            family, and everyday life. That is why we believe care should feel comforting, personal,
                            and human.
                        </p>
                        <p className="story-para">
                            Ayurgreen was built with the idea that people recover better when they feel understood,
                            supported, and cared for with patience. By bringing together Ayurveda, rehabilitation,
                            modern therapies, and compassionate healthcare professionals, we create an environment
                            where recovery feels less stressful and more hopeful.
                        </p>
                        <p className="story-para">
                            For many families, Ayurgreen becomes more than a hospital. It becomes a place where
                            small improvements are celebrated, strength is rebuilt slowly, and people are encouraged
                            to move forward with confidence and dignity.
                        </p>

                        <div className="story-cta-wrap">
                            <a href="about.html" className="intl-pill-btn"
                                style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.5px", "padding": "4px 4px 4px 16px" }}>
                                MORE ABOUT US <div className="intl-pill-icon"
                                    style={{ "width": "28px", "height": "28px", "marginLeft": "12px" }}><i
                                        data-lucide="arrow-up-right" size="14"></i></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
