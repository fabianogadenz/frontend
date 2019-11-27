import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";



export default function Ranking() {
    //https://apexcharts.com/docs/react-charts/
    const state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ["Fabiano Gadenz", 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      };
    return (
        <>
            <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="800"
            />
          </div>
        </div>
      </div>
        </>
    )
}