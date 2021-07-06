import React from 'react'

class Summary extends React.Component{
  
  render(){
    const {summary,currentDate}=this.props;
    return (
      <div className="global">
       <h1 className="header">Global Covid Cases</h1>
       <span>Last Updated {new Date(currentDate).toLocaleString('en-US', { timeZone: 'Asia/Yangon' })} (MM Time)</span>
       <div className="row">
       
       <div className="NewConfirmed">
        <h1>New Case</h1>
        <h1>{summary.NewConfirmed}</h1>
       </div>
       
       <div className="TotalConfirmed">
        <h1>Total Case</h1>
        <h1>{summary.TotalConfirmed}</h1>
       </div>
       
       <div className="NewDeaths">
        <h1>New Death</h1>
        <h1>{summary.NewDeaths}</h1>
       </div>
       
       <div className="TotalDeaths">
        <h1>Total Death</h1>
        <h1>{summary.TotalDeaths}</h1>
       </div>
       
       <div className="NewRecovered">
        <h1>New Recovered</h1>
        <h1>{summary.NewRecovered}</h1>
       </div>
       
       <div className="TotalRecovered">
        <h1>Total Recovered</h1>
        <h1>{summary.TotalRecovered}</h1>
       </div>
       
        </div>
      </div>    
    )
  }
}

export default Summary ;