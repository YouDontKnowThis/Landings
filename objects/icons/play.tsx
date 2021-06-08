import { CSSProperties } from "react";

function PlayIcon({ iconRef }) {
  const style: CSSProperties = {
    position: "absolute",
    bottom: "-5%",
    right: "19%",
  };
  return (
    <svg
      ref={iconRef}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="127"
      height="127"
      fill="none"
      viewBox="0 0 127 127"
    >
      <circle
        cx="63.507"
        cy="63.29"
        r="46.411"
        fill="#766BF4"
        transform="rotate(-28.964 63.507 63.29)"
      ></circle>
      <path
        fill="#fff"
        d="M68.567 52.493c6.46.304 9.69.457 10.801 2.612 1.112 2.155-.634 4.875-4.128 10.316l-4.912 7.651c-3.493 5.441-5.24 8.162-7.662 8.048-2.422-.114-3.905-2.988-6.87-8.734l-4.17-8.079c-2.966-5.746-4.449-8.619-3.139-10.66 1.31-2.04 4.54-1.888 10.999-1.583l9.081.429z"
      ></path>
    </svg>
  );
}

export default PlayIcon;
