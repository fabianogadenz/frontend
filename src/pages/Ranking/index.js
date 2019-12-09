import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Chart from "react-apexcharts";



export default function Ranking({ history }) {
  const [infoRanking, setInfoRanking] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [pontos, setPontos] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const token = localStorage.getItem('token');
      //const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDc0MjVjZjYzMGYyM2QxMGI2MGZjOSIsImlhdCI6MTU3NDM4OTk0MCwiZXhwIjoxZSs0MX0.q7aIbbSVuxb9jG3b2ks2d-OlcoA4K9Rk15eO4xrdj-k";
      const response = await api.get('/ranking/getRankUser', {
        headers: { "Authorization": token }
      });

      console.log(response.data);

      var numeros = []
      var perfis = []
      for (var i = 0; i < response.data.pontos.length; i++) {
        numeros.push(response.data.pontos[i]);
        perfis.push(response.data.usuarios[i].nome.substring(0,10) + " - " + response.data.usuarios[i].campus.substring(0,3) );
      }
      setPontos(numeros);
      setUsuarios(perfis);

      setInfoRanking(response.data);
    }
    loadSpots();


  }, [])


  //https://apexcharts.com/docs/react-charts/
  const state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: usuarios
      }
    },
    series: [
      {
        name: "Pontação Geral",
        data: pontos
      }
    ]
  };
  return (
    <>
      <div className="app">
        <h1>Pontuação de 2018</h1>
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