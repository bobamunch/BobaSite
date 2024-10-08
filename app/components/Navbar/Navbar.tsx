import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <header>
      <div className="horizontal-center">
        <Link to="/" className="header__title">
          <h1>BOBA Munch</h1>
        </Link>

        <NavigationMenu.Root className="header__navbar_root">
          <NavigationMenu.List className="header__navbar_list">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="header__navbar_button">
                <NavigationMenu.Link href="/" className="header__navbar_link">
                  Home
                </NavigationMenu.Link>
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="header__navbar_button">
                <NavigationMenu.Link
                  href="/calendar"
                  className="header__navbar_link"
                >
                  Calendar
                </NavigationMenu.Link>
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </header>
  );
}
