import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import sharedStyle from "./styles/shared.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: sharedStyle },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
