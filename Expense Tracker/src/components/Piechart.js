import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Piechart({ info, COLORS }) {
  return (
    <div className="piechart">
      <h2>Pie Chart</h2>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={info.length > 0 ? info : [{ category: "No Expenses", cost: 1 }]}
              dataKey="cost"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label={info.length > 0}
            >
              {(info.length > 0 ? info : [{ category: "No Expenses", cost: 1 }]).map(
                (entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={info.length > 0 ? COLORS[index % COLORS.length] : "#d3d3d3"}
                  />
                )
              )}
            </Pie>
            {info.length > 0 && <Tooltip />}
            {info.length > 0 && (
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  fontSize: "12px",
                  overflow: "visible",
                }}
              />
            )}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
