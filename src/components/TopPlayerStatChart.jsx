import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getProfessionColour } from "../helpers/staticData";

export const TopPlayerStatChart = ({ data }) => {
  return (
    <>
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
          barCategoryGap={2}
          margin={{
            top: 2,
            right: 10,
            left: -50,
            bottom: 5,
          }}
        >
          <YAxis
            type="category"
            dataKey="name"
            tick={false}
          />
          <XAxis
            type="number"
            dataKey="value"
            domain={[0, "dataMax"]}
          />
          <Tooltip cursor={false} />
          <Bar
            dataKey="value"
            label={renderCustomizedLabel}
            activeBar={{ filter: `brightness(1.5)`, strokeWidth: 2 }}
          >
            {data.map((bar, i) => {
              return (
                <Cell
                  key={`cell-${i}`}
                  fill={getProfessionColour(bar.profession)}
                />
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

const renderCustomizedLabel = (props) => {
  const { x, y, value, name, height } = props;

  return (
    <text
      y={y + height / 2}
      x={x + 2}
      dominantBaseline="middle"
    >
      {name}: {value.toLocaleString()}
    </text>
  );
};

export default TopPlayerStatChart;
