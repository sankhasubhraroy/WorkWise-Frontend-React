import { Link } from "react-router-dom";
import { sideLinks } from "../../utils/constants";

const Sidebar = () => {
  return (
    <>
      <nav className="w-80 max-lg:w-full">
        <div className="flex flex-col justify-start items-center gap-4 px-8 py-16 bg-white rounded-xl">
          <div className="sm:w-60 sm:h-60 w-52 h-52">
            <img
              className="w-full h-full rounded-full object-cover object-center"
              src="https://images.unsplash.com/photo-1682687220199-d0124f48f95b"
              alt="avatar"
            />
          </div>

          <h2 className="font-secondary font-extrabold text-xl">John Doe</h2>

          <p className="text-secondary">johndoe@gmail.com</p>

          <button className="w-max border-2 rounded-full px-2 border-pale-purple text-pale-purple text-sm capitalize hover:text-primary hover:bg-pale-purple transition-colors duration-300 ease-in-out">
            preview public profile
          </button>
        </div>

        <div className="px-8 py-16 max-lg:p-4 bg-white rounded-xl mt-8">
          <ul className="flex flex-col gap-4 max-lg:flex-row max-lg:overflow-scroll">
            {sideLinks.map((link, index) => (
              <li
                key={index}
                className="w-max px-2 max-lg:bg-secondary max-lg:rounded-md"
              >
                <Link
                  to={link.url}
                  className="flex justify-center items-center gap-2 text-secondary"
                >
                  <span>{link.icon}</span>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
