const Queen = ({ size = "24", className = "" }) => {
  return (
    <span role="img" aria-label="queen">
      <svg
        className={`queens-icon-svg ${className}`}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>Queen</title>
        <g>
          {/* Simple crown design matching favicon */}
          <path d="M3 8 L6 4 L8 7 L12 3 L16 7 L18 4 L21 8 L21 13 L3 13 Z M4 15 L20 15 L20 19 L4 19 Z" />
          {/* Optional: Add a gem in the center */}
          <path d="M10.5 10 L12 8 L13.5 10 L12 12 Z" opacity="0.7" />
        </g>
      </svg>
    </span>
  );
};

export default Queen;
