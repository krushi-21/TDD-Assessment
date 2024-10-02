import React, { useState } from "react";
import { StringCalculator } from "./CalculatorClass";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculation = () => {
    const calculator = new StringCalculator();
    try {
      console.log(input);
      const sum = calculator.add(input);
      setResult(sum);
      setError("");
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers..."
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <button
        onClick={handleCalculation}
        style={{ padding: "10px", width: "100%" }}
      >
        Calculate
      </button>
      {result !== null && <h2>Result: {result}</h2>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
    </div>
  );
};

export default Calculator;
