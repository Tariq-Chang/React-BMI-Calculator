
import { useState } from 'react';
import "./App.css";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmiValue, setBmiValue] = useState(0);
  const [errors, setErrors] = useState({});

  const handleCalculate = (e) => {
    e.preventDefault();
    setErrors(validate())
    if (Object.keys(validate()).length === 0)
      setBmiValue(weight / (height ** 2))
  }

  const validate = () => {
    const errors = {}

    if (!height) {
      errors.heightError = "Please enter height";
    }
    if (!weight) {
      errors.weightError = "Please enter weight";
    }
    console.log(errors);
    return errors;
  }
  return (
    <>
      <div className="main">
        <div className="app__container">
          <h1>BMI Calculator</h1>
          <form className="form__container">
            <label htmlFor="weight">Weight (KG)</label>
            <input type="number" name="weight" id="weight" style={errors.weightError && {outline:"1px solid red"}} onChange={(e) => setWeight(e.target.value)} />
            {errors.weightError && <p style={{ color: "red", marginBottom: "10px" }}>{errors.weightError}</p>}
            <label htmlFor="height">Height (Meters)</label>
            <input type="number" name="height" id="height" style={errors.heightError && {outline:"1px solid red"}} onChange={(e) => setHeight(e.target.value)} />
            {errors.heightError && <p style={{ color: "red", marginBottom: "10px" }}>{errors.heightError}</p>}
            <button onClick={handleCalculate}>Calculate</button>
          </form>
          <div className="result">
            {
              bmiValue && <p className="result">BMI VALUE: <b>{bmiValue.toFixed(3)}</b></p>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App