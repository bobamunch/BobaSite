import { Link } from "@remix-run/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";

interface EventCardProps {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  link: string;
}

const getImageUrl = () => {
  const bobaes = [
    "boba-bear.png",
    "boba-camo.png",
    "boba-cat.png",
    "boba-cow.png",
    "boba-fan.png",
    "boba-flannel.png",
    "boba-frog.png",
    "boba-hawaii.png",
    "boba-impact.png",
    "boba-maid.png",
    "boba-rainbow.png",
    "boba-rope.png",
    "boba-unicorn.png",
  ];

  return `bobaes/${bobaes[Math.floor(Math.random() * bobaes.length)]}`;
};

export default function EventCard(props: EventCardProps) {
  const { name, startDate, endDate } = props;

  // https://react.dev/reference/react-dom/client/hydrateRoot#handling-different-client-and-server-content
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  /** Sunday, Jul 9, 2024 */
  const getHumanReadableDate = (startDate: string): string =>
    new Date(startDate).toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const getHumanReadableTime = (date: string): string =>
    new Date(date).toLocaleString("en", {
      hour: "numeric",
      minute: "numeric",
    });

  return (
    <Link to={"./calendar"}>
      <div
        className="event-card event-card__container"
        title="The next Boba Munch event is..."
      >
        {isClient && (
          <img className="event-card-bobae" src={getImageUrl()} alt=""></img>
        )}
        <div className="event-card-info-container">
          <div className="event-card-info-container__event-name">
            {name.toLocaleUpperCase()}
          </div>
          <div className="event-card-info-container__event-date">
            {getHumanReadableDate(startDate).toLocaleUpperCase()}
          </div>
          <div className="event-card-info-container__event-time">
            {getHumanReadableTime(startDate).toLocaleUpperCase()} -{" "}
            {getHumanReadableTime(endDate).toLocaleUpperCase()}
          </div>
        </div>
      </div>
    </Link>
  );
}
