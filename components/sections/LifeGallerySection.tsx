"use client";

import React, { useEffect } from "react";
import { galleryImages } from "../../gallery_data.js";

export default function LifeGallerySection() {

  return (
    <>
<section className="life-gallery-section" id="life-gallery-trigger" aria-label="Life at Ayurgreen Gallery">
            <div className="life-gallery-header">
                <h2 className="life-gallery-title premium-title">Life at Ayurgreen</h2>
            </div>
            <div className="gallery-wrapper">
                {/*  Top Row: Moves Left  */}
                <div className="gallery-row-container top-row-container">
                    <div className="gallery-row" id="gallery-row-top">
                        {/*  Dynamically loaded WebP images  */}
                    </div>
                </div>

                {/*  Bottom Row: Moves Right  */}
                <div className="gallery-row-container bottom-row-container">
                    <div className="gallery-row" id="gallery-row-bottom">
                        {/*  Dynamically loaded WebP images  */}
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
