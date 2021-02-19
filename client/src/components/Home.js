import React from 'react'
import Chart from './Chart';
import CountryPicker from './CountryPicker';

export default function Home() {
    return (
        <div>
            <CountryPicker/>
            <Chart/>
        </div>
    )
}
