import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./dashboard.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardSection = ({ title, data, bgColor }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: data.colors,
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { position: "bottom" },
      tooltip: { enabled: true },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="dashboard-section" style={{ backgroundColor: bgColor }}>
      <h3>{title}</h3>
      <div className="chart-container">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const usersData = {
    labels: ["Active", "Inactive"],
    values: [150, 50],
    colors: ["#6c63ff", "#d1d1f9"],
  };
  const restaurantsData = {
    labels: ["Open", "Closed"],
    values: [30, 15],
    colors: ["#4c9f50", "#a5d6a7"],
  };
  const marketsData = {
    labels: ["Online", "Offline"],
    values: [70, 30],
    colors: ["#ff9800", "#ffcc80"],
  };

  return (
    <div className="dashboard-container">
      <DashboardSection title="Users" data={usersData} bgColor="#f0f0ff" />
      <DashboardSection
        title="Restaurants"
        data={restaurantsData}
        bgColor="#f0fff0"
      />
      <DashboardSection title="Markets" data={marketsData} bgColor="#fff8e1" />
    </div>
  );
};

export default DashboardPage;
