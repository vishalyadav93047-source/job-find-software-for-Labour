import React from "react";
import "./Features.css";

const features = [
  {
    icon: "💼",
    title: "Wide Job Opportunities",
    text: (
      <>
        Explore jobs across
        <br />
        multiple industries
      </>
    ),
    className: "blue",
  },
  {
    icon: "👥",
    title: "Verified Employers",
    text: (
      <>
        Work with trusted
        <br />
        and genuine employers
      </>
    ),
    className: "green",
  },
  {
    icon: "🛡️",
    title: "Safe & Secure",
    text: (
      <>
        Your safety and security
        <br />
        is our priority
      </>
    ),
    className: "orange",
  },
  {
    icon: "📍",
    title: "Pan India Reach",
    text: (
      <>
        Find opportunities
        <br />
        in your city or across India
      </>
    ),
    className: "purple",
  },
];

function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <React.Fragment key={feature.title}>
            <div className="feature-card">
              <div className={`feature-icon ${feature.className}`}>
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </div>

            {index !== features.length - 1 && (
              <div className="feature-divider"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Decorative shapes */}
      <div className="shape shape-left"></div>
      <div className="shape shape-right"></div>
    </section>
  );
}

export default Features;