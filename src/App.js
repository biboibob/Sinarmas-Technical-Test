import { useState } from "react";
import "./styles.css";

export default function App() {
  //State Condition
  const [form, setForm] = useState({
    Input: "",
  });

  const [output, setOutput] = useState({
    Input: 0,
    Reverse: 0,
    Result: 0,
  });
  //End State Condition

  //Regex Exp handling number value only
  const RegexExp = (value) => {
    var reg = /^\d+$/;
    return reg.test(value);
  };

  //OnChange function handling controlled component
  const onChange = (name, value) => {
    if (name === "Input" && value !== "") {
      const resultRegex = RegexExp(value);

      if (!resultRegex) return false;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // Handle submit click
  function handleInput(value) {
    //Handle if no input / empty string, then do nothing
    if (form.Input === "") return true;

    //local declaration
    let palindromeNumber = "",
      resultSubtraction;

    // 1. Proceed Palindrome Number
    for (var i = value.length - 1; i >= 0; i--) {
      palindromeNumber = `${palindromeNumber}${value[i]}`;
    }

    // 2. Compare value and do subtraction
    const formatedPalindrome = parseInt(palindromeNumber);
    const formatedValue = parseInt(value);

    if (formatedPalindrome > formatedValue) {
      resultSubtraction = formatedPalindrome - formatedValue;
    } else {
      resultSubtraction = formatedValue - formatedPalindrome;
    }

    // 3. Set output to state
    setOutput((prev) => ({
      ...prev,
      Input: parseInt(value),
      Reverse: parseInt(palindromeNumber),
      Result: parseInt(resultSubtraction),
    }));
  }

  return (
    <div className="App">
      <div>
        Number:
        <input
          value={form.Input}
          onChange={(e) => onChange("Input", e.target.value)}
        />
        <button onClick={() => handleInput(form.Input)}>Submit</button>
      </div>
      <div className="display">
        <span>
          Input : <span className="pills inp">{output.Input}</span>
        </span>
        <span>
          Reverse : <span className="pills rev">{output.Reverse}</span>
        </span>
        <span>
          Result / Difference :{" "}
          <span className="pills res">{output.Result}</span>
        </span>
      </div>
    </div>
  );
}
