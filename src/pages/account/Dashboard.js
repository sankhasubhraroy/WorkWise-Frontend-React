import { FaStarHalfAlt, FaTasks, FaWallet } from "react-icons/fa";
import Counter from "../../components/Counter";
import Chart from "../../components/Chart";

const Card = ({ title, value, accent, icon }) => {
  return (
    <div className="w-72 h-36 bg-white p-8 rounded-xl flex justify-between items-center">
      <div>
        <h1 className="text-subtext text-lg capitalize">{title}</h1>
        <p className="text-4xl font-light my-2">
          <Counter to={value} />
        </p>
      </div>

      <div
        className="w-max p-6 text-4xl rounded-xl"
        style={{ backgroundColor: accent + "20", color: accent }}
      >
        {icon}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const data = [
    { name: "G1", value: 231 },
    { name: "G2", value: 334 },
    { name: "G3", value: 533 },
    { name: "G4", value: 120 },
    { name: "G5", value: 723 },
  ];

  return (
    <div className="w-full">
      <div className="HEADING p-4 bg-white rounded-xl">
        <h1 className="font-secondary font-bold text-2xl">Dashboard</h1>
      </div>

      <div className="CONTENT mt-4">
        <div className="SUMMERY flex justify-between flex-wrap gap-4">
          <Card title="tasks" value={24} accent="#198754" icon={<FaTasks />} />
          <Card
            title="balance"
            value={0}
            accent="#ffc107"
            icon={<FaWallet />}
          />
          <Card
            title="reviews"
            value={7.3}
            accent="#0dcaf0"
            icon={<FaStarHalfAlt />}
          />
        </div>

        <div className="w-full h-80 bg-white p-8 rounded-xl mt-4">
          <Chart data={data} accent="#9b51e0" strokeWidth={4} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
