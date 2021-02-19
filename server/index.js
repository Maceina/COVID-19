const express = require('express');
const cors = require('cors');
const data = require('./data/data.json');

const app = express();
const port = 5000 || process.env.port;
app.use(cors());

//Distinct country names
const uniqueCountryNames = [...new Set(data.map(item => item.country))];

//Gets all data of a country passed as paramenter
app.get('/:country', (req, res) => {
    const oneCountryData = data.filter(element => element.country === req.params.country);
    //console.log(data);
    res.send(oneCountryData);
});

//Gets all unique countries
app.get('/', (req, res) => {
  res.send(uniqueCountryNames);
});


app.listen(port, () => console.log(`App listening at http://localhost:${port}`));