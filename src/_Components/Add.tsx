const Add = ({ open }: { open: boolean }) => {
  return (
    <>
      {!open && (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24"  xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <rect width="24" height="24" fill="white"></rect>{" "}
            <path
              d="M12 6V18"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M6 12H18"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      )}
      
      {open && (
        <svg viewBox="0 0 24 24" fill="none"  width="24" height="24"  xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <rect width="24" height="24" fill="white"></rect>{" "}
            <path
              d="M6 12H18"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      )}
    </>
  );
};

export default Add;
