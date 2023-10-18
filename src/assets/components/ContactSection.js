import React from "react";
import { VuesaxBulkLocationMinus1 } from "../icons/VuesaxBulkLocationMinus1";
import { VuesaxBulkCall1 } from "../icons/VuesaxBulkCall1";
import { VuesaxBulkSms1 } from "../icons/VuesaxBulkSms1";

function ContactSection() {
  return (
    <article className="div-14">
      <div className="div-15">
        <div className="text-wrapper-3">Contact</div>
        <p className="text-wrapper-18">
          Schedule a call with us to find out if we can help you!
        </p>
      </div>
      <div className="div-18">
        <div className="image-wrapper">
          <img
            className="image"
            alt="Image"
            src="https://c.animaapp.com/n49eTwE7/img/image-26.png"
          />
        </div>
        <div className="div-19">
          <div className="div-20">
            <div className="div-21">
              <VuesaxBulkSms1 className="icon-instance-node" />
              <div className="div-wrapper-3">
                <div className="text-wrapper-19">hello@yourwebsite.com</div>
              </div>
            </div>
            <div className="div-21">
              <VuesaxBulkCall1 className="icon-instance-node" />
              <div className="div-wrapper-3">
                <div className="text-wrapper-20">+44 1234 567 891</div>
              </div>
            </div>
          </div>
          <div className="div-21">
            <VuesaxBulkLocationMinus1 className="icon-instance-node" />
            <div className="div-wrapper-3">
              <p className="text-wrapper-21">
                Next Patron AGErlenstrasse 59CH - 8832 Wollerau
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ContactSection;
