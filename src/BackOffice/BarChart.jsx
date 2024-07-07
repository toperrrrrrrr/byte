import React from "react";
import { Line } from "react-chartjs-2";
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
} from "chart.js";

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);

const BarChart = () => {
   const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
         {
            label: "Line Chart",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
         },
      ],
   };

   const options = {
      responsive: true,
      plugins: {
         legend: {
            position: "top",
         },
         title: {
            display: true,
            text: "Sample Line Chart",
         },
      },
      scales: {
         y: {
            beginAtZero: true,
         },
      },
   };

   return (
      <div className="chart-container">
         <Line data={data} options={options} />
      </div>
   );
};

export default BarChart;
