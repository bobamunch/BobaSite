import FetlifeIcon from "../Icons/FetlifeIcon";
import { InstagramLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import LinktreeIcon from "../Icons/LinktreeIcon";
import PluraIcon from "../Icons/PluraIcon";

function Footer() {
  return (
    <footer>
      <div className="horizontal-center">
        <div className="footer__icons">
          <Link
            to="https://www.instagram.com/bobamunch/"
            aria-label="Check BOBA Munch out on Instagram!"
          >
            <InstagramLogoIcon
              height={26}
              width={26}
              className="footer__icon"
              href="https://www.instagram.com/bobamunch/"
            />
          </Link>

          <Link
            to="https://fetlife.com/users/14009315"
            aria-label="Check BOBA Munch out on Fetlife!"
          >
            <FetlifeIcon
              height={26}
              width={26}
              fill={"#E5A363"} // needed to keep it orange
              className="footer__icon"
            />
          </Link>

          <Link
            to="https://heyplura.com/events/org/bobamunch"
            aria-label="Check BOBA Munch out on Plura!"
          >
            <PluraIcon
              height={26}
              width={26}
              fill={"#E5A363"} // needed to keep it orange
              className="footer__icon"
            />
          </Link>

          <Link to="mailto:bobamunch@gmail.com" aria-label="Email BOBA Munch!">
            <EnvelopeClosedIcon
              height={26}
              width={26}
              className="footer__icon"
            />
          </Link>

          <Link
            to="https://linktr.ee/bobamunch"
            aria-label="Check out BOBA Munch's various platforms on Linktree!"
          >
            <LinktreeIcon
              height={26}
              width={26}
              fill={"#E5A363"} // needed to keep it orange
              strokeWidth={1}
              stroke="#E5A363"
              className="footer__icon"
            />
          </Link>
        </div>
        <small className="">
          Copyright ©{new Date().getFullYear()} BOBA Munch
        </small>
      </div>
    </footer>
  );
}
export default Footer;
