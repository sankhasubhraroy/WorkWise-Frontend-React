import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import Hamburger from "./Hamburger";
import BrandLogo from "./BrandLogo";
import { navLinks, simpleNavRoutes } from "../../utils/constants";
import { Link, Outlet, useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import MobieMenu from "./MobieMenu";
import Backdrop from "./Backdrop";
import { useModal } from "../../contexts/modalContext";
import Auth from "../../components/Auth";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isTablet = useMediaQuery("(max-width: 768px)");
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState(0);
  const { openModal } = useModal();
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const simple = simpleNavRoutes.includes(path);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
  });

  return (
    <>
      <header
        className={`w-full z-[1] transition-colors duration-300 ease-in-out ${
          scroll > 0
            ? "fixed bg-white shadow-nav"
            : simple || isTablet
            ? "fixed bg-white"
            : "absolute bg-transparent"
        }`}
      >
        <motion.nav
          animate={isNavOpen ? "open" : "closed"}
          className="container py-4 flex items-center justify-between"
        >
          <div className="flex gap-4">
            {isTablet && <Hamburger toggle={toggleNav} />}
            <BrandLogo scroll={scroll} simple={simple} />
          </div>

          <div className="flex items-center gap-16">
            {!isTablet && (
              <ul
                className={`flex gap-8 transition-colors duration-300 ease-in-out ${
                  simple || scroll > 0 ? "text-secondary" : "text-primary"
                }`}
              >
                {navLinks.map((link) => (
                  <motion.li key={link.title}>
                    <Link to={link.url}>{link.title}</Link>
                  </motion.li>
                ))}
              </ul>
            )}

            <button
              className="text-white bg-vivid-cyanBlue px-4 py-2 rounded-full"
              onClick={() => openModal(<Auth />)}
            >
              Join
            </button>
          </div>

          <AnimatePresence>
            {isTablet && isNavOpen && (
              <>
                <Backdrop toggle={toggleNav} />
                <MobieMenu toggle={toggleNav} />
              </>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>

      <Outlet />
    </>
  );
};

export default Navbar;
