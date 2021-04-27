function RightBold({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      fill="none"
      viewBox="0 0 54 54"
    >
      <g filter="url(#filter0_d)">
        <circle cx="27.099" cy="19.593" r="15.883" fill="#fff"></circle>
      </g>
      <path
        fill="#1A093F"
        d="M29.505 17.401c1.09.725 1.636 1.087 1.83 1.542.177.415.177.885 0 1.3-.195.455-.74.817-1.83 1.542l-1.167.776c-1.315.874-1.972 1.311-2.517 1.284a1.656 1.656 0 01-1.249-.67c-.324-.438-.324-1.227-.324-2.806v-1.552c0-1.579 0-2.368.324-2.807.295-.399.754-.645 1.25-.67.544-.026 1.201.41 2.516 1.285l1.167.776z"
      ></path>
      <defs>
        <filter
          id="filter0_d"
          width="52.44"
          height="52.44"
          x="0.88"
          y="0.757"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="7.384"></feOffset>
          <feGaussianBlur stdDeviation="5.169"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default RightBold;
