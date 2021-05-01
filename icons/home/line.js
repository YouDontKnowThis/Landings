function Line({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="302"
      height="30"
      fill="none"
      viewBox="0 0 302 30"
    >
      <path
        stroke="url(#paint0_linear)"
        strokeWidth="4"
        d="M.734 27.274C76.281-.668 207.862-4.739 300.853 11.751"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-0.177"
          x2="298.782"
          y1="17.36"
          y2="19.743"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B08BFF"></stop>
          <stop offset="1" stopColor="#FFADE8"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Line;
