import React, { useState } from "react";
import axios from "axios";
import "./AddForm.css";

const AddForm = () => {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [steps, setSteps] = useState([]);
  const [num1Vaid, setNum1Vaid] = useState(true);
  const [num2Valid, setNum2Valid] = useState(true);
 

  const HandleSubmit = async (e) => {
    const pattern = /^[1-9]\d*$/;
    e.preventDefault();
    validation()

    try {
      if( pattern.test(num1) &&  pattern.test(num2)){
        const { data } = await axios.post("http://localhost:5000/add", {
          num1,
          num2,
        });
        setSteps(data);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };
  const validation = () => {
    const pattern = /^[1-9]\d*$/;
    pattern.test(num1) ? setNum1Vaid(true) : setNum1Vaid(false);
    pattern.test(num2) ? setNum2Valid(true) : setNum2Valid(false);
  };

  return (
    <div className="main">
      <form onSubmit={HandleSubmit} className="addForm">
        <div className="inputField">
          <label htmlFor="First" className="">
            First Number:
          </label>
          <input
            type="text"
            id="First"
            name="num1"
            value={num1}
            onChange={(e) => {
              setnum1(e.target.value);setNum1Vaid(true)
            }}
          />
        </div>
        <span style={{ display: num1Vaid ? "none" : "block", color: "red" }}>
          Enter a valid Number
        </span>
        <div className="inputField">
          <label htmlFor="Second">Second Number: </label>
          <input
            type="text"
            id="Second"
            name="num2"
            value={num2}
            onChange={(e) => {
              setnum2(e.target.value);setNum2Valid  (true)
            }}
          />
        </div>
        <span style={{ display: num2Valid ? "none" : "block", color: "red" }}>
          Enter a valid Number
        </span>

        <button type="submit" className="button">
          Generate Steps
        </button>
      </form>

      {steps.length > 1 && (
        <div className="result">
          <pre className="jsonData">{steps}</pre>
        </div>
      )}
    </div>
  );
};

export default AddForm;
