import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

const BrandLogo = ({ scroll }) => {
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <Link to="/">
      <h1 className="text-3xl">
        <span className="font-display text-vivid-cyanBlue">Work</span>
        <span
          className={`font-secondary font-bold ${
            isTablet || scroll > 0 ? "text-secondary" : "text-primary"
          }`}
        >
          Wise
        </span>
      </h1>
    </Link>
  );
};

export default BrandLogo;
