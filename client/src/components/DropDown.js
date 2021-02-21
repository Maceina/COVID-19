import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Chart from "./Chart";
import axios from "axios";

function DropDown() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    //console.log(e);
    setValue(e);
  };

  const distinctCountiesUrl = "http://localhost:5000/";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(distinctCountiesUrl);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
      <div className="selectButton">
    <DropdownButton
    alignRight="true"
      title="Select Country"
      id="dropdown"
      size="lg"
      block
      variant="secondary"

      onSelect={handleSelect}
    >
      {data.map((item) => (
        <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>
      ))}
    </DropdownButton>
    <Chart countryName={value}/>
    </div>
  );
}

export default DropDown;
