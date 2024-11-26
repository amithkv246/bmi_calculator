import React from 'react';

function Text({ value }) {
    return (
        <>
            <p className='fs-5 fw-bold text-primary'>{value}</p>
        </>
    );
}

export default Text;