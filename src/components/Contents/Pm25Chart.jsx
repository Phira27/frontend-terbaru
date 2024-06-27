import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function Pm25Chart() {
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
      
      // Combine and transform the data for the chart
      const formattedData = pasirianData.map((item, index) => ({
        time: new Date(item.time).toLocaleTimeString(),
        pasirian_PM25: item.PM25_concentration,
        lumajang_PM25: lumajangData[index] ? lumajangData[index].PM25_concentration : null,
        senduro_PM25: senduroData[index] ? senduroData[index].PM25_concentration : null
      })).reverse(); // Reverse to show oldest data first

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
    <div className='pr-3'>
      <h2 className='text-2xl font-bold text-gray-800 text-center mb-1'>PM 2.5</h2>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
        <LineChart width={400} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pasirian_PM25" stroke="#8884d8" name="Pasirian " />
          <Line type="monotone" dataKey="lumajang_PM25" stroke="#82ca9d" name="Lumajang " />
          <Line type="monotone" dataKey="senduro_PM25" stroke="#ffc658" name="Senduro " />
        </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Pm25Chart;