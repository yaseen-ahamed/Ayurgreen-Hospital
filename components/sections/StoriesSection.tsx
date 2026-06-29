"use client";

import React, { useEffect } from "react";
import { galleryImages } from "../../gallery_data.js";

export default function StoriesSection() {

  return (
    <>
<section className="stories-relearning-section" id="stories-relearning" aria-label="Stories of Relearning">
            <div className="stories-container">
                {/*  GSAP Scroll-linked Expanding Background  */}
                <div className="stories-bg-shape"></div>
                <div className="stories-content-wrap">
                    <div className="stories-header">
                        <h2 className="stories-title premium-title text-white">Stories of Relearning</h2>
                        <img src="/Assets/Rehab_Process_Transparent.webp"
                            alt="Integrated rehabilitation recovery process steps at Ayurgreen Hospital"
                            className="stories-header-img" width="1408" height="156" loading="lazy" />
                    </div>

                    <div className="stories-gallery">
                        <div className="story-photo photo-1">
                            <img src="/Assets/Patients/IMG_0265.webp"
                                alt="Patient during neurological rehabilitation therapy at Ayurgreen Hospital"
                                width="2976" height="1984" loading="lazy" />
                        </div>
                        <div className="story-photo photo-2">
                            <img src="/Assets/Patients/IMG_0279.webp"
                                alt="Stroke patient rebuilding motor skills with physiotherapist" width="2976"
                                height="1984" loading="lazy" />
                        </div>
                        <div className="story-photo photo-3">
                            <img src="/Assets/Patients/IMG_0463.webp"
                                alt="Patient undergoing advanced gait training rehabilitation" width="2976"
                                height="1984" loading="lazy" />
                        </div>
                        <div className="story-photo photo-4">
                            <img src="/Assets/Patients/IMG_4304.webp"
                                alt="Robotic-assisted walking recovery session for spinal cord injury" width="2976"
                                height="1984" loading="lazy" style={{ "transform": "rotate(-90deg) scale(1.3)" }} />
                        </div>
                        <div className="story-photo photo-5">
                            <img src="/Assets/Patients/IMG_9205.webp"
                                alt="Patient performing cognitive and physical exercises" width="2976" height="1984"
                                loading="lazy" />
                        </div>
                        <div className="story-photo photo-6">
                            <img src="/Assets/Patients/IMG_9229.webp"
                                alt="Occupational therapy session for restoring hand mobility" width="2976"
                                height="1984" loading="lazy" />
                        </div>
                        <div className="story-photo photo-7">
                            <img src="/Assets/Patients/IMG_9291.webp"
                                alt="Patient practicing balance and coordination exercises" width="2976" height="1984"
                                loading="lazy" />
                        </div>
                        <div className="story-photo photo-8">
                            <img src="/Assets/Patients/IMG_9302.webp"
                                alt="Patient celebration of recovery milestones with clinical team" width="2976"
                                height="1984" loading="lazy" />
                        </div>
                    </div>

                    {/*  Video Stories Slider  */}
                    <div className="stories-videos-wrap">

                        <div className="rehab-slider-clip" id="clip-videos">
                            <div className="stories-videos-scroll" id="scroll-videos">
                            </div>
                        </div>

                        {/*  Slide nav  */}
                        <div className="rehab-slider-nav" style={{ "marginTop": "20px", "justifyContent": "center" }}>
                            <button className="rehab-slider-btn" onClick={() => (window as any).slideVideos?.(-1)} id="btn-prev-videos"
                                aria-label="Previous patient video story"><i data-lucide="chevron-left" size="20"
                                    aria-hidden="true"></i></button>
                            <button className="rehab-slider-btn" onClick={() => (window as any).slideVideos?.(1)} id="btn-next-videos"
                                aria-label="Next patient video story"><i data-lucide="chevron-right" size="20"
                                    aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>{/*  End stories-content-wrap  */}

            </div>
        </section>
    </>
  );
}
