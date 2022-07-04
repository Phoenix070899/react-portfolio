import React from "react";
import ContactUs from "./Email/ContactUs";
import Information from "./Information/Information";

function Footer() {
  return (
    <div className="footer flex flex-col gap-3 py-10">
      <div className="footer-header">
        <div className="flex items-center gap-2">
          <span className="w-10 h-1 bg-dark-blue"></span>
          <h3 className="text-dark-blue font-bold">LET'S GET IN TOUCH</h3>
        </div>
      </div>
      <div className="footer-content grid grid-cols-1 md:grid-cols-2">
        <Information />
        <ContactUs />
      </div>
    </div>
  );
}

export default Footer;
