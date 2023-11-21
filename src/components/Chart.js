import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ data, accent = "#3182bd", strokeWidth = 2 }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="6 10" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          contentStyle={{ borderRadius: "0.5rem" }}
          itemStyle={{ padding: 0, color: "#9b51e0" }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={accent}
          strokeWidth={strokeWidth}
          fill={accent}
          fillOpacity={0.2}
          dot={{ r: 4, fill: "white", fillOpacity: 1 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
