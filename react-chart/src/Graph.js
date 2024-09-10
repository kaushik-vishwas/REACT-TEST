import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";

const dataCrudePalmOil = [
  { date: "Jul 18", price: 600 },
  { date: "Jul 19", price: 500 },
  { date: "Jul 20", price: 550 },
  { date: "Jul 21", price: 950 },
];

const dataCausticSoda = [
  { date: "2017", price: 750 },
  { date: "2018", price: 540 },
  { date: "2019", price: 610 },
  { date: "2020", price: 790 },
  { date: "2021", price: 1200 },
];

const Graph = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate("/graph-details");
  };

  const handleDeleteClick = () => {
    alert("Delete action not implemented yet");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div>
              <button
                className="btn btn-primary mr-2"
                onClick={handleViewClick}
              >
                View
              </button>
              <FaTrash
                onClick={handleDeleteClick}
                style={{ cursor: "pointer", color: "red" }}
              />
            </div>
          </div>

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
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={dataCrudePalmOil}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[-1250, 1750]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h3>Caustic Soda</h3>
            <div>
              <button
                className="btn btn-primary mr-2"
                onClick={handleViewClick}
              >
                View
              </button>
              <FaTrash
                onClick={handleDeleteClick}
                style={{ cursor: "pointer", color: "red" }}
              />
            </div>
          </div>

          {/* Heading Section */}
          <div className="heading-section">
            <div className="left-section">
              <p>Caustic Soda | USD/MT | Argentina</p>
            </div>
            <div className="right-section">
              <FaPlus /> <FaMinus /> <FaBars />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={dataCausticSoda}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[400, 1600]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Graph;
