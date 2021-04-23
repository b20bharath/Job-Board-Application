import React from 'react'
import { ThemeConsumer } from '../theme'
function diffTime(date){
    const date1 = new Date(Date.now())
    const date2 = new Date(date);
    const difference = Math.abs(date2 - date1);
    const hours = Math.ceil(difference / (1000 * 60 * 60));
    return (hours > 24 ? `${Math.ceil(hours/24)}d` : `${hours}h`)
}

export default function Grid({jobs, onJobClick}){

    function onClickEvent(data){
        console.log('createGrid',data)
        onJobClick(data)
    }

    return(
        <ThemeConsumer>
            {({theme})=>(
                <ul className="grid space-around">
                {jobs.map((value, index)=>{
                    const {id, type, url, created_at, company, company_url, location, title, description, how_to_apply, company_logo} = value
                    return (
                        
                        <li key={url} className={`job bg-${theme}`} onClick={()=>onClickEvent(value)}>
                            
                            <img src={company_logo} className="avatar" alt={company} />
                            <p className='light-text'>{`${diffTime(created_at)} ago \u2022 ${type}`} </p>
                            <h3 className='job-title'>{title}</h3>
                            <p className='light-text'>{company}</p>
                            <h3 className='location'>{location}</h3>
                            
                        </li>
                    )
                })}
            </ul>
            )}
        </ThemeConsumer>

    )
}