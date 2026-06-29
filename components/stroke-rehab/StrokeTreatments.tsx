import React from "react";

export default function StrokeTreatments() {
  const treatments = [
    {
      num: 1,
      title: "Robotic Neuro Rehabilitation",
      desc: "Advanced exoskeletons and robotic gait trainers allow stroke survivors to perform hundreds of precise, weight-supported steps, accelerating neuroplasticity far beyond traditional physical therapy alone.",
      img: "/Assets/rehab/th_robotic.webp"
    },
    {
      num: 2,
      title: "Ayurvedic Neurological Therapies",
      desc: "Specialized treatments like Shirodhara (oil poured on the forehead), Nasyam (nasal therapy), and Abhyanga (therapeutic massage) to stimulate dormant nerves, improve blood circulation to the brain, and reduce muscle spasticity.",
      img: "/Assets/rehab/th_panchakarma.webp"
    },
    {
      num: 3,
      title: "Advanced Physiotherapy & Occupational Therapy",
      desc: "Targeted exercises to rebuild core strength, balance, and coordination. Occupational Therapy provides focused training to master activities of daily living and regain fine motor skills in hands and fingers.",
      img: "/Assets/rehab/th_physiotherapy.webp"
    },
    {
      num: 4,
      title: "Speech & Swallow Therapy",
      desc: "Expert interventions to treat aphasia (language difficulties) and dysphagia (swallowing disorders), ensuring safe eating and effective communication with loved ones.",
      img: "/Assets/rehab/th_speech.webp"
    }
  ];

  return (
    <section id="treatments" className="ayur-section-large">
      <div className="ayur-container">
        <div className="ayur-section-header">
          <span className="ayur-section-label">THERAPY MODULES</span>
          <h2 className="ayur-section-title">Comprehensive Stroke Treatment Services</h2>
          <p className="ayur-section-support">
            Our multidisciplinary team creates a highly personalized roadmap for your recovery.
          </p>
        </div>
        <div className="ayur-treatments-timeline" style={{ position: "relative" }}>
          {treatments.map((th, idx) => (
            <div key={idx} className="ayur-timeline-item">
              <div className="ayur-timeline-col-img">
                <img src={th.img} alt={th.title} />
              </div>
              <div className="ayur-timeline-col-content">
                <div className="ayur-timeline-badge">{th.num}</div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>
                  {th.title}
                </h3>
                <p style={{ fontSize: "14.5px", lineHeight: 1.6 }}>
                  {th.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
