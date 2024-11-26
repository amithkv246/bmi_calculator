import React from 'react';

function Button({ value, onClick, ...prop }) {
  return (
    <>
      <button style={{ width: "6rem" }} {...prop} className='btn btn-primary' onClick={onClick}>{value}</button>
    </>
  );
}

export default Button;