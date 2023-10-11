import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            <Route index />
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
