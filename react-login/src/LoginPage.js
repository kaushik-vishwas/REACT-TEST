import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "This value is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (!password) {
      newErrors.password = "This value is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (valid) {
      alert("Login successful");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        textAlign: "left",
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block" }}>Email address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              backgroundColor: "#fdd",
              border: "1px solid #ddd",
            }}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block" }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              backgroundColor: "#fdd",
              border: "1px solid #ddd",
            }}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>
        <div style={{ marginBottom: "15px" }}>
          <a href="#" style={{ color: "navy", textDecoration: "none" }}>
            Forget password
          </a>
        </div>
        <button
          type="submit"
          style={{
            display: "block",
            width: "100%",
            backgroundColor: "navy",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
