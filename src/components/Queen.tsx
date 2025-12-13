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
          {/* Crown outline matching favicon - three points with center tallest */}
          <path d="M3 14 L5 10 L7.5 13 L12 6 L16.5 13 L19 10 L21 14 L21 15 L3 15 Z" />
          {/* Crown base */}
          <path d="M4 16 L20 16 L20 20 L4 20 Z" />
          {/* Blue gem in center - using fill instead of currentColor */}
          <path d="M11 10 L12 8.5 L13 10 L12 11.5 Z" fill="#4169E1" />
        </g>
      </svg>
    </span>
  );
};

export default Queen;
