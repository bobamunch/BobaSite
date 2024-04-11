import React from "react";

import pkg from "grommet-icons";
const { Mail, Instagram } = pkg;

import styled from "styled-components";
import {
  Anchor,
  Box,
  Footer as GrommetFooter,
  Page,
  PageContent,
  Text,
} from "grommet";

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
    <GrommetFooter background="dark-1" pad="small">
      <Anchor
        a11yTitle="Follow us on Instagram"
        href="https://www.instagram.com/bobamunch/"
        icon={<Instagram color="brand" />}
      />
      <Anchor
        a11yTitle="Find us on FetLife"
        href="https://fetlife.com/users/14009315"
        icon={<FetlifeIcon width={24} height={8} />}
      />
      <Anchor
        a11yTitle="Send us an email"
        href="mailto:bobamunch@gmail.com"
        icon={<Mail color="brand" />}
      />

      <Text textAlign="center" size="small">
        Copyright ©{new Date().getFullYear()} BOBA Munch
      </Text>
    </GrommetFooter>
  );
}
export default Footer;
