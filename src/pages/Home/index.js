import Achievements from "./Achievements";
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
      <div>This is home</div>
    </>
  );
};

export default Home;
