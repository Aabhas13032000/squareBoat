import React from 'react';
import { Link } from 'react-router-dom';
import './ApplicationCard.css';
import locationIcon from '../../images/location.png'

const ApplicationCard = (props) => {

    const name = props.name;
    const email = props.email;
    const skills = props.skills;

    return (
        <div className='card application_card'>
            <div className='profile'>
                <Link className='profile-icon'>{name.slice(0,1)}</Link>
                <div className='profile-text'>
                    <h5>{name}</h5>
                    <p>{email}</p>
                </div>
            </div>
            <div className='bottom3'>
                <h6>Skills</h6>
                <p>{skills}</p>
            </div>
        </div>
    );
};

export default ApplicationCard;