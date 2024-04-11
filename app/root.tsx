import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import "~/styles/index.css";

export default function App() {
  return (
    <html lang="utf-8">
      <head>
        <Meta />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}
