import { Link } from "react-router-dom";

const Column = ({ heading, links }) => {
  return (
    <div className="p-4">
      <h1 className="font-secondary font-extrabold text-2xl mb-4">{heading}</h1>

      <ul>
        {links.map((link, index) => (
          <li key={index} className="my-2">
            <Link to={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Column;
