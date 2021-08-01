const Spinner = ({ color = "#FFFFFF" }) => {
  return (
    <svg
      className="mr-2 animate-spin"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16"
      >
        <rect width="16" height="16" fill="url(#pattern0)" />
      </mask>
      <g mask="url(#mask0)">
        <rect width="16" height="16" fill={color} />
      </g>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#image0" transform="scale(0.005)" />
        </pattern>
        <image
          id="image0"
          width="200"
          height="200"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Spinner;
