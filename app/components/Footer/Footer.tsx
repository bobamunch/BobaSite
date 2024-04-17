import React from "react";

import pkg from "grommet-icons";

import FetlifeIcon from "../FetlifeIcon/FetlifeIcon";
import { colors } from "~/constants";

// const Fetlife = styled(FetlifeIcon)`
//   width: 24px;
//   height: auto;
//   margin-top: -8px;
//   fill: ${colors.porsche};
// `;

function Footer() {
  return (
    <footer>
      <div className="footer_icons">
        <div className="footer_icons__instagram">Insta</div>
        <div className="footer_icons__fetlife">Fetlife</div>
        <div className="footer_icons__email">Email</div>
      </div>
      <small className="">
        Copyright ©{new Date().getFullYear()} BOBA Munch
      </small>
    </footer>
  );
}
export default Footer;
