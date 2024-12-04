import React from 'react';

function Heading1({ value,uiColor ,...prop }) {
    return (
        <>
            <h1 {...prop} style={{color: uiColor}}>{value}</h1>
        </>
    );
}

export default Heading1;