import React from 'react'

export default class NavBar extends React.Component{
    render(){
        return (
            <nav className="nav-bar space-between">
                <h2 className="heading">devjobs</h2>
                
                <input type="checkbox" 
                    className="checkbox"/>
            </nav>
        )
    }
}