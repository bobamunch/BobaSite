import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>
          <Link to={"/"}>Home</Link>
        </NavigationMenu.Trigger>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>
          <Link to={"/calendar"}>Calendar</Link>
        </NavigationMenu.Trigger>
      </NavigationMenu.Item>
    </NavigationMenu.Root>
  );
}
