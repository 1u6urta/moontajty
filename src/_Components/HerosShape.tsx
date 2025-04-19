const HerosShape = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 64">
        <path
          // fill="url(#whiteToGreen)"
          fill="#00bf63"
          fillOpacity="1"
          d="M0,0L80,5.3C160,11,320,21,480,21.3C640,21,800,11,960,10.7C1120,11,1280,21,1360,26.7L1440,32L1440,64L1360,64C1280,64,1120,64,960,64C800,64,640,64,480,64C320,64,160,64,80,64L0,64Z"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" className="sec" viewBox="0 0 1440 320">
        <path
          // fill="url(#greenToWhite)"
          fill="#00bf63"
          fillOpacity="1"
          d="M0,256L80,261.3C160,267,320,277,480,277.3C640,277,800,267,960,266.7C1120,267,1280,277,1360,282.7L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default HerosShape;
