import React from "react";
import { VuesaxBulkLocationMinus1 } from "../icons/VuesaxBulkLocationMinus1";
import { VuesaxBulkCall1 } from "../icons/VuesaxBulkCall1";
import { VuesaxBulkSms1 } from "../icons/VuesaxBulkSms1";
import contactImg from "../images/contact.png";

function ContactSection() {
  return (
    <article className="div-14" id="Contact">
      <div className="div-15">
        <div className="text-wrapper-3">Contact</div>
        <p className="text-wrapper-18">
          Schedule a call with us and see if we can hold your back!
        </p>
      </div>
      <div className="div-18">
        <img src={contactImg} className="contactImg" alt="contact img" />
        <div className="div-19">
          <div className="div-20">
            <div className="div-21">
              <VuesaxBulkSms1 className="icon-instance-node" />
              <div className="div-wrapper-3">
                <a
                  href="mailto:Info@b2bcapital.partners"
                  className="text-wrapper-19"
                >
                  Info@b2bcapital.partners
                </a>
              </div>
            </div>
            <div className="div-21">
              <VuesaxBulkCall1 className="icon-instance-node" />
              <div className="div-wrapper-3">
                <a href="tel:+41345520088" className="text-wrapper-19">
                  +41 34 552 00 88
                </a>
              </div>
            </div>
          </div>
          <div className="div-21">
            <VuesaxBulkLocationMinus1 className="icon-instance-node" />
            <div className="div-wrapper-3">
              <p className="text-wrapper-19">
                B2B Capital Partners GmbH, <br /> Pulverstrasse 8, 3063 Gümligen
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ContactSection;
