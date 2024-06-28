import { useState, useEffect } from 'react';
import axios from "axios";

const SenduroAPI = () => {
  const [latestData, setLatestData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://back-end-terbaru.vercel.app/senduro/terbaru');
      setLatestData(response.data.data[0]);
      console.log(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return latestData;
};

export default SenduroAPI;