import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import useFetchJobs from './Components/FetchResults'
import NavBar from './Components/NavBar'
import Grid from './Components/CreateGird'
import SearchForm from './Components/SearchForm'
import JobsList from './Components/JobsList'
import JobsPagination from './Components/JobsPagination'


function App() {
  const [params, setParams] = useState({
    description: '',
    title: '',
    company: '',
    skill: '',
    location: '',
    full_time: false
  })
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  const handleParamChange = e => {
    const param = e.target.name
    const value = param === "full_time" ? e.target.checked : e.target.value
    setPage(1)
    setParams(previousParams => {
      return {...previousParams, [param]: value}
    })
  }

  return (
    <Container class="conatiner-1">
      <NavBar />
      <div className="display-list">
    
        { loading && <h3 className="loading">Loading...</h3>}
        {error && <h2 className="my-4">Error. Try Refreshing The Page.</h2>}
        {jobs.length > 0 ? <Grid jobs={jobs}/> : <h2>No jobs are available based on your search</h2>}
      </div>
    </Container>
  );
}

export default App;