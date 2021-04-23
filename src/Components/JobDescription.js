import React from 'react'
import ReactMarkdown from 'react-markdown'
import {ThemeConsumer} from '../theme'

export default function JobDescription({job,onReturn}){

    const {id, type, url, created_at, company, company_url, location, title, description, how_to_apply, company_logo} = job

    function diffTime(date){
        const date1 = new Date(Date.now())
        const date2 = new Date(date);
        const difference = Math.abs(date2 - date1);
        const hours = Math.ceil(difference / (1000 * 60 * 60));
        return (hours > 24 ? `${Math.ceil(hours/24)}d` : `${hours}h`)
    }

    function onReturnClick(){
        onReturn(true)
    }

    return (
        <ThemeConsumer>
            {({theme})=>(
                <React.Fragment>
                <div className={`job-d-title bg-${theme}`} >
                <img src={company_logo} alt={company} className='company-logo' />
                <div className='job-desc'>
                <h2 className='company-name'>{company}</h2>
                <p className='company-url'>{company_url}</p>
                </div>
                <a href={company_url} className='company-link'>Company Site</a>
            </div>
            <div className={`job-d bg-${theme}`}>
                <div>
                    <p className='light-text center-text'>{`${diffTime(created_at)} ago \u2022 ${type}`} </p>
                    <h3 className="job-title center-text">{title}</h3>
                    <h3 className='location'>{location}</h3>
                </div>
                <div>
                <a href={url} className='apply-link-sm'> Apply Now</a>
                </div>
    
            </div>
            <div className={`job-details bg-${theme}`}>
                <ReactMarkdown>{description}</ReactMarkdown>
            </div>
            <div className='job-apply'>
                <ReactMarkdown>{how_to_apply}</ReactMarkdown>
            </div>
            <div className={`job-d bg-${theme}`}>
                <div>
                    <h3 className="job-title center-text">{title}</h3>
                    <h3 className='location'>{location}</h3>
                </div>
                <div>
                <a href={url} className='apply-link-sm'> Apply Now</a>
                </div>
            </div>
            <div className={`job-d bg-${theme}`}>
                <div>
                    <h3 className="job-title center-text">Go back to jobs</h3>
                </div>
                <div>
                <a href='#' onClick={()=>onReturnClick()} className='apply-link-sm'> Go Back</a>
                </div>
            </div>
            </React.Fragment>
            )}
        </ThemeConsumer>


    )
}