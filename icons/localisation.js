import { useSpring, animated as anim } from "react-spring";

function Localisation({ className }) {
  const a1 = useSpring({
    loop: { reverse: true },
    from: { rotate: -10, translateY: 0 },
    to: { rotate: 30, translateY: -20 },
    config: { duration: 1700 },
  });
  return (
    <anim.svg
      style={a1}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="69"
      fill="none"
      viewBox="0 0 56 69"
    >
      <path
        fillRule="evenodd"
        stroke="#A4C7D8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M46.335 22.157c2.554 11.07-.775 37.616-11.845 40.17C23.42 64.881 8.8 42.476 6.245 31.406c-2.553-11.07 4.35-22.115 15.42-24.669 11.071-2.554 22.116 4.35 24.67 15.42z"
        clipRule="evenodd"
      ></path>
      <circle
        cx="26.352"
        cy="27.049"
        r="10.377"
        stroke="#A4C7D8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transform="rotate(-12.99 26.352 27.049)"
      ></circle>
    </anim.svg>
  );
}

export default Localisation;
