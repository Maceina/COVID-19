import React from 'react'
import Axios from "axios";

//Returns all distinct countries
Axios({
    method: "GET",
    url: "http://localhost:5000",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data);
  });


export default function CountryPicker() {
    return (
        <div>
           <h1> Country Picker</h1>
        </div>
    )
}
