import React, { useEffect, useState } from 'react';
import Heading1 from '../components/heading1';
import Button from '../components/button';
import Input from '../components/input';
import Text from '../components/text';
import { useNavigate } from 'react-router';

function CalculationPage() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState(0);

  function handleClear() {
    setWeight("");
    setHeight("");
  }

  function handlebmicalculation() {
    let x = eval(weight / ((height / 100) ** 2));
    if (height > 0) {
      if (weight > 0) {
        setBmi(x.toFixed(2));
      } else {
        alert("Weight must be greater than 0.")
      }
    }
    else {
      alert("Height must be greater than 0.")
    }
  }

  const handleCalculationAndNavigate = () => {
    handlebmicalculation();
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (bmi) {
      navigate("/result", { state: { value: bmi } });
    } else (
      console.log(bmi + "bmi is not set")
    )
  }, [bmi])

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100svh" }}>

        <div className="w-25 border border-5 border-secondary-subtle rounded-4 p-2 grid row gap-0 justify-content-center align-items-center" style={{ minHeight: "70svh", backgroundColor: "#fdfdfd" }}>
          <div className="col-12"><Heading1 value={"BMI Calculator"} className='fs-3 fw-bold text-info text-center' /></div>

          <div className="col-4 pt-2"><Text value={"Gender"} /></div>
          <div className="col-1 pt-2"><Text value={':'} /></div>
          <div className="btn-group col-7">
            <Input id="rdbtn1" className="btn-check" type={"radio"} name="gender" value="male" checked />
            <label for="rdbtn1" className="btn btn-outline-info">Male</label>
            <Input id="rdbtn2" className="btn-check" type={"radio"} name="gender" value="female" />
            <label for="rdbtn2" className="btn btn-outline-info">Female</label>
          </div>

          <div className="col-4 pt-2"><Text value={"Age"} /></div>
          <div className="col-1 pt-2"><Text value={':'} /></div>
          <div className="col-7"><Input className="form-control" type="number" /></div>

          <div className="col-4 pt-2"><Text value={"Weight"} /></div>
          <div className="col-1 pt-2"><Text value={':'} /></div>
          <div className="col-7"><Input className="form-control placeholderRight" type="number" placeholder={"kg"} value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} /></div>

          <div className="col-4 pt-2"><Text value={"Height"} /></div>
          <div className="col-1 pt-2"><Text value={':'} /></div>
          <div className="col-7"><Input className="form-control placeholderRight" type="number" placeholder={"cm"} value={height} onChange={(e) => setHeight(parseFloat(e.target.value))} /></div>

          <div className="col-6 text-center"><Button value={"Calculate"} onClick={handleCalculationAndNavigate} /></div>
          <div className="col-6 text-center"><Button value={"Clear"} onClick={handleClear} /></div>
        </div>
        <style>
          {`
          .placeholderRight::placeholder{
            text-align: right;
          }
        `}
        </style>
      </div>
    </>
  );
}

export default CalculationPage;