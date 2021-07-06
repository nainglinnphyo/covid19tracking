import React from 'react'

class Country extends React.Component{
  
    render(){
    const {filter,currentDate} = this.props
    return (
        <div className="global">
       <h1 className="header">Burma Covid Cases</h1>
       <span>Last Updated {new Date(currentDate).toLocaleString('en-US', { timeZone: 'Asia/Yangon' })} (MM Time)</span>
       <div className="row">
       
       <div className="NewConfirmed">
        <h1>New Case</h1>
        <h1>{filter.NewConfirmed}</h1>
       </div>
       
       <div className="TotalConfirmed">
        <h1>Total Case</h1>
        <h1>{filter.TotalConfirmed}</h1>
       </div>
       
       <div className="NewDeaths">
        <h1>New Death</h1>
        <h1>{filter.NewDeaths}</h1>
       </div>
       
       <div className="TotalDeaths">
        <h1>Total Death</h1>
        <h1>{filter.TotalDeaths}</h1>
       </div>
       
       <div className="NewRecovered">
        <h1>New Recovered</h1>
        <h1>{filter.NewRecovered}</h1>
       </div>
       
       <div className="TotalRecovered">
        <h1>Total Recovered</h1>
        <h1>{filter.TotalRecovered}</h1>
       </div>
       
        </div>
      </div>
        )
    }
}

export default Country
