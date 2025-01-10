
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";
import "./index.css";

export default function CategoryChart({ monthName, categories }) {
  console.log(categories);
  return (
    <div className="category-chart-container">
      <h2 className="chart-title">
        <u>Unique Category Chart</u> - <b className="month-name">{monthName}</b>
      </h2>
      <ResponsiveContainer
        width="50%"
        height={300}
        className="chart-container">
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={categories}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="items">
            {categories.map((each, index) => (
              <Cell
                key={`cell-${index}`}
                name={each.category.toUpperCase()}
                fill={getRandomColor()}
              />
            ))}
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
            className="chart-legend"
          />
          <Tooltip className="chart-tooltip" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}