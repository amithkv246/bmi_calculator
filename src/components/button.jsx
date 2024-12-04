import React from 'react';

function Button({ value, onClick, uiColor, ...prop }) {
  return (
    <>
      <button style={{ width: "6rem" }} {...prop} className={`btn btn-${uiColor} fw-bold`} onClick={onClick}>{value}</button>
    </>
  );
}

export default Button;