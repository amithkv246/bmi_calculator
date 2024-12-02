import React from 'react';

function Text({ value }) {
    return (
        <>
            <p className='fs-6 fw-medium text-info'>{value}</p>
        </>
    );
}

export default Text;