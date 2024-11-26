import React from 'react';

function Heading1({ value, ...prop }) {
    return (
        <>
            <h1 {...prop} className='fs-3 fw-bold'>{value}</h1>
        </>
    );
}

export default Heading1;