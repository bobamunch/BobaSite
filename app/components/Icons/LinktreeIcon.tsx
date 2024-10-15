import { SVGProps } from "react";

export default function LinktreeIcon(props: SVGProps<SVGSVGElement>) {
  const { width, height, fill, stroke, strokeWidth } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill ?? "none"}
      stroke={stroke ?? "#000"}
      strokeWidth={strokeWidth}
      viewBox="0 0 48 48"
      {...props}
    >
      <path d="M22.254 3.5a2.522 2.522 0 0 0-2.5 2.5 1.5 1.5 0 0 0 2.92.5h2.574v5.305c0 1.056.7 1.967 1.559 2.316.858.35 1.995.186 2.732-.57l3.549-3.64 1.54 1.58-3.732 3.552c-.769.732-.945 1.873-.6 2.738.346.865 1.261 1.573 2.323 1.573h5.348v2.228h-5.44c-1.056 0-1.967.7-2.316 1.56-.35.86-.183 1.997.574 2.733l3.836 3.727-1.535 1.548-1.611-1.619a1.5 1.5 0 1 0-2.125 2.115l1.964 1.977c.965.97 2.583.97 3.547-.002l2.246-2.264c.968-.974.95-2.598-.033-3.554l-3.314-3.221h4.707c1.363 0 2.5-1.136 2.5-2.5v-3.228c0-1.364-1.137-2.5-2.5-2.5H33.87l3.193-3.04c.995-.947 1.026-2.572.067-3.556a1.5 1.5 0 0 0-.002 0l-2.252-2.309c-.968-.993-2.613-.992-3.58 0l-3.049 3.127V6c0-1.364-1.136-2.5-2.5-2.5h-3.494zm-7.338 3.193c-.654 0-1.31.25-1.793.746l-2.258 2.323c-.956.983-.924 2.606.069 3.552l3.205 3.055H9.533a2.522 2.522 0 0 0-2.5 2.5v3.23c0 1.364 1.137 2.5 2.5 2.5h4.697l-3.312 3.217c-.988.959-.999 2.588-.025 3.561l2.252 2.254c.966.966 2.577.962 3.54-.006l7.317-7.352 1.516 1.524a1.5 1.5 0 1 0 2.125-2.115l-1.87-1.88c-.964-.969-2.58-.969-3.544 0l-7.317 7.352-1.539-1.539 3.832-3.722a1.5 1.5 0 0 0 0-.002c.758-.737.923-1.873.574-2.733-.349-.86-1.26-1.558-2.316-1.558h-5.43v-2.23h5.354c1.061 0 1.974-.707 2.32-1.571.346-.864.174-2.006-.594-2.738a1.5 1.5 0 0 0-.002-.002L13.37 11.49l1.547-1.592 3.547 3.649c.737.757 1.873.921 2.732.572.86-.349 1.56-1.26 1.56-2.316v-.739a1.5 1.5 0 0 0-2.94-.433l-3.106-3.192a2.494 2.494 0 0 0-1.793-.746zm7.322 22.397a2.522 2.522 0 0 0-2.5 2.5v2.687a1.5 1.5 0 1 0 3 0V32.09h2.496v9.41h-2.496v-1.564a1.5 1.5 0 1 0-3 0V42c0 1.364 1.137 2.5 2.5 2.5h3.496c1.364 0 2.5-1.136 2.5-2.5V31.59c0-1.364-1.136-2.5-2.5-2.5h-3.496z" />
    </svg>
  );
}
