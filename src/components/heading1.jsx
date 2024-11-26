import React from 'react';

function Heading1({ value, ...prop }) {
    return (
        <>
            <h1 {...prop}>{value}</h1>
        </>
    );
}

export default Heading1;