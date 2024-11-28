import React from 'react';

function Input({ type, placeholder, onChange, ...prop }) {
  return (
    <>
      <style>
        {`
          input::placeholder{
            text-align: right;
          }
        `}
      </style>
      <input {...prop} type={type} placeholder={placeholder} onChange={onChange} />
    </>
  );
}

export default Input;