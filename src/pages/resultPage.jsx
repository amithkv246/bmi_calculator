import React, { useEffect, useState } from 'react';
import Heading1 from '../components/heading1';
import Button from '../components/button';
import { useLocation, useNavigate } from 'react-router';

function ResultPage() {
  const navigate = useNavigate();
  const handlenavigate = () => navigate(-1);
  const location = useLocation();
  const { value } = location.state || {};
  const [result, setResult] = useState("");

  useEffect(() => {
    if (value < 18.5) {
      setResult("Under Weight")
    } else if (value <= 24.9) {
      setResult("Normal Weight")
    } else if (value <= 29.9) {
      setResult("Over Weight")
    } else if (value <= 34.9) {
      setResult("Obese")
    } else if (value <= 39.9) {
      setResult("Highly Obese")
    } else {
      setResult("Extremely Obese")
    }
  }, [result])

  return (
    <>

      <div className="d-flex justify-content-center align-items-center" style={{ height: "100svh" }}>

        <div className="w-25 border border-5 border-secondary-subtle rounded-4 p-2 grid row" style={{ minHeight: "20rem", backgroundColor: "#fdfdfd", placeItems: "center" }}>
          <div className='col-12 p-1'><div className='btn btn-light' onClick={handlenavigate}><i class="fa-solid fa-angle-left fa-xl" style={{ color: "#808488" }}></i></div></div>
          <div className="col-12"><Heading1 value={"Your BMI Result"} className='fs-3 fw-bold text-secondary text-center' /></div>
          <div className='col-12'><p style={{ textAlign: "justify" }}>Your body mass index according to metric system is <span className='fs-5 fw-bold text-warning' >{value || "no value passed"}</span>.</p></div>

          <div className='col-4'>{result === "Under Weight" ? (<p className='text-start text-warning'>&lt;&nbsp;18.5</p>) : (<p className='text-start'>&lt;&nbsp;18.5</p>)}</div>
          <div className='col-1'>{result === "Under Weight" ? (<p className='text-center text-warning'>-</p>) : (<p className='text-center'>-</p>)}</div>
          <div className='col-6'>{result === "Under Weight" ? (<p className='text-end text-warning'>Under Weight</p>) : (<p className='text-end'>Under Weight</p>)}</div>

          <div className='col-4'>{result === "Normal Weight" ? (<p className='text-start text-success'>18.5 - 24.9</p>) : (<p className='text-start'>18.5 - 24.9</p>)}</div>
          <div className='col-1'>{result === "Normal Weight" ? (<p className='text-center text-success'>-</p>) : (<p className='text-center'>-</p>)}</div>
          <div className='col-6'>{result === "Normal Weight" ? (<p className='text-end text-success'>Normal Weight</p>) : (<p className='text-end'>Normal Weight</p>)}</div>

          <div className='col-4'>{result === "Over Weight" ? (<p className='text-start text-danger'>25.0 - 29.9</p>) : (<p className='text-start'>25.0 - 29.9</p>)}</div>
          <div className='col-1'>{result === "Over Weight" ? (<p className='text-center text-danger'>-</p>) : (<p className='text-center'>-</p>)}</div>
          <div className='col-6'>{result === "Over Weight" ? (<p className='text-end text-danger'>Over Weight</p>) : (<p className='text-end'>Over Weight</p>)}</div>

          <div className='col-4'>{result === "Obese" ? (<p className='text-start text-primary'>30.0 - 34.9</p>) : (<p className='text-start'>30.0 - 34.9</p>)}</div>
          <div className='col-1'>{result === "Obese" ? (<p className='text-center text-primary'>-</p>) : (<p className='text-center'>-</p>)}</div>
          <div className='col-6'>{result === "Obese" ? (<p className='text-end text-primary'>Obese</p>) : (<p className='text-end'>Obese</p>)}</div>

          <div className='col-4'>{result === "Highly Obese" ? (<p className='text-start text-secondary'>35.0 - 39.9</p>) : (<p className='text-start'>35.0 - 39.9</p>)}</div>
          <div className='col-1'>{result === "Highly Obese" ? (<p className='text-center text-secondary'>-</p>) : (<p className='text-center'>-</p>)}</div>
          <div className='col-6'>{result === "Highly Obese" ? (<p className='text-end text-secondary'>Highly Obese</p>) : (<p className='text-end'>Highly Obese</p>)}</div>

          <div className='col-4'>{result === "Extremely Obese" ? (<p className='text-start text-secondary-subtle'>&ge;&nbsp;40.0</p>) : (<p className='text-start'>&ge;&nbsp;40.0</p>)}</div>
          <div className='col-1'>{result === "Extremely Obese" ? (<p className='text-center text-secondary-subtle'>-</p>) : (<p className='text-center'>-</p>)}</div>
          <div className='col-6'>{result === "Extremely Obese" ? (<p className='text-end text-secondary-subtle'>Extremely Obese</p>) : (<p className='text-end'>Extremely Obese</p>)}</div>

          <div className='col-12 text-center'><Button value={"Results"} /></div>
        </div>

      </div>

    </>
  );
}

export default ResultPage;