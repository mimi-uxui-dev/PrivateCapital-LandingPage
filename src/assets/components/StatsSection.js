import React from "react";

function StatsSection() {
  return (
    <article className="stats">
      <p className="CHF-billion-in">
        <span className="span">CHF 13 Billion</span>
        <span className="text-wrapper-4"> in Closed Deals Since 2020</span>
      </p>
      <div className="div-5">
        <div className="div-6">
          <p className="div-7">
            <span className="span">15</span>
            <span className="text-wrapper-4"> Years</span>
          </p>
          <div className="text-wrapper-5">In Business</div>
        </div>
        <div className="div-6">
          <p className="div-7">
            <span className="text-wrapper-4">CHF </span>
            <span className="span">20B</span>
          </p>
          <div className="text-wrapper-5">In Wealth Created</div>
        </div>
        <div className="div-6">
          <div className="text-wrapper-6">500+</div>
          <div className="text-wrapper-5">Closed Transactions</div>
        </div>
      </div>
    </article>
  );
}

export default StatsSection;
