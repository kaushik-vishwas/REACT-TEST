import React from "react";
import {
  FaHome,
  FaBell,
  FaPlus,
  FaExclamationTriangle,
  FaFileAlt,
  FaFilter,
  FaBars,
  FaMinus,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./App.css";

const GraphDetails = () => {
  const data = {
    labels: ["Jul 18, 2019", "Jul 19, 2020", "Jul 20, 2021", "2022"],
    datasets: [
      {
        label: "Crude Palm Oil",
        data: [1250, 750, 250, 1750],
        fill: false,
        borderColor: "#42A5F5",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 500,
          callback: function (value) {
            return value + " USD";
          },
        },
      },
    },
  };

  return (
    <div className="container">
      <div className="row">
        {/* First Column */}
        <div className="col-8">
          {/* Navbar */}
          <nav className="navbar">
            <div className="navbar-left">
              <FaHome /> <span>1Y</span> <span>2Y</span> <span>3Y</span>{" "}
              <span>5Y</span> <span>All</span>
            </div>
            <div className="navbar-right">
              <span>Update</span> <FaBell /> <FaPlus />{" "}
              <FaExclamationTriangle /> <FaFileAlt /> <FaFilter />
            </div>
          </nav>

          {/* Heading Section */}
          <div className="heading-section">
            <div className="left-section">
              <h2>Crude Palm Oil</h2>
              <p>crude palm oil | USD/MT | Indonesia</p>
            </div>
            <div className="right-section">
              <FaPlus /> <FaMinus /> <FaBars />
            </div>
          </div>

          {/* Chart Section */}
          <div className="chart-section">
            <Line data={data} options={options} />
            <p>Crude Palm Oil (Indonesia, Spot FD, USD/MT)</p>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-4">
          <div className="info-box">
            <h2>1670.00</h2>
            <p>USD/MT INDONESIA</p>
          </div>
          <div className="info-box">
            <h2>N/A</h2>
            <p>%W-o-W Change</p>
          </div>
          <div className="info-box">
            <h2>13.61%</h2>
            <p>%M-o-M Change</p>
          </div>
          <div className="info-box">
            <h2>27.48%</h2>
            <p>%Q-o-Q Change</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphDetails;
