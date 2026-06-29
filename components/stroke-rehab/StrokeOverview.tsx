import React from "react";

export default function StrokeOverview() {
  return (
    <section id="intro" className="ayur-section-large">
      <div className="ayur-container">
        <div className="ayur-intro-row">
          <div>
            <span className="ayur-section-label">OVERVIEW</span>
            <h2 className="ayur-section-title" style={{ marginBottom: "24px", fontSize: "28px" }}>
              Advanced Stroke Rehabilitation: Reclaim Your Independence
            </h2>
            <p style={{ marginBottom: "16px" }}>
              A stroke is a sudden, life-altering medical emergency that disrupts the blood supply to the brain, causing neurological deficits such as paralysis, speech difficulties, and cognitive challenges. At Ayurgreen Hospital, our dedicated Stroke Rehabilitation Program is meticulously designed to help survivors rewire their brains, regain lost skills, and return to an active, independent life.
            </p>
            <p>
              As India's first robotic-integrated neuro rehabilitation center, we combine the pinpoint precision of modern robotic technology with the deep, systemic healing of Ayurveda — training the body's biomechanics using advanced machines while simultaneously nurturing the nervous system with time-tested holistic therapies, resulting in faster and more sustainable recovery outcomes.
            </p>
          </div>
          <div className="ayur-intro-img-frame">
            <img 
              src="/Assets/rehab/prog_stroke.webp" 
              alt="Stroke Rehabilitation Overview" 
              className="ayur-intro-img" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
