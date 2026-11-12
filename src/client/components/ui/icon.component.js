function SVGWrapper({ children, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

function UserIcon({ size=18 }) {
  return (
    <SVGWrapper size={size}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20c.5-4 2.6-6 6.5-6s6 2 6.5 6" />
    </SVGWrapper>
  );
}


function ArrowIcon({ size=18 }) {
  return (
    <SVGWrapper size={size}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </SVGWrapper>
  );
}


function LogoutIcon({ size=18 }) {
  return (
    <SVGWrapper size={size}>
      <path d="M14 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-3" />
      <path d="M10 12h11m-4-4 4 4-4 4" />
    </SVGWrapper>
  );
}

export { UserIcon, ArrowIcon, LogoutIcon }
