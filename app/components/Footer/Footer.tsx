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
  return <div>Copyright ©{new Date().getFullYear()} BOBA Munch</div>;
}
export default Footer;
