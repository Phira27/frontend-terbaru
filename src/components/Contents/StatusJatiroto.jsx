import React, { useState, useEffect } from 'react';
import axios from "axios";

const StatusJatiroto = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [weatherData, setWeatherData] = useState(null); // State untuk menyimpan data cuaca

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/hydra');
        setWeatherData(response.data); // Mengupdate state dengan data dari API
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(() => {
      const now = new Date();
      // Atur zona waktu ke GMT+7
      now.setHours(now.getHours() + 7);
      setCurrentTime(now.toLocaleString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }));
    }, 1000); // Update setiap detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl px-5 py-5 text-zinc-600 bg-white
      border-slate-300 max-w-md md:max-w-2xl box-content h-300 w-600 border-2
      transition-transform transform hover:scale-105 hover:shadow-lg
      duration-300 ease-in-out rounded-sm">
      <div className="flex justify-between items-center h-full">
        <div className="flex">
          <img src="./src/assets/wind.png" className="animate-pulse" width={120} height={80} alt="Wind" />
          <div className="ml-4 flex flex-col justify-center">
            <div className="inline-block align-middle flex flex-col items-center">
              <div className="text-4xl font-bold px-20 animate-bounce">{weatherData?.temperature || '101'}</div>
              <div className="text-xl mt-1 justify-stretch">{weatherData?.condition || 'Tidak Sehat'}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-2xl font-semibold">{weatherData?.location ||'Jatiroto'}</div>
          <div className="text-lg py-1">{currentTime}</div>
        </div>
      </div>
    </div>
  );
};

export default StatusJatiroto;