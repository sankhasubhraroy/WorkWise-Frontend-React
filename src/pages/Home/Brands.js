import {
  SiDell,
  SiIbm,
  SiAdidas,
  SiBbc,
  SiGeeksforgeeks,
  SiRiotgames,
} from "react-icons/si";
import ScrollSlider from "../../components/ScrollSlider";

const Brands = () => {
  return (
    <section>
      <div className="container lg:py-16 lg:text-8xl sm:py-12 sm:text-7xl py-8 text-6xl text-subtext">
        <ScrollSlider minDisplay={3}>
          <SiDell />
          <SiIbm />
          <SiAdidas />
          <SiBbc />
          <SiGeeksforgeeks />
          <SiRiotgames />
        </ScrollSlider>
      </div>
    </section>
  );
};

export default Brands;
