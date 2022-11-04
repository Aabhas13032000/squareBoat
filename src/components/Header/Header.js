import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/myJobs.png';

const Header = (props) => {

    const isLoggedIn = props.isLoggedIn;

    function logout() {
        props.onUpdateValue(false,{});
    }

    return (
        <>
            <div className='header'>
                <div className='nav'>
                    <Link to="/">
                        <div className='logo'>
                            <img src={logo} alt="Logo" />
                        </div>
                    </Link>
                    <div className='user-image'>
                        {
                            !isLoggedIn 
                            ? <div className="login">
                                <Link to="/login">Login</Link>
                              </div> 
                            : <div className="profile">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle profile-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span>{props.name.slice(0,1)}</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" onClick={logout}>Logout</Link></li>
                                    </ul>
                                </div>
                              </div>
                        }
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    );
};

export default Header;