import jobLogo from "../../assets/images/job.png";
import { BiSearch } from "react-icons/bi";
import useMediaQuery from "../../hooks/useMediaQuery";

const Hero = () => {
  const isLg = useMediaQuery("(min-width: 1280px)");

  return (
    <section className="w-full md:h-screen bg-midnight">
      <div className="container h-full py-16 flex items-center justify-between">
        <div className="xl:w-3/5 max-md:text-center">
          <h1 className="font-secondary font-extrabold text-6xl text-primary my-16 max-sm:text-4xl">
            The Easiest Way to Get Your New Job
          </h1>

          <h3 className="font-thin text-2xl text-primary max-sm:text-xl">
            Work with talented people at the most affordable price to get the
            most out of your time and cost
          </h3>

          <label htmlFor="search" className="relative flex w-full h-16 my-10">
            <input
              id="search"
              type="search"
              className="w-full rounded-full outline-none px-10 text-secondary"
            />

            <button className="absolute right-4 bottom-5 text-secondary">
              <BiSearch size={28} />
            </button>
          </label>
        </div>

        {isLg && (
          <div className="w-2/5 h-full p-4 flex items-center">
            <img src={jobLogo} alt="" className="w-full max-h-full" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
