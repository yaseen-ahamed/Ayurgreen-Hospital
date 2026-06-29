import React from "react";

export default function StrokeConditions() {
  const conditions = [
    {
      title: "Ischemic Stroke",
      desc: "Caused by blood clots blocking arteries in the brain. Our program addresses paralysis, speech, and cognitive recovery comprehensively.",
      img: "/Assets/rehab/prog_stroke.webp"
    },
    {
      title: "Hemorrhagic Stroke",
      desc: "Caused by bleeding within or around the brain. Careful, progressive therapy to maximize function while protecting healing tissue.",
      img: "/Assets/rehab/prog_spinal_cord.webp"
    },
    {
      title: "Hemiplegia & TIA Recovery",
      desc: "For one-sided paralysis and mini-strokes, our robotic gait trainers and Ayurvedic nerve therapies restore movement and prevent recurrence.",
      img: "/Assets/rehab/prog_parkinsons.webp"
    }
  ];

  return (
    <section 
      id="conditions" 
      className="ayur-section-medium" 
      style={{ backgroundColor: "#FBFDFB", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="ayur-container">
        <div className="ayur-section-header">
          <span className="ayur-section-label">WHO WE HELP</span>
          <h2 className="ayur-section-title">Types of Stroke We Rehabilitate</h2>
          <p className="ayur-section-support">
            Our Stroke Rehabilitation Program is tailored to support patients at various stages and types of stroke recovery.
          </p>
        </div>
        <div className="ayur-conditions-grid">
          {conditions.map((cond, idx) => (
            <div key={idx} className="ayur-condition-card">
              <div className="ayur-condition-card-img-wrapper">
                <img 
                  src={cond.img} 
                  alt={cond.title} 
                  className="ayur-condition-card-img" 
                />
              </div>
              <div className="ayur-condition-card-content">
                <h4 className="ayur-condition-card-title">{cond.title}</h4>
                <p className="ayur-condition-card-desc">{cond.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
