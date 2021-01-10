import React from "react";

import Cards from "./components/Cards/Cards.jsx";
import Chart from "./components/Chart/Chart.jsx";
import CountryPicer from "./components/CountryPicer/CountryPicer.jsx";

import coronaImg from "./images/covid-19-img.png";
//import CardsWithMap from "./components/CradsWithMap/CardsWithMap.jsx";

import styles from "./App.module.css";

import { fetchData } from "./api";

class App extends React.Component {
  state = { data: {}, country: "" };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    console.log(country);
    console.log(fetchData);
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImg} alt="COVID-19"></img>
        <Cards data={data} />
        <CountryPicer handleCountryChange={this.handleCountryChange} />
        {/* <CardsWithMap data={data} /> */}
        <Chart
          data={data}
          confirmed={data.confirmed}
          recovered={data.recovered}
          deaths={data.deaths}
          lastUpdate={data.lastUpdate}
          country={country}
        />
      </div>
    );
  }
}
export default App;
