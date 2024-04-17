import React from "react";

import pkg from "grommet-icons";

import FetlifeIcon from "../Icons/FetlifeIcon";
import { InstagramLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";

function Footer() {
  return (
    <footer>
      <div className="footer__icons">
        <Link to="https://www.instagram.com/bobamunch/">
          <InstagramLogoIcon
            height={26}
            width={26}
            className="footer__icon"
            href="https://www.instagram.com/bobamunch/"
          />
        </Link>

        <Link to="https://fetlife.com/users/14009315">
          <FetlifeIcon
            height={26}
            width={26}
            fill={"#E5A363"} // needed to keep it orange
            className="footer__icon"
          />
        </Link>

        <Link to="mailto:bobamunch@gmail.com">
          <EnvelopeClosedIcon height={26} width={26} className="footer__icon" />
        </Link>
      </div>
      <small className="">
        Copyright ©{new Date().getFullYear()} BOBA Munch
      </small>
    </footer>
  );
}
export default Footer;
