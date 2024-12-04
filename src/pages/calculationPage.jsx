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
  const [selectedGender, setSelectedGender] = useState("male");
  const [uiColor, setUiColor] = useState("black");
  const [age, setAge] = useState();
  const navigate = useNavigate();

  function handleClear() {
    setSelectedGender("male");
    setAge("");
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

  
  useEffect(() => {
    if (bmi) {
      navigate("/result", { state: { value: bmi, gender: selectedGender } });
    } else (
      console.log(bmi + "bmi is not set")
    )
  }, [bmi])

  useEffect(() => {
    console.log(selectedGender);

    if (selectedGender === "male") {
      setUiColor("info")
      document.body.classList.add("bgMale")
      document.body.classList.remove("bgFemale")
    } else {
      setUiColor("warning")
      document.body.classList.add("bgFemale")
      document.body.classList.remove("bgMale")
    }
  }, [selectedGender])

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100svh" }}>

        <div className="w-25 border border-5 border-secondary-subtle rounded-4 p-2 grid row gap-0 justify-content-center align-items-center" style={{ minHeight: "75svh", backgroundColor: "#fdfdfd", boxShadow: "0px 0px 10px 5px #888" }}>
          <div className="col-12"><Heading1 value={"BMI Calculator"} className={`fs-3 fw-bold text-${uiColor} text-center`} /></div>

          <div className="col-4 pt-2"><Text value={"Gender"} uiColor={uiColor} /></div>
          <div className="col-1 pt-2"><Text value={':'} uiColor={uiColor} /></div>
          <div className="btn-group col-7">
            <Input id="rdbtn1" className="btn-check" type={"radio"} name="gender" value="male" checked={selectedGender === "male"} onChange={(e) => setSelectedGender(e.target.value)} />
            <label for="rdbtn1" className={`btn btn-outline-${uiColor}`}>Male</label>
            <Input id="rdbtn2" className="btn-check" type={"radio"} name="gender" value="female" checked={selectedGender === "female"} onChange={(e) => setSelectedGender(e.target.value)} />
            <label for="rdbtn2" className={`btn btn-outline-${uiColor}`}>Female</label>
          </div>

          <div className="col-4 pt-2"><Text value={"Age"} uiColor={uiColor} /></div>
          <div className="col-1 pt-2"><Text value={':'} uiColor={uiColor} /></div>
          <div className="col-7"><Input className="form-control placeholderLeft" type="number" placeholder={"2 - 120"} value={age} onChange={(e) => setAge(parseInt(e.target.value))} /></div>

          <div className="col-4 pt-2"><Text value={"Weight"} uiColor={uiColor} /></div>
          <div className="col-1 pt-2"><Text value={':'} uiColor={uiColor} /></div>
          <div className="col-7"><Input className="form-control placeholderRight" type="number" placeholder={"kg"} value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} /></div>

          <div className="col-4 pt-2"><Text value={"Height"} uiColor={uiColor} /></div>
          <div className="col-1 pt-2"><Text value={':'} uiColor={uiColor} /></div>
          <div className="col-7"><Input className="form-control placeholderRight" type="number" placeholder={"cm"} value={height} onChange={(e) => setHeight(parseFloat(e.target.value))} /></div>

          <div className="col-6 text-center"><Button value={"Calculate"} onClick={handleCalculationAndNavigate} uiColor={uiColor} /></div>
          <div className="col-6 text-center"><Button value={"Clear"} onClick={handleClear} uiColor={uiColor} /></div>
        </div>
      </div >
      <style>
        {`
  .placeholderRight::placeholder{
    text-align: right;
  }
  .placeholderLeft::placeholder{
    font-family: sans-serif;
    font-size: small;
    color:#888;
  }
  .bgMale {
    background-color: #d8fbf7 !important;
  }
  .bgFemale {
    background-color: #fff36d !important;
  }
        `}
      </style>
    </>
  );
}

export default CalculationPage;