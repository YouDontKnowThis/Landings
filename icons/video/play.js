function PlayIcon({ onClick }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
  };

  return (
    <svg
      onClick={onClick}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="17"
      fill="none"
      viewBox="0 0 14 17"
    >
      <path
        fill="#fff"
        d="M11.584 5.905c1.274.817 1.91 1.226 2.135 1.743a1.855 1.855 0 010 1.48c-.225.517-.861.925-2.135 1.742l-6.57 4.215c-1.464.94-2.196 1.409-2.801 1.372A1.855 1.855 0 01.829 15.7c-.358-.489-.358-1.358-.358-3.097v-8.43c0-1.74 0-2.609.358-3.098A1.855 1.855 0 012.213.32c.605-.037 1.337.432 2.8 1.371l6.57 4.215z"
      ></path>
    </svg>
  );
}

export default PlayIcon;
