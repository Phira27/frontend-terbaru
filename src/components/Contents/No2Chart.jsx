import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { Typography } from '@mui/material';

function No2Chart() {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [pasirianResponse, lumajangResponse, senduroResponse] = await Promise.all([
        axios.get("https://backend.sikudalumajang.my.id/pasirian/terbaru"),
        axios.get("https://backend.sikudalumajang.my.id/lumajang/terbaru"),
        axios.get("https://backend.sikudalumajang.my.id/senduro/terbaru")
      ]);

      const pasirianData = pasirianResponse.data.data;
      const lumajangData = lumajangResponse.data.data;
      const senduroData = senduroResponse.data.data;
      
      const formattedData = pasirianData.map((item, index) => ({
        time: new Date(item.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        pasirian_NO2: item.NO2_concentration,
        lumajang_NO2: lumajangData[index] ? lumajangData[index].NO2_concentration : null,
        senduro_NO2: senduroData[index] ? senduroData[index].NO2_concentration : null
      })).reverse();

      setChartData(formattedData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8">
      <Typography
            variant="h5"
            gutterBottom
            fontFamily="Poppins"
            fontWeight="500"
            textAlign="center"
          >
            NO₂ Concentration
          </Typography>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" stroke="#888888" tick={{ fill: '#888888' }} />
            <YAxis stroke="#888888" tick={{ fill: '#888888' }} />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
            <Legend verticalAlign="top" height={36} iconType="circle" />
            <Line type="monotone" dataKey="pasirian_NO2" stroke="#8884d8" strokeWidth={2} dot={false} name="Pasirian" />
            <Line type="monotone" dataKey="lumajang_NO2" stroke="#82ca9d" strokeWidth={2} dot={false} name="Lumajang" />
            <Line type="monotone" dataKey="senduro_NO2" stroke="#ffc658" strokeWidth={2} dot={false} name="Senduro" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-600">No data available</p>
      )}
    </div>
  );
}

export default No2Chart;