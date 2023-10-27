import { Link } from "react-router-dom";

const BrandLogo = () => {
  return (
    <Link to="/">
      <h1 className="text-4xl">
        <span className="font-display text-vivid-cyanBlue">Work</span>
        <span className="font-secondary font-bold text-secondary">Wise</span>
      </h1>
    </Link>
  );
};

export default BrandLogo;
