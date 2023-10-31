import React from "react";
import logo from "../../assets/images/logo-3.png";

function DiscoverSection() {
  return (
    <article id="DISCOVER" className="discover">
      <div className="div-4">
        <div className="text-wrapper-3">Discover</div>
        <img className="logo-2" alt="Logo" src={logo} />
      </div>
      <p className="lorem-ipsum-dolor">
        B2B Capital Partners is a global Corporate Finance advisory firm with
        decades of experience, having closed dozens of multi-billion-dollars in
        deals, providing world-class expertise only. We are more than just
        advisors; we are partners, working back-to-back with our clients,
        constantly creating additional value for our clients. Our clients
        success is our success. At B2B Capital Partners our unstoppable
        commitment is represented in our company principles: "We never lose, and
        our clients always win"
      </p>
    </article>
  );
}

export default DiscoverSection;
