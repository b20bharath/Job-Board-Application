import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './Components/NavBar'
import reportWebVitals from './reportWebVitals';
import {ThemeProvider, ThemeConsumer} from './theme'
class JobList extends React.Component{
  constructor(props){
      super(props)

      this.state={
          theme:'light',
          toggleTheme: ()=>{
              console.log('toggled')
              this.setState(({theme})=>(
                  {
                      theme: theme==='light'?'dark':'light'
                  }
              ))
          }
      }
  }
  render(){
      return (
          <ThemeProvider value={this.state}>
              <div className={this.state.theme}>
                  <div className="navigation-bar"> 
                    <NavBar />
                    <App /> 
                  </div>
              </div>
          </ThemeProvider>
      )
  }
}

ReactDOM.render(
  <JobList />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
