import React from 'react';
import { Link } from 'react-router-dom';
import './LoginLogoutCard.css';
import close from '../../images/cross.png';

const LoginLogoutCard = (props) => {

    const heading = props.heading;
    const subText = props.subText;

    function closeCard() {
        props.onClose();
    }

    return (
        <div className='card login_logout_card'>
            <h5>{heading}</h5>
            <p>{subText}</p>
            <Link className='close' onClick={closeCard}>
                <img src={close} alt="close" />
            </Link>
        </div>
    );
};

export default LoginLogoutCard;