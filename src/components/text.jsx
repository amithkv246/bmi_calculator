import React from 'react';

function Text({ value, uiColor }) {
    return (
        <>
            <p className={`fs-6 fw-medium text-${uiColor}`}>{value}</p>
        </>
    );
}

export default Text;