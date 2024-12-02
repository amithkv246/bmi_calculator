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
  const [color, setColor] = useState("black")

  useEffect(() => {
    if (value < 18.5) {
      setResult("Under Weight")
      setColor("#ffc107")
    } else if (value <= 24.9) {
      setResult("Normal Weight")
      setColor("#198754")
    } else if (value <= 29.9) {
      setResult("Over Weight")
      setColor("#f44e17")
    } else if (value <= 34.9) {
      setResult("Obese")
      setColor("#ff0000")
    } else if (value <= 39.9) {
      setResult("Highly Obese")
      setColor("#dc0000")
    } else {
      setResult("Extremely Obese")
      setColor("#a60000")
    }
  }, [result])

  return (
    <>

      <div className="d-flex justify-content-center align-items-center" style={{ height: "100svh" }}>

        <div className="w-25 border border-5 border-secondary-subtle rounded-4 p-2 grid row" style={{ minHeight: "75svh", backgroundColor: "#fdfdfd", boxShadow: "0px 0px 10px 5px #888" }}>
          <div className='col-12 p-1'><div className='btn btn-light' onClick={handlenavigate}><i class="fa-solid fa-angle-left fa-xl" style={{ color: "#17cbf0" }}></i></div></div>
          <div className="col-12"><Heading1 value={"Your BMI Result"} className='fs-3 fw-bold text-info text-center' /></div>
          <div className='col-12'><p style={{ textAlign: "justify" }}>Your <strong>body mass index</strong> according to <strong>Metric System</strong> is <span className='fs-5' style={{ color: color, fontWeight: 700 }}>{value || "no value passed"}</span>.</p></div>

          <div className='col-5'>{result === "Under Weight" ? (<p className='text-start text-warning' style={{ fontSize: "1.2rem", fontWeight: "700" }}>&lt;&nbsp;18.5</p>) : (<p className='text-start fw-medium'>&lt;&nbsp;18.5</p>)}</div>
          <div className='col-1'>{result === "Under Weight" ? (<p className='text-center text-warning' style={{ fontSize: "1.2rem", fontWeight: "700" }}>-</p>) : (<p className='text-center'>-</p>)}</div>
          <div className='col-6'>{result === "Under Weight" ? (<p className='text-end text-warning' style={{ fontSize: "1.2rem", fontWeight: "700" }}>Under Weight</p>) : (<p className='text-end'>Under Weight</p>)}</div>

          <div className='col-5'>{result === "Normal Weight" ? (<p className='text-start text-success' style={{ fontSize: "1.2rem", fontWeight: "700" }}>18.5 - 24.9</p>) : (<p className='text-start'>18.5 - 24.9</p>)}</div>
          <div className='col-1'>{result === "Normal Weight" ? (<p className='text-center text-success' style={{ fontSize: "1.2rem", fontWeight: "700" }}>-</p>) : (<p className='text-center'>-</p>)}</div>
          <div className='col-6'>{result === "Normal Weight" ? (<p className='text-end text-success' style={{ fontSize: "1.2rem", fontWeight: "700" }}>Normal Weight</p>) : (<p className='text-end'>Normal Weight</p>)}</div>

          <div className='col-5'>{result === "Over Weight" ? (<p className='text-start' style={{ color: "#f44e17", fontSize: "1.2rem", fontWeight: "700" }}>25.0 - 29.9</p>) : (<p className='text-start'>25.0 - 29.9</p>)}</div>
          <div className='col-1'>{result === "Over Weight" ? (<p className='text-center' style={{ color: "#f44e17", fontSize: "1.2rem", fontWeight: "700" }}>-</p>) : (<p className='text-center'>-</p>)}</div>
          <div className='col-6'>{result === "Over Weight" ? (<p className='text-end' style={{ color: "#f44e17", fontSize: "1.2rem", fontWeight: "700" }}>Over Weight</p>) : (<p className='text-end'>Over Weight</p>)}</div>

          <div className='col-5'>{result === "Obese" ? (<p className='text-start' style={{ color: "#ff0000", fontSize: "1.2rem", fontWeight: "700" }}>30.0 - 34.9</p>) : (<p className='text-start'>30.0 - 34.9</p>)}</div>
          <div className='col-1'>{result === "Obese" ? (<p className='text-center' style={{ color: "#ff0000", fontSize: "1.2rem", fontWeight: "700" }}>-</p>) : (<p className='text-center' >-</p>)}</div>
          <div className='col-6'>{result === "Obese" ? (<p className='text-end' style={{ color: "#ff0000", fontSize: "1.2rem", fontWeight: "700" }}>Obese</p>) : (<p className='text-end'>Obese</p>)}</div>

          <div className='col-5'>{result === "Highly Obese" ? (<p className='text-start' style={{ color: "#dc0000", fontSize: "1.2rem", fontWeight: "700" }}>35.0 - 39.9</p>) : (<p className='text-start'>35.0 - 39.9</p>)}</div>
          <div className='col-1'>{result === "Highly Obese" ? (<p className='text-center' style={{ color: "#dc0000", fontSize: "1.2rem", fontWeight: "700" }}>-</p>) : (<p className='text-center'>-</p>)}</div>
          <div className='col-6'>{result === "Highly Obese" ? (<p className='text-end' style={{ color: "#dc0000", fontSize: "1.2rem", fontWeight: "700" }}>Highly Obese</p>) : (<p className='text-end'>Highly Obese</p>)}</div>

          <div className='col-5'>{result === "Extremely Obese" ? (<p className='text-start' style={{ color: "#a60000", fontSize: "1.2rem", fontWeight: "700" }}>&ge;&nbsp;40.0</p>) : (<p className='text-start'>&ge;&nbsp;40.0</p>)}</div>
          <div className='col-1'>{result === "Extremely Obese" ? (<p className='text-center' style={{ color: "#a60000", fontSize: "1.2rem", fontWeight: "700" }}>-</p>) : (<p className='text-center'>-</p>)}</div>
          <div className='col-6'>{result === "Extremely Obese" ? (<p className='text-end' style={{ color: "#a60000", fontSize: "1.2rem", fontWeight: "700" }}>Extremely Obese</p>) : (<p className='text-end'>Extremely Obese</p>)}</div>

          <div className='col-12 text-center'><Button value={"Results"} /></div>
        </div>
        <style>
          {`
            p {
              color : #17cbf0e6;
            }
          `}
        </style>
      </div>

    </>
  );
}

export default ResultPage;