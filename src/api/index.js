import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeUrl = url;
  try {
    if (country) {
      changeUrl = `${url}/countries/${country}`;
    }
    const { data } = await axios.get(changeUrl);
    const modifiedData = {
      recovered: data.recovered,
      confirmed: data.confirmed,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
    console.log(modifiedData);
    return modifiedData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    console.log(modifiedData);
    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    const mapData = countries.map((country) => country.name);
    console.log(mapData);

    return mapData;
  } catch (error) {
    console.log(error);
  }
};
//fetchCountries();
