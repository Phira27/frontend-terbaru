import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function No2Chart() {
  const [chartData, setChartData] = useState([]);

  const fetchData = async () => {
    try {
      const [pasirianResponse, lumajangResponse, senduroResponse] = await Promise.all([
        axios.get("http://localhost:3000/pasirian/terbaru"),
        axios.get("http://localhost:3000/lumajang/terbaru"),
        axios.get("http://localhost:3000/senduro/terbaru")
      ]);

      const pasirianData = pasirianResponse.data.data;
      const lumajangData = lumajangResponse.data.data;
      const senduroData = senduroResponse.data.data;
      
      // Menggabungkan dan mentransformasikan data untuk grafik
      const formattedData = pasirianData.map((item, index) => ({
        time: new Date(item.time).toLocaleTimeString(),
        pasirian_NO2: item.NO2_concentration,
        lumajang_NO2: lumajangData[index] ? lumajangData[index].NO2_concentration : null,
        senduro_NO2: senduroData[index] ? senduroData[index].NO2_concentration : null
      })).reverse(); // Membalik untuk menampilkan data terbaru di bagian paling atas

      setChartData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='pr-3' >
      <h2 className='text-2xl font-bold text-gray-800 text-center mb-1'>NO2</h2>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pasirian_NO2" stroke="#8884d8" name="Pasirian" animationDuration={300} />
            <Line type="monotone" dataKey="lumajang_NO2" stroke="#82ca9d" name="Lumajang" animationDuration={300} />
            <Line type="monotone" dataKey="senduro_NO2" stroke="#ffc658" name="Senduro" animationDuration={300} />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default No2Chart;
