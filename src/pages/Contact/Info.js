import { infoLists } from "../../utils/constants";

const Card = ({ accent, icon, heading, body }) => {
  return (
    <div className="w-72 h-60 p-4 flex flex-col items-center gap-4">
      <div
        className="ICON-BOX w-max p-4 rounded-full text-3xl"
        style={{ backgroundColor: accent + "20", color: accent }}
      >
        {icon}
      </div>

      <h2 className="capitalize font-secondary font-bold text-2xl text-center">
        {heading}
      </h2>

      <p className="font-secondary font-light text-center">{body}</p>
    </div>
  );
};

const Info = () => {
  return (
    <section>
      <div className="container my-16 flex flex-wrap justify-around gap-4">
        {infoLists.map((info, index) => (
          <Card
            key={index}
            accent={info.accent}
            icon={info.icon}
            heading={info.heading}
            body={info.body}
          />
        ))}
      </div>
    </section>
  );
};

export default Info;
