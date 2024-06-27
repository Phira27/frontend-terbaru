import TemperatureChart from './TemperatureChart';
import HumidityChart from './HumidityChart';
import No2Chart from './No2Chart';
import Pm10Chart from './Pm10Chart';
import Pm25Chart from './Pm25Chart';
import StatusSenduro from './StatusSenduro';
import StatusDawuhan from './StatusLumajang';
import StatusPasirian from './StatusPasirian';
import Skala from './Skala';

const Contents = () => {
  
  return (
    <div className='mt-32'>
      {/* Grid for main charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <No2Chart  />
        <Pm10Chart  />
        <Pm25Chart  />
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
