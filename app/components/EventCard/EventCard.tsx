import { Link } from "@remix-run/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";

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

interface EventCardProps {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  link: string;
}

export default function EventCard(props: EventCardProps) {
  const { name, startDate, endDate } = props;

  /** Sunday, Jul 9, 2024 */
  const getHumanReadableDate = (startDate: string): string =>
    new Date(startDate).toLocaleString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const getHumanReadableTime = (date: string): string =>
    new Date(date).toLocaleString("en", {
      hour: "numeric",
      minute: "numeric",
    });

  const pickImage = () =>
    `bobaes/${bobaes[Math.floor(Math.random() * bobaes.length)]}`;

  return (
    <Link to={"./calendar"}>
      <div className="event-card event-card__container">
        <img className="event-card-bobae" src={pickImage()} alt=""></img>
        <div className="event-card-info-container">
          <div className="event-card-info-container__next-event">
            Next Event:
          </div>
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
