import React from 'react';

const StackedCardsEffect = ({cardHeight, marginX}) => {
    
    return (
        <>
            <div className="card rounded-0" style={{height: `${cardHeight}px`, marginRight: `${marginX}px`, marginLeft: `${marginX}px`}}></div>
			<div className="card rounded-0" style={{height: `${cardHeight}px`, marginRight: `${marginX*2}px`, marginLeft: `${marginX*2}px`}}></div>
        </>
    );
};

export default StackedCardsEffect;