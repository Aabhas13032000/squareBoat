import React,{useEffect,useState} from 'react';
import './JobApplicationModal.css';

import ApplicationCard from '../ApplicationCard/ApplicationCard';

import close from '../../images/cross.png'
import writing from '../../images/writing.png'

const JobApplicationModal = (props) => {

    const id = props.id;
    const [applications,setApplications] = useState([]);
    const [isLoading,setLoading] = useState(false);

    useEffect(()=>{
        getApplications();
    },[])

    function getApplications() {
        setLoading(true);
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': props.token },
        };
        fetch(`${props.baseUrl}/recruiters/jobs/${id}/candidates`, requestOptions).then(response => response.json()).then((result) => {
            // console.log(result);
            if(result.message !== 'No candidates have applied for the job posting') {
                setApplications(result.data);
            } else {
                setApplications([]);
            }
            setLoading(false);
        }).catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <div className='popup'>
            <div className='background' onClick={props.onClosePopup}></div>
            <div className='popup-content'>
                <div className='top'>
                    <div className='top-header'>
                        <h5>Applicants for this job</h5>
                        <img src={close} onClick={props.onClosePopup} alt="close" />
                    </div>
                    <hr />
                    {
                        isLoading 
                        ? <></>
                        : applications.length === 0
                        ? <>
                            <p>0 applications</p>
                        </>
                        : <>
                            <p>Total {applications.length} applications</p>
                        </>
                    }
                </div>
                <div className='bottom'>
                    {
                        isLoading 
                        ? <div className='text-center loading'><p>Loading ...</p></div> 
                        : applications.length === 0 
                        ?   <div className='no_data'>
                                <div className='text-center'>
                                    <img src={writing} alt="Writing" />
                                    <h5>No applications available!</h5>
                                </div>
                            </div>
                        : <>
                            <div className='row'>
                                {
                                    applications.map((application,index) => (
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-12' key={index}>
                                            <ApplicationCard name={application.name} email={application.email} skills={application.skills}></ApplicationCard>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default JobApplicationModal;