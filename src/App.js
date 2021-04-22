import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import useFetchJobs from './Components/FetchResults'
import NavBar from './Components/NavBar'
import Grid from './Components/CreateGird'
import JobsList from './Components/JobsList'
import JobsPagination from './Components/JobsPagination'
import SearchJobs from './Components/SearchJobs'
import JobDescription from './Components/JobDescription'

function App() {

  const [params, setParams] = useState({
    title: '',
    company: '',
    skill: '',
    location: '',
    full_time: false
  })
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)
  const [id, setID] = useState('')
  const [jobClick, setJobClick] = useState(false)
  const handleParamChange = (data) => {
    setPage(1)
    setParams(previousparams => {
      return {...previousparams, title:data.title, company:data.company, skill: data.skill, location: data.location, full_time: data.full_time}
    })
  }

  const handleJobClick = (data)=>{
    setID({
      id:data
    })
    setJobClick(true)
    
  }

  return (
    <Container class="conatiner-1">
      <NavBar />
      <div className="display-list">
        <SearchJobs params={params} onParamChange={handleParamChange} />
        { loading && <h3 className="loading">Loading...</h3>}
        {error && <h2 className="my-4">Error. Try Refreshing The Page.</h2>}
        {jobs.length > 0 ? <Grid jobs={jobs} onJobClick={handleJobClick}/> : <h2>No jobs are available based on your search</h2>}
      </div>
    </Container>
  );
}

export default App;