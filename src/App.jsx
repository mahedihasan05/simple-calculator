import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
function App() {
  function add(a, b) {
    return a + b;
  }

  function substract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function division(a, b) {
    return a / b;
  }
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [ans, setAns] = useState(0);
  const [operation, setOperation] = useState("");

  const handleButtonClick = (value) => {
    if (operation) {
      setValue2((prev) => prev * 10 + value);
    } else {
      setValue1((prev) => prev * 10 + value);
    }
  };

  const handleOperationClick = (op) => {
    if (!operation) {
      setOperation(op);
    }
  };

  const handleEquals = () => {
    if (operation === "+") {
      setAns(add(value1, value2));
    } else if (operation === "-") {
      setAns(substract(value1, value2));
    } else if (operation === "*") {
      setAns(multiply(value1, value2));
    } else if (operation === "/") {
      setAns(division(value1, value2));
    }
    setValue1(0);
    setValue2(0);
    setOperation("");
  };
  const resetAll = () => {
    setValue1(0);
    setValue2(0);
    setOperation("");
    setAns("0");
  }
  let buttonValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Simple Calculator</h1>
      <div className="container">
        <div className="sub_container">
          <div>value 1</div>
          <h1>{value1}</h1>
          <h2> {operation} </h2>
          <div>value 2</div>
          <h1>{value2}</h1>
          <div>Answer</div>
          <h1>{ans}</h1>
        </div>
        <div style={{ margin: "10px 0" }}>
          {buttonValues.map((num) => (
            <Button key={num} onClick={() => handleButtonClick(num)}>
              {num}
            </Button>
          ))}
          <Button onClick={() => handleOperationClick("+")}>+</Button>
          <Button onClick={() => handleOperationClick("-")}>-</Button>
          <Button onClick={() => handleOperationClick("*")}>*</Button>
          <Button onClick={() => handleOperationClick("/")}>/</Button>
          <Button onClick={handleEquals}>=</Button>
          <Button onClick={resetAll}>C</Button>
        </div>
      </div>
    </>
  );
}

export default App;
