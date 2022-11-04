import React from 'react';
import { Link } from 'react-router-dom';
import './JobCard.css';
import locationIcon from '../../images/location.png'

const JobCard = (props) => {

    const heading = props.heading;
    const subText = props.subText;
    const location = props.location;

    return (
        <div className='card job_card'>
            <div>
                <h5>{heading}</h5>
                <p>{subText}</p>
            </div>
            <div className='bottom'>
                <div className='location'>
                    <p><span><img src={locationIcon} alt="location" /></span>&nbsp;&nbsp;<span>{location}</span></p>
                </div>
                <Link className='button'>View Applications</Link>
            </div>
        </div>
    );
};

export default JobCard;