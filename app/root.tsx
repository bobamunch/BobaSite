import Footer from "./components/Footer/Footer";
import { Grommet } from "grommet";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "@remix-run/react";

import "~/styles/index.css";

export default function App() {
  return (
    <Grommet>
      <Navbar />
      <Outlet />
      <Footer />
    </Grommet>
  );
}
