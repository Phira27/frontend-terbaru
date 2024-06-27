import { useState, useEffect } from 'react';
import axios from 'axios';
import TemperatureChart from './TemperatureChart';
import HumidityChart from './HumidityChart';
import No2Chart from './No2Chart';
import Pm10Chart from './Pm10Chart';
import Pm25Chart from './Pm25Chart';
import StatusSenduro from './StatusSenduro';
import StatusDawuhan from './StatusLumajang';
import StatusPasirian from './StatusPasirian';
import PieChart from './PieChart';
import Skala from './Skala';

const Contents = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        console.log('Data fetched:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Optional: Set default data for debugging purposes
        setData([
          {
            temperature: 25,
            humidity: 60,
            no2: 20,
            pm10: 30,
            pm25: 15,
          },
        ]);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-32'>
      {/* Grid for main charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <TemperatureChart data={data[0].temperature} />
        <HumidityChart data={data[0].humidity} />
        <No2Chart data={data[0].no2} />
        <Pm10Chart data={data[0].pm10} />
        <Pm25Chart data={data[0].pm25} />
      </div>

      {/* Flexbox for status and pie chart */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5 pl-10 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-1">
          <div className="col-span-1">
            <StatusSenduro />
          </div>
          <div className="col-span-1">
            <StatusDawuhan />
          </div>
          <div className="col-span-1 flex-1">
            <StatusPasirian />
          </div>
        </div>
        <div className="flex justify-center items-center pb-6">
          <div className="flex-1">
            <PieChart data={data[0]} />
          </div>
        </div>
      </div>

      {/* Skala component */}
      <div className="w-full pt-6 pl-8">
        <Skala />
      </div>
    </div>
  );
};

export default Contents;
