import React from 'react'
import {useState} from 'react'
import { ThemeConsumer } from '../theme'
export default function SearchJobs({params,onParamChange}){
    const [formData, setFormData] = useState({
        title: params.title,
        company: params.company,
        full_time: params.full_time,
        location: params.location,
        skill: params.skill,
    })

    function onSubmit(event){
        event.preventDefault();

        onParamChange(formData)
    }
    function onChange({target}){
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setFormData(prevState => ({
            ...prevState,
            [target.name]: value
        }))
    }

    return (
        <ThemeConsumer>
            {({theme})=>(
                <form className='job-form flex-display ' onSubmit={onSubmit}>
                <input type='text' name='title' className={`job-title-input border-${theme} bg-${theme}`} placeholder="title" onChange={onChange}/>
                <input type='text' name='company' className={`job-company-input border-${theme} bg-${theme}`} placeholder="company" onChange={onChange}/>
                <input type='text' name='skill' className={`job-skill-input border-${theme} bg-${theme}`} placeholder="skill" onChange={onChange}/>
                <input type='text' name='location' className={`job-location-input border-${theme} bg-${theme}`} placeholder="location" onChange={onChange}/>
                <div className={`last-input border-${theme} bg-${theme}`}>
                <label htmlFor='full_time'>Full Time  </label>
                <input type='checkbox' id='full_time' name='full_time' className="job-fulltime-input" onChange={onChange}/>
                <input type='submit' className='submit-button' value='Search'/>
                </div>
                </form>
            )}
        </ThemeConsumer>

    )
}


