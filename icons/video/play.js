function PlayIcon({ onClick, className }) {
  return (
    <svg
      onClick={onClick}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 107 107"
    >
      <circle
        cx="53.465"
        cy="53.388"
        r="53.27"
        fill="#B08BFF"
        opacity="0.07"
      ></circle>
      <circle
        cx="53.465"
        cy="53.388"
        r="37.733"
        fill="#B08BFF"
        opacity="0.2"
      ></circle>
      <circle
        cx="53.465"
        cy="53.388"
        r="24.416"
        fill="#B08BFF"
        opacity="0.7"
      ></circle>
      <path
        fill="#fff"
        d="M59.584 50.905c1.273.817 1.91 1.226 2.135 1.743a1.855 1.855 0 010 1.48c-.225.517-.861.925-2.135 1.742l-6.57 4.215c-1.464.94-2.196 1.409-2.801 1.372a1.855 1.855 0 01-1.384-.757c-.358-.489-.358-1.358-.358-3.097v-8.43c0-1.74 0-2.609.358-3.098a1.855 1.855 0 011.384-.756c.605-.037 1.337.432 2.8 1.371l6.57 4.215z"
      ></path>
    </svg>
  );
}

export default PlayIcon;
