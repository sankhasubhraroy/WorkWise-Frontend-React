import MultiSlider from "../../components/MultiSlider";

const Skills = () => {
  return (
    <section>
      <div className="container">
        <div className="TEXT-GROUP w-3/4 m-auto mb-10 flex flex-col gap-8">
          <h1 className="font-secondary font-extrabold text-5xl max-md:text-4xl max-sm:text-3xl text-center">
            Popular Skills
          </h1>

          <p className="text-center font-thin">
            Uniquely promote adaptive quality vectors rather than stand-alone
            e-markets. pontificate alternative architectures whereas iterate.
          </p>
        </div>

        <MultiSlider minDisplay={2} dots={false}>
          {Array.from([1, 2, 3, 4, 5, 6, 7, 8]).map((value, index) => (
            <div key={index} className="h-80 w-full border-2 border-blue-400">
              {value}
            </div>
          ))}
        </MultiSlider>
      </div>
    </section>
  );
};

export default Skills;
