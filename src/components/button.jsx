import React from 'react';

function Button({ value, onClick, ...prop }) {
  return (
    <>
      <button style={{ width: "6rem" }} {...prop} className='btn btn-info fw-bold' onClick={onClick}>{value}</button>
    </>
  );
}

export default Button;