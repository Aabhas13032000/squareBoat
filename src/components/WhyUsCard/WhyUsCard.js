import React from 'react';
import './WhyUsCard.css';

const WhyUsCard = (props) => {

    const heading = props.heading;
    const subText = props.subText;

    return (
        <div className='card why_us_card'>
            <h5>{heading}</h5>
            <p>{subText}</p>
        </div>
    );
};

export default WhyUsCard;