import React from 'react'
import { ThemeConsumer } from '../theme'
import {FaMoon,FaSun} from 'react-icons/fa'
export default class NavBar extends React.Component{
    render(){
        return (
            <ThemeConsumer>
                {({theme, toggleTheme})=>(
                    <nav className="nav-bar space-between">
                    <h2 className="heading">devjobs</h2>
                    <label className="label">
                    <FaSun color='#fff' size={17} />
                    <input type="checkbox" 
                        className="checkbox"
                        onClick={()=>{
                            console.log('clicked')
                            return toggleTheme()
                    }}/>
                    <span className='check'></span>
                    <FaMoon color='#fff' size={17} />
                    </label>
                    </nav>
                )}

            </ThemeConsumer>
        )
    }
}




