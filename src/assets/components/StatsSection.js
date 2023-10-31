import React from "react";

function StatsSection() {
  return (
    <article className="stats">
      <p className="CHF-billion-in">
        <span className="span">CHF 40+ Billion</span>
        <span className="text-wrapper-4"> in Closed Deals Since 2001</span>
      </p>
      <div className="div-5">
        <div className="div-6">
          <p className="div-7">
            <span className="span">45+</span>
            <span className="text-wrapper-4"> Years</span>
          </p>
          <div className="text-wrapper-5">Of Experience</div>
        </div>
        <div className="div-6">
          <p className="div-7">
            <span className="text-wrapper-4">CHF </span>
            <span className="span">40B+</span>
          </p>
          <div className="text-wrapper-5">In Deals Closeds</div>
        </div>
        <div className="div-6">
          <div className="text-wrapper-6">100+</div>
          <div className="text-wrapper-5">Closed Transactions</div>
        </div>
      </div>
    </article>
  );
}

export default StatsSection;
