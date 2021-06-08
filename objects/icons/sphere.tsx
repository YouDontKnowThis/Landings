import { CSSProperties, useRef, useEffect } from "react";
import gsap, { Power3 } from "gsap";

function SphereIcon() {
  const style: CSSProperties = {
    position: "absolute",
    top: "8%",
    left: "54%",
  };

  const sphereRef = useRef();

  useEffect(() => {
    gsap.to(sphereRef.current, {
      x: 250,
      rotate: 360,
      ease: Power3.easeInOut,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <svg
      ref={sphereRef}
      className="only_desktop"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="110"
      fill="none"
      viewBox="0 0 110 110"
    >
      <circle
        cx="55.327"
        cy="55.393"
        r="37.911"
        stroke="#B1BAE6"
        strokeWidth="4"
        transform="rotate(30 55.327 55.393)"
      ></circle>
      <path
        stroke="#B1BAE6"
        strokeWidth="4"
        d="M88.157 74.348c-2.105 3.646-7.362 5.663-15.166 5.13-7.66-.522-17.101-3.497-26.44-8.889-9.339-5.392-16.636-12.081-20.918-18.453-4.363-6.492-5.245-12.053-3.14-15.7 2.106-3.646 7.362-5.663 15.167-5.13 7.658.523 17.1 3.497 26.44 8.889 9.338 5.392 16.635 12.081 20.917 18.453 4.364 6.492 5.246 12.053 3.14 15.7zM20.758 35.437l69.128 39.911"
      ></path>
    </svg>
  );
}

export default SphereIcon;
