// import { PieChart, Pie, Cell, Legend } from "recharts";

// const data = [
//   { name: "Thinking", value: 834, color: "#4285F4" },
//   { name: "Mangement", value: 2890, color: "#FB8C00" },
//   { name: "Social Skills", value: 3478, color: "#26A69A" },
//   { name: "Presentation", value: 826, color: "#E0E0E0" },
// ];

// export default function DonutChart() {
//   return (
//     <div className="flex flex-col items-center">
//       <PieChart width={400} height={400}>
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           innerRadius={100}
//           outerRadius={150}
//           paddingAngle={2}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={entry.color} />
//           ))}
//         </Pie>
//       </PieChart>
//       <div className="mt-4">
//         {data.map((d, i) => (
//           <div key={i} className="flex items-center gap-2">
//             <span style={{ background: d.color, width: 12, height: 12, borderRadius: "50%" }}></span>
//             <p>{d.name} — {d.value} ({((d.value / data.reduce((a, b) => a + b.value, 0)) * 100).toFixed(2)}%)</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import Chart from "react-apexcharts";

export default function DonutChart() {
  const series = [834, 2890, 3478, 826];
  const labels = ["Thinking", "Mangement", "Social Skills", "Presentation"];
  const colors = ["#4285F4", "#FB8C00", "#26A69A", "#E0E0E0"];

  const total = series.reduce((a, b) => a + b, 0);

  const options = {
    chart: {
      type: "donut",
    },
    labels: labels,
    colors: colors,
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
  pie: {
    donut: {
      labels: {
        show: true,
        name: {
          show: true,
          offsetY: -10,
        },
        value: {
          show: false,
        },
        total: {
          show: true,
          label: "Knowledge",
          fontSize: "20px",    // أكبر شوية
          marginBottom: '30px',
          fontWeight: 700,     // بولد
          color: "#000",
          align: "center",     // في النص أفقيًا
          verticalAlign: "middle", // في النص رأسيًا
          formatter: () => "",
        },
      },
    },
  },
},

  };

  return (
    <div style={{ textAlign: "center" }}>
      <Chart options={options} series={series} type="donut" width="400" />

      {/* جدول مخصص */}
      <table
        style={{
          margin: "20px 20px",
          borderCollapse: "collapse",
          width: "100%",
          maxWidth: "400px",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
        }}
      >
        <tbody>
          {series.map((value, i) => (
            <tr
              key={i}
              style={{
                borderBottom: "1px solid #eee",
              }}
            >
              {/* اللون + التسمية */}
              <td style={{ padding: "8px", textAlign: "left" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: colors[i],
                    marginRight: "8px",
                  }}
                ></span>
                {labels[i]}
              </td>

              {/* القيمة بولد */}
              <td style={{ padding: "8px", fontWeight: "bold" }}>
                {value.toLocaleString()}
              </td>

              {/* النسبة المئوية */}
              <td style={{ padding: "8px", textAlign: "right" }}>
                {((value / total) * 100).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
