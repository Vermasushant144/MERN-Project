import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import "./index.css";

export function StatsChart({ itemPriceRange, monthName }) {
  let list = Object.keys(itemPriceRange);
  list = list.map((each) => ({
    name: each,
    items: itemPriceRange[each],
  }));

  return (
    <div className="chart-container">
      <h2 className="chart-title">
        <u>Bar Charts Stats</u> - <i style={{color: 'green'}}>{monthName}</i>
      </h2>
      <ResponsiveContainer width="90%" height="70%">
        <BarChart
          data={list}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" tick={{ fill: "#fff" }} />
          <YAxis
            interval={0}
            tickCount={10}
            allowDecimals={false}
            tick={{ fill: "#fff" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#2e2e2e",
              color: "#fff",
              borderRadius: "8px",
            }}
            itemStyle={{ color: "#fff" }}
          />
          <Legend wrapperStyle={{ color: "#fff" }} />
          <Bar dataKey="items" fill="#ff6f61" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
