import React from 'react';
import Heading1 from '../components/heading1';
import Button from '../components/button';
import { useNavigate } from 'react-router';

function ResultPage() {
  const navigate = useNavigate();
  const handlenavigate = () => navigate(-1);

  return (
    <>
      <body>
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100svh" }}>

          <div className="w-25 border border-5 border-secondary-subtle rounded-4 p-2 grid row" style={{ minHeight: "20rem", backgroundColor: "#fdfdfd", placeItems: "center" }}>
            <div className='col-12 p-1'><div className='btn btn-light' onClick={handlenavigate}><i class="fa-solid fa-angle-left fa-xl" style={{ color: "#808488" }}></i></div></div>
            <div className="col-12"><Heading1 value={"Your BMI Result"} className='fs-3 fw-bold text-secondary text-center' /></div>
            <div className='col-12'><p style={{ textAlign: "justify" }}>Your body mass index according to metric system is <span></span> .</p></div>

            <div className='col-4'><p className='text-start'>&lt;18.5</p></div>
            <div className='col-1'><p className='text-center'>-</p></div>
            <div className='col-6'><p className='text-end'>Under Weight</p></div>

            <div className='col-4'><p className='text-start'>18.5-24.9</p></div>
            <div className='col-1'><p className='text-center'>-</p></div>
            <div className='col-6'><p className='text-end'>Normal Weight</p></div>

            <div className='col-4'><p className='text-start'>25.0-29.9</p></div>
            <div className='col-1'><p className='text-center'>-</p></div>
            <div className='col-6'><p className='text-end'>Over Weight</p></div>

            <div className='col-4'><p className='text-start'>30.0-34.9</p></div>
            <div className='col-1'><p className='text-center'>-</p></div>
            <div className='col-6'><p className='text-end'>Obese</p></div>

            <div className='col-4'><p className='text-start'>35.0-39.9</p></div>
            <div className='col-1'><p className='text-center'>-</p></div>
            <div className='col-6'><p className='text-end'>Highly Obese</p></div>

            <div className='col-4'><p className='text-start'>&ge;40.0</p></div>
            <div className='col-1'><p className='text-center'>-</p></div>
            <div className='col-6'><p className='text-end'>Extremely Obese</p></div>

            <div className='col-12 text-center'><Button value={"Results"} /></div>
          </div>

        </div>
      </body>
    </>
  );
}

export default ResultPage;