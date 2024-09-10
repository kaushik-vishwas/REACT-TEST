import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [rows, setRows] = useState([{ id: Date.now() }]);

  const handleAddRow = () => {
    setRows([...rows, { id: Date.now() }]);
  };

  const handleRemoveRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-left">
          <span>Manage Product Price Trends</span>
        </div>
        <div className="navbar-right">
          <button className="add-button">Add Changes</button>
        </div>
      </nav>

      <section className="input-section">
        <input
          type="text"
          placeholder="Specific Type"
          className="input-field"
        />
        <input
          type="text"
          placeholder="Short Description"
          className="input-field"
        />
      </section>

      <section className="input-section">
        <input type="number" placeholder="New Price" className="input-field" />
        <input type="date" className="input-field" />
        <button className="add-row-button" onClick={handleAddRow}>
          +
        </button>
      </section>

      <section className="more-section">
        {rows.map((row) => (
          <div key={row.id} className="row">
            <input
              type="number"
              placeholder="New Price"
              className="input-field"
            />

            <input type="date" className="input-field" />
            <button
              className="remove-button"
              onClick={() => handleRemoveRow(row.id)}
            >
              –
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
