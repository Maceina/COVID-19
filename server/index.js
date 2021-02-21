const express = require("express");
const cors = require("cors");
const axios = require("axios");

//const data = require('./data/data.json');
const dataUrl ="https://opendata.ecdc.europa.eu/covid19/nationalcasedeath/json/";
const app = express();
const port = 5000 || process.env.port;
app.use(cors());

//Read data from external point
const getData = () => {
  return axios.get(dataUrl).then((response) => {
    response = response.data;
    return response;
  });
};

//Fetched data from external point
getData().then((data) => {
  //Rest api endpoint, country passed as a parameter
  app.get("/:country", (req,res)=>{
    const oneCountryData = data.filter(element => element.country === req.params.country);
    res.send(oneCountryData);
  })
  //Rest api endpoint, return all distinct country names
  app.get("/",(req,res)=>{
    const uniqueCountryNames = [...new Set(data.map(item => item.country))]
    res.send(uniqueCountryNames);
  })
});


app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
