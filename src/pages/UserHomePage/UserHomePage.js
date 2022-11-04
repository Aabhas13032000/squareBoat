import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './UserHomePage.css';
import JobCard from '../../components/JobCard/JobCard';

import home from '../../images/home.png';
import prev from '../../images/Prev.png';
import nex from '../../images/Nex.png';
import writing from '../../images/writing.png';

const UserHomePage = (props) => {

    const [isLoading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [count,setCount] = useState(0);
    const [limit,setLimit] = useState(0);
    const [totalPages,setTotalPages] = useState(1);
    const [jobs,setJobs] = useState([]);

    useEffect(() => {
        getJobsPosted();
    },[page]);

    function getJobsPosted() {
        setLoading(true);
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': props.user.token },
        };
        // console.log(`${props.baseUrl}/recruiters/jobs?page=${page}`);
        fetch(`${props.baseUrl}/recruiters/jobs?page=${page}`, requestOptions).then(response => response.json()).then((result) => {
            // console.log(result);
            if(page === 1){
                var totalpages = Math.ceil(result.data.metadata.count / result.data.metadata.limit);
                setTotalPages(totalpages);
                setCount(result.data.metadata.count);
                setLimit(result.data.metadata.limit);
            }
            setJobs(result.data.data);
            // console.log(totalpages);
            setLoading(false);
        }).catch((err) => {
            console.log(err.message);
        });
    }

    function getNextPage() {
        if(page !== totalPages) {
            var newPage = page+1;
            setPage(newPage);
            getJobsPosted();
        }
    }

    function getPrevPage() {
        if(page !== 1 ) {
            var newPage = page-1;
            setPage(newPage);
            getJobsPosted();
        }
    }

    return (
        <>
        {
            isLoading 
            ? <div className='text-center'><p>Loading ...</p></div> 
            : <div className='user_home_page'>
                <div className='box'></div>
                <div className='container jobs'>
                    <Link className='homeHeading' to="/"><img src={home} alt="Home" />&nbsp;&nbsp;Home</Link>
                    <h5>Jobs posted by you</h5>
                    {
                        jobs.length === 0 
                        ?   <div className='no_data'>
                                <div className='text-center'>
                                    <img src={writing} alt="Writing" />
                                    <h5>Your posted jobs will show here!</h5>
                                    <br />
                                    <br />
                                    <Link className="button2">Post a Job</Link>
                                </div>
                            </div>
                        : <>
                            <div className='row'>
                                {
                                    jobs.map((job,index) => (
                                        <div className='col-lg-3 col-md-6 col-sm-6 col-12' key={index}>
                                            <div onClick={() => props.onOpenPopup(job.id)} >
                                                <JobCard heading={job.title} subText={job.description} location={job.location}></JobCard>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            {
                                count <= limit
                                ?<div></div>
                                :<div className='pagination'>
                                    <Link className='prev' onClick={getPrevPage}>
                                        <img src={prev} alt="Prev" />
                                    </Link>
                                    <Link className='page'>{page}</Link>
                                    <Link className='next' onClick={getNextPage}>
                                        <img src={nex} alt="Next" />
                                    </Link>
                                </div>
                            }
                        </>
                    }
                </div>
              </div>
        }
        </>
    );
};

export default UserHomePage;