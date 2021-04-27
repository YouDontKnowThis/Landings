import { useSpring, animated as anim } from "react-spring";

function RightLight() {
  const a1 = useSpring({
    loop: { reverse: true },
    from: { translateX: 0 },
    to: { translateX: 4 },
    config: { duration: 900 },
  });
  return (
    <anim.svg
      style={a1}
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="12"
      fill="none"
      viewBox="0 0 7 12"
    >
      <path
        stroke="#1F314A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M1.35.898l4.695 4.695-4.695 4.695"
      ></path>
    </anim.svg>
  );
}

export default RightLight;
