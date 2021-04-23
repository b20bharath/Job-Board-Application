import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import useFetchJobs from './Components/FetchResults'
import Grid from './Components/CreateGird'
import SearchJobs from './Components/SearchJobs'
import JobDescription from './Components/JobDescription'
import {ThemeConsumer, ThemeProvider} from './theme'

function Pagenation({page,setPage,checkNextPage}){

  function onPageChange(pageNumber){
    if(pageNumber>0 && checkNextPage)
    {setPage(pageNumber)}
  }

  return (
    <div className='page'>
    <a href='#' className='apply-link-sm' onClick={()=>onPageChange(page-1)}>Previous</a>
    <a href='#' className='apply-link-sm' onClick={()=>onPageChange(page+1)}>Next</a>
    </div>

  )
}

export default function App() {

  const [params, setParams] = useState({
    title: '',
    company: '',
    skill: '',
    location: '',
    full_time: false
  })
  const [page, setPage] = useState(1)
  const { jobs, loading, error, checkNextPage } = useFetchJobs(params, page)
  const [job, setJob] = useState(false)
  const [jobClick, setJobClick] = useState(false)
  const handleParamChange = (data) => {
    setPage(1)
    setParams(previousparams => {
      return {...previousparams, title:data.title, company:data.company, skill: data.skill, location: data.location, full_time: data.full_time}
    })
  }

  const handleJobClick = (data)=>{
    setJob(data)
    setJobClick(true)
  }
  const handleOnReturn = (flag)=>{
    if(flag === true){
      setJob(false)
      setJobClick(false)
    }
  }

  return (
    <Container class="conatiner-1">
      {job && jobClick ? <div className="display-list-job"><JobDescription job={job} onReturn={handleOnReturn}/></div>:
      <div className="display-list">
        <SearchJobs params={params} onParamChange={handleParamChange} />
        { loading && <h3 className="loading">Loading...</h3>}
        {error && <h2 className="my-4">Error. Try Refreshing The Page.</h2>}
        {jobs.length > 0 ? <React.Fragment><Grid jobs={jobs} onJobClick={handleJobClick}/>
        <div className='pagenation'><Pagenation page={page} setPage={setPage} checkNextPage={checkNextPage} /></div></React.Fragment> : <h2>No jobs are available based on your search</h2>}
        
      </div>}
      
    </Container>
  );
}

