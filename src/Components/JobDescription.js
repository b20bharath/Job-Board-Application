import React from 'react'

export default function JobDescription({job}){

    const {id, type, url, created_at, company, company_url, location, title, description, how_to_apply, company_logo} = job
    return (
        <React.Fragment>
        <div className='job-d-title' >
            <img src={company_logo} alt={company} className='company-logo' />
            <div className='job-desc'>
            <h2 className='company-name'>{company}</h2>
            <p className='company-url'>{company_url}</p>
            </div>
            <a href={company_url} className='company-link'>Company Site</a>
        </div>
        <div className='job-d'>
            
        </div>
        <div className='job-apply'>

        </div>
        <a className='apply-link' href={how_to_apply}>Apply Now</a>
        </React.Fragment>
    )
}