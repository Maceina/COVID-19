import React, { useState, useEffect } from "react";
import { Line } from "@reactchartjs/react-chart.js";
import axios from "axios";

//props.conuntryName is the name of selected country
export default function Chart(props) {

  const [data, setData] = useState([]);
  useEffect(() => {
    if (props.countryName !== "") {
      setData();
      //console.log("After cleanup");
      //console.log(data);
      const fetchData = async () => {
        const result = await axios(
          `http://localhost:5000/${props.countryName}`
        );
        setData(result.data);
      };
      fetchData();
    }
  }, [props.countryName]);
  //console.log("after effect");
  //console.log(data);

  //returns an array of cases related data
  var cases = [];
  if (data && data.length) {
    for (var i = 0; i < data.length - 1; i++) {
      if (data[i].indicator === "cases") {
        cases.push(data[i]);
      }
    }
  }
  //console.log("cases array");
  //console.log(cases);

  //returns an array of deaths related data
  var deaths = [];
  if (data && data.length) {
    for (var i = 0; i < data.length - 1; i++) {
      if (data[i].indicator === "deaths") {
        deaths.push(data[i]);
      }
    }
  }
  //console.log("deaths array");
  //console.log(deaths);
  // returns an array of death counts per week
  var deathsCount = [];
  if (deaths && deaths.length) {
    for (var i = 0; i < deaths.length - 1; i++) {
      deathsCount.push(deaths[i].weekly_count);
    }
  }
 // console.log("deaths Count array");
 // console.log(deathsCount);

  // returns an array of cases per week
  var casesCount = [];
  if (cases && cases.length) {
    for (var i = 0; i < cases.length - 1; i++) {
      casesCount.push(cases[i].weekly_count);
    }
  }
 // console.log("Cases Count array");
 // console.log(casesCount);

  // returs an array of weeks
  var weeks = [];
  if (cases && cases.length) {
    for (var i = 0; i < cases.length - 1; i++) {
      weeks.push(cases[i].year_week);
    }
  }
  //console.log("Weeks array");
  //console.log(weeks);

  //defining data for chart
  const chartData = {
    labels: weeks,
    datasets: [
      {
        label: "Cases",
        data: casesCount,
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: "y-axis-1",
      },
      {
        label: 'Deaths',
        data: deathsCount,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: 'y-axis-1',
      }
    ],
  };
  //Options for chart
  const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              drawOnArea: false,
            },
          },
      ],
    },
  }


  return (<div className="chartDisplay">
      
             <h1 className="selected">Selected country: {props.countryName}</h1>
             <Line data={chartData} options={options}/>
             </div>
             
  
  );
  }
