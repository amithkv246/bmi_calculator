import React from 'react';
import Heading1 from '../components/heading1';
import Button from '../components/button';
import Input from '../components/input';
import Text from '../components/text';
import { useNavigate } from 'react-router';

function CalculationPage() {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/result");

  return (
    <>
      <body>
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100svh" }}>

          <div className="w-25 border border-5 border-secondary-subtle rounded-4 p-2 grid row gap-0 justify-content-center align-items-center" style={{ minHeight: "20rem", backgroundColor: "#fdfdfd" }}>
            <div className="col-12"><Heading1 value={"BMI Calculator"} className='fs-3 fw-bold text-primary text-center' /></div>

            <div className="col-4 pt-2"><Text value={"Gender"} /></div>
            <div className="col-1 pt-2"><Text value={':'} /></div>
            <div className="btn-group col-7">
              <Input id="rdbtn1" className="btn-check" type={"radio"} name="gender" value="male" checked />
              <label for="rdbtn1" className="btn btn-outline-primary">Male</label>
              <Input id="rdbtn2" className="btn-check" type={"radio"} name="gender" value="female" />
              <label for="rdbtn2" className="btn btn-outline-primary">Female</label>
            </div>

            <div className="col-4 pt-2"><Text value={"Age"} /></div>
            <div className="col-1 pt-2"><Text value={':'} /></div>
            <div className="col-7"><Input className="form-control" type="number" /></div>

            <div className="col-4 pt-2"><Text value={"Weight"} /></div>
            <div className="col-1 pt-2"><Text value={':'} /></div>
            <div className="col-7"><Input className="form-control" type="number" /></div>

            <div className="col-4 pt-2"><Text value={"Height"} /></div>
            <div className="col-1 pt-2"><Text value={':'} /></div>
            <div className="col-7"><Input className="form-control" type="number" /></div>

            <div className="col-6 text-center"><Button value={"Calculate"} onClick={handleNavigate} /></div>
            <div className="col-6 text-center"><Button value={"Clear"} /></div>
          </div>

        </div>
      </body>
    </>
  );
}

export default CalculationPage;