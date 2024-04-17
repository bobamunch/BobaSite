import React from "react";

import pkg from "grommet-icons";

import FetlifeIcon from "../FetlifeIcon/FetlifeIcon";
import { InstagramLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

function Footer() {
  return (
    <footer>
      <div className="footer__icons">
        <InstagramLogoIcon
          height={26}
          width={26}
          href="https://www.instagram.com/bobamunch/"
          className="footer__icon"
        />
        <FetlifeIcon
          height={26}
          width={26}
          fill={"#E5A363"}
          href="https://fetlife.com/users/14009315"
          className="footer__icon"
        />
        <EnvelopeClosedIcon
          height={26}
          width={26}
          href="bobamunch@gmail.com"
          className="footer__icon"
        />
      </div>
      <small className="">
        Copyright ©{new Date().getFullYear()} BOBA Munch
      </small>
    </footer>
  );
}
export default Footer;
