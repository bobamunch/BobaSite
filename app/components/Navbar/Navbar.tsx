import React from "react";
import { Box, Header, Nav } from "grommet";

import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <Header>
      <Nav direction="row">
        <Link to={"/"}>Home</Link>
        <Link to={"/calendar"}>Calendar</Link>
      </Nav>
    </Header>
  );
}
