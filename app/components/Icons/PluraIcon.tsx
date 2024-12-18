import { SVGProps } from "react";

export default function PluraIcon(props: SVGProps<SVGSVGElement>) {
  const { width, height, fill, stroke, strokeWidth } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill ?? "none"}
      viewBox="0 0 279 285"
      {...props}
    >
      <path d="M182.5 1.9c-28 10.1-44 30.6-51.9 66.3-1 4.3.6 3.3 3.8-2.5 8.6-15.4 23.3-28.9 41.4-38.1 4-2 5.7-2.4 6.7-1.6 2.1 1.7 8.2 15 9.6 21 2.7 11.2 1.3 27-3.2 37.7-1 2.2-1.5 4.4-1.2 4.6.3.3 3-1.1 6.1-3 3.1-2 8.8-5.1 12.8-6.9 7.6-3.6 8.4-4.6 10.4-13.4 1.5-6.8 1.2-21.5-.6-28.4-3.4-13.5-11.6-26.1-22.2-34.1-5.2-4-5.1-4-11.7-1.6zM56.3 19.4c-12.2 9.2-25.6 24.4-33.2 37.5-9.1 15.7-12.6 28.4-12.6 45.6 0 17.5 3.6 31.8 13.5 53.1 5.1 11.1 14.9 27.6 15.9 26.9.5-.3-.4-3.9-2-8s-4.2-12.3-5.6-18.3c-2.5-9.8-2.7-12.3-2.7-30.7-.1-19.1.1-20.4 2.6-28C36.1 86 42.5 75.8 53.5 63.6 58.8 57.8 63.4 53 63.8 53c.4 0 4.9 3.6 9.8 7.9 26.4 23 48.3 58.8 57 93.4 6.1 24 3.7 70.9-4.9 98-1.4 4.2-2.1 7.9-1.7 8.2 2.2 1.4 14.4-22.2 19.5-37.8 19.4-59.5 5.2-128.8-35.3-171.8C98.1 40.2 66.4 15 63 15c-.4 0-3.4 2-6.7 4.4z" />
      <path d="M227.8 85c-23.6 3.7-47.8 19.3-61.3 39.3-4.8 7-4.5 8.5.8 5.2 16.5-10.3 37.1-15.5 55-14l7.7.7v6.2c-.1 21.3-8.4 52.3-20.2 74.9-15.9 30.4-43.6 58.8-75.5 77.2-4.6 2.6-8.3 5.1-8.3 5.6 0 1.6 20.7-5.3 35.9-11.9 31.7-13.9 58.8-37.1 75.5-64.9 15.1-25.3 23.6-57.9 23.6-91.2 0-10.1-1.5-26-2.6-27.1-.9-.8-25-.9-30.6 0z" />
    </svg>
  );
}
