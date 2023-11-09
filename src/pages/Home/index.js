import BackToTop from "../../components/BackToTop";
import CallToAction from "../../components/CallToAction";
import Achievements from "../../components/Achievements";
import Brands from "./Brands";
import Features from "./Features";
import Hero from "./Hero";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Skills />
      <Features />
      <Achievements />
      <CallToAction />
      <BackToTop />
    </>
  );
};

export default Home;
