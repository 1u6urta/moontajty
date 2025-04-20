interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  rotated?: boolean;
}

const NextIcon = ({ width = 24, height = 24, rotated= false, }: IconProps) => {
  return (
    <div
      className={`cursor-pointer transition-transform duration-300 ${
        rotated ? "rotate-270" : "rotate-90"
      }`}
      style={{ width, height }}
    >
      <svg
        fill="#6b7280;"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="nextCategorie"
      >
        <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12" />
      </svg>
    </div>
  );
};

export default NextIcon;
