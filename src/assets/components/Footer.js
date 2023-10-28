import React from "react";
import logo from "../../assets/images/logo-2.png";

function Footer() {
  return (
    <footer>
      <div className="stats-2">
        <div className="div-22">
          <img className="logo" alt="Logo" src={logo} />
          <div className="div-23">
            <div className="div-24">
              <div className="text-wrapper-22">Office</div>
              <p className="text-wrapper-23">
                B2B Capital Partners GmbH <br />
                Pulverstrasse 8 <br />
                3063 Gümligen
              </p>
            </div>
            <div className="div-24">
              <div className="text-wrapper-22">Contact</div>
              <div className="text-wrapper-23">
                <a href="tel:+41797031539">+41 797 031 539</a>
                <br />

                <a href="mailto:Boss@CapitalPartners.ch">
                  Boss@CapitalPartners.ch
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-24">© Capital Partners</div>
      </div>
    </footer>
  );
}

export default Footer;
