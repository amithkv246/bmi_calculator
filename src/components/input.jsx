import React from 'react';

function Input({ type, placeholder, onChange, ...prop }) {
  return (
    <>
      <input {...prop} type={type} placeholder={placeholder} onChange={onChange} />
    </>
  );
}

export default Input;