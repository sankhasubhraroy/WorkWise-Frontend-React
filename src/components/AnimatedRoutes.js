import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Home from "../pages/Home";
import Footer from "../layouts/Footer";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Footer />
              </>
            }
          >
            <Route index element={<Home />} />
            <Route path="about" />
            <Route path="service" />
            <Route path="contact" />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
