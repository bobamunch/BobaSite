import * as React from "react";
import { SVGProps } from "react";

function FetlifeIcon(props: SVGProps<SVGSVGElement>) {
  const { width, height, fill, stroke } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill ?? "none"}
      stroke={stroke ?? "#000"}
      data-name="Layer 2"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        d="M40.14 13.81h0c6.24-7.15-2.66-8.31-2.66-8.31 2.86 3.85 1.28 4.93.2 5.84l-.13.12A9.95 9.95 0 0 0 24 14.28a10 10 0 0 0-8.23-4.37h0a10 10 0 0 0-5.32 1.55l-.13-.12c-1.08-.91-2.66-2 .2-5.84 0 0-8.9 1.16-2.66 8.31h0A9.94 9.94 0 0 0 8 26.18h0L24 42.5l15.83-16.13.08-.09.08-.1h0a9.94 9.94 0 0 0 .16-12.37Z"
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
    </svg>
  );
}
export default FetlifeIcon;
