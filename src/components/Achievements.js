import Counter from "./Counter";
import { FaRegUser, FaRegFile, FaRegStar, FaOpencart } from "react-icons/fa";

const Card = ({ accent, icon, suffix, body, from = 0, to = 100 }) => {
  return (
    <div className="w-48 h-48 p-4 flex flex-col items-center gap-4">
      <div
        className="ICON-BOX w-max p-4 rounded-full text-4xl"
        style={{ backgroundColor: accent + "20", color: accent }}
      >
        {icon}
      </div>

      <h2 className="uppercase font-secondary font-black text-4xl text-center">
        <Counter from={from} to={to} duration={3} />
        {suffix}
      </h2>

      <p className="font-secondary font-light text-lg text-center">{body}</p>
    </div>
  );
};

const Achievements = () => {
  return (
    <section>
      <div className="container my-16 flex flex-wrap justify-around gap-4">
        <Card
          accent="#9b51e0"
          icon={<FaRegUser />}
          suffix="m"
          body="Total Seller"
          to={937}
        />

        <Card
          accent="#00d084"
          icon={<FaRegFile />}
          suffix="k"
          body="Total Video edit"
          to={640}
        />

        <Card
          accent="#ffc107"
          icon={<FaRegStar />}
          suffix="m"
          body="Positive Review"
          to={546}
        />

        <Card
          accent="#dc3545"
          icon={<FaOpencart />}
          suffix="k"
          body="Order recieved"
          to={765}
        />
      </div>
    </section>
  );
};

export default Achievements;
