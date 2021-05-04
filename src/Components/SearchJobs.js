import React from 'react'
import {useState} from 'react'
import { ThemeConsumer } from '../theme'
export default function SearchJobs({params,onParamChange}){

    const [formData, setFormData] = useState({
        description: params.description,
        full_time: params.full_time,
        location: params.location,
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
                <form className='job-form' onSubmit={onSubmit}>
                <input type='text' name='description' className={`job-description-input border-${theme} bg-${theme} search-background`} placeholder="title" onChange={onChange} />
                <input type='text' name='location' className={`job-location-input border-${theme} bg-${theme}`} placeholder="location" onChange={onChange} />
                <div className={`last-input border-${theme} bg-${theme}`}>
                <label id='full-time-label'htmlFor='full_time'>Full Time  </label>
                <input type='checkbox' id='full_time' name='full_time' className="job-fulltime-input" onChange={onChange}/>
                <input type='submit' className='submit-button' value='Search'/>
                </div>
                </form>
            )}
        </ThemeConsumer>

    )
}


