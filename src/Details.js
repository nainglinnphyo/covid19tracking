import React from "react";
import axios from "axios";
import Summary from "./Summary";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Country from './Country'

class Details extends React.Component {
  state = {
    countries: [],
    global: [],
    currentDate: null,
    loading: true,
  };

  async componentDidMount() {
    const res = await axios.get("https://api.covid19api.com/summary");
    console.log(res);
    this.setState({ countries: res.data.Countries });
    this.setState({ global: res.data.Global });
    this.setState({ currentDate: res.data.Date });
    setTimeout(() => {
        this.setState({ loading: false });
      }, 4000);
    
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="Loading">
          <Loader
            type="BallTriangle"
            color="#ee0cf2"
            height={180}
            width={180}
            timeout={4000} //3 secs
          />
        </div>
      );
    }

    return (
      <div>
        <Summary
          summary={this.state.global}
          currentDate={this.state.currentDate}
        />
        {this.state.countries
          .filter((person) => person.CountryCode === "MM")
          .map((filterCountry) => (
                <Country filter={filterCountry} key={filterCountry.Country} currentDate={this.state.currentDate}/>
          ))}
           <p class="cp-text">
             © Copyright 2021 Poke_Si. All rights reserved.
           </p>  
      </div>
    );
  }
}

export default Details;
