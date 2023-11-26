import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Service from "../pages/Service";
import Account from "../pages/account";
import Dashboard from "../pages/account/Dashboard";

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
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="account"
              element={
                <>
                  <Account />
                </>
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<div>profile</div>} />
              <Route path="messages" element={<div>messages</div>} />
              <Route path="works" element={<div>works</div>} />
              <Route path="wallet" element={<div>wallet</div>} />
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
