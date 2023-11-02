import { Link, useLocation } from "react-router-dom";
import bg from "../assets/images/breadcrumb-bg.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BreadCrumb = () => {
  const location = useLocation();
  const pageName = location.pathname.split("/")[1];

  return (
    <main
      className="PAGE-HEADER bg-cover bg-right bg-no-repeat py-28 max-md:pb-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <h1 className="HEADING capitalize font-secondary font-extrabold text-5xl text-primary">
          {pageName}
        </h1>
        <ul className="text-primary capitalize flex items-center gap-2 my-4">
          <li className="font-semibold">
            <Link to="/">Home</Link>
          </li>

          <li>
            <MdKeyboardDoubleArrowRight size={18} />
          </li>

          <li>{pageName}</li>
        </ul>
      </div>
    </main>
  );
};

export default BreadCrumb;
