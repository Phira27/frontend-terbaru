import React, { useState, useEffect } from "react";
import axios from "axios";

function StatusPasirian() {
  // define state
  const [latestData, setLatestData] = useState(null);

  // function "fetchData"
  const fetchData = async () => {
    try {
      // fetching
      const response = await axios.get(
        "http://localhost:3000/pasirian/terbaru"
      );
      // get response data
      const data = response.data;
      // assign data to state "latestData"
      setLatestData(data.data[0]); // Assuming the API returns an array with the latest data as the first item
      console.log(data.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect hook
  useEffect(() => {
    // Fetch data immediately when the component mounts
    fetchData();

    // Set up interval to fetch data every 5 seconds
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    // Clean up function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount and sets up the interval

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id", options);
  };

  if (!latestData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="text-2xl px-5 py-5 text-zinc-600 bg-white
  border-slate-300 max-w-md md:max-w-2xl h-60 w-full border-2
  transition-transform transform hover:scale-105 hover:shadow-lg
  duration-300 ease-in-out rounded-sm"
    >
      <div className="flex justify-between items-center h-full">
        <div className="flex">
          <img
            src="./src/assets/wind.png"
            className="animate-pulse"
            width={120}
            height={80}
            alt="Wind"
          />
          <div className="ml-4 flex flex-col justify-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold animate-bounce">
                {latestData.ispu_average}
              </div>
              <div className="text-xl mt-1">{latestData.category_average}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-2xl font-semibold">Pasirian</div>
          <div className="text-lg py-1">{formatDate(latestData.time)}</div>
        </div>
      </div>
    </div>
  );
}
export default StatusPasirian;
