import Cta from "../assets/images/cta.png";

const CallToAction = () => {
  return (
    <section>
      <div className="container my-16">
        <div
          className="CTA-CARD bg-pale-sky p-16 rounded-3xl bg-right-bottom bg-no-repeat"
          style={{ backgroundImage: `url(${Cta})`, backgroundSize: "30% auto" }}
        >
          <div className="CONTENT w-3/5 max-xl:w-3/4 max-lg:w-full">
            <h1 className="font-secondary font-extrabold text-4xl mb-6 max-md:text-3xl max-sm:text-2xl">
              Find the talent needed to get your business growing.
            </h1>

            <p className="text-secondary mb-6">
              Find your jobs to millions of monthly users and search 15.8
              million CVs
            </p>

            <button className="bg-pale-purple w-40 h-14 text-primary rounded-full">
              Start Hiring
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
