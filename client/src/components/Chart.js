import React from 'react';
import Axios from "axios";

//Returns country data specified in url
let country = `${window.location.pathname}`;
Axios({
    method: "GET",
    url: `http://localhost:5000${country}`,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data);
    //console.log(country);
  });



export default function Chart() {
    return (
        <div>
        <h2>Chart</h2>
    </div>
    )
}
