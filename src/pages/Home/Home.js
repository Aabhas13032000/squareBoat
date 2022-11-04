//React imports
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

//csss
import './Home.css';

//images
import logo from '../../images/myJobs2x.png';
import homePage from '../../images/homePage.png';
import goldline from '../../images/goldline.png';
import ideaa from '../../images/ideaa.png';
import kanba from '../../images/kanba.png';
import lighting from '../../images/lighting.png';
import liva from '../../images/liva.png';
import solaytic from '../../images/solaytic.png';
import velocity from '../../images/velocity-9.png';
import ztos from '../../images/ztos.png';

//components
import WhyUsCard from '../../components/WhyUsCard/WhyUsCard';

const Home = () => {

    return (
        <>
            <div className='home'>
                <div className="hero_content">
                    <div className='row'>
                        <div className="col-lg-5 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                            <div className="content text-center text-md-start">
                                <h1>Welcome to</h1>
                                <img src={logo} alt="logo" />
                                <br /><br /><br />
                                <Link className="button" to="/login">Get Started</Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 d-flex align-items-center justify-content-md-end justify-content-center">
                            <img src={homePage} alt="homePage" />
                        </div>
                    </div>
                </div>
                <div className='why_us'>
                    <h6>Why Us</h6>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                            <WhyUsCard heading="Get More Visibility" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></WhyUsCard>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                            <WhyUsCard heading="Organize Your Candidates" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></WhyUsCard>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                            <WhyUsCard heading="Verify Their Abilities" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></WhyUsCard>
                        </div>
                    </div>
                </div>
                <div className='why_us companies'>
                    <h6>Companies Who Trust Us</h6>
                    <div className='images'>
                        <img src={solaytic} alt="solaytic" />
                        <img src={kanba} alt="kanba" />
                        <img src={lighting} alt="lighting" />
                        <img src={ztos} alt="ztos" />
                        <img src={kanba} alt="kanba" />
                        <img src={goldline} alt="goldline" />
                        <img src={ideaa} alt="ideaa" />
                        <img src={liva} alt="liva" />
                        <img src={velocity} alt="velocity" />
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    );
};

export default Home;