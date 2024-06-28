import No2Chart from './No2Chart';
import Pm10Chart from './Pm10Chart';
import Pm25Chart from './Pm25Chart';
import StatusSenduro from './StatusSenduro';
import StatusLumajang from './StatusLumajang';
import StatusPasirian from './StatusPasirian';
import Skala from './Skala';
import HumidityLumajang from './HumidityLumajang';
import HumiditySenduro from './HumiditySenduro';
import HumidityPasirian from './HumidityPasirian';

const Contents = () => {
  return (
    <div className='mt-16 sm:mt-24 md:mt-32 px-4 sm:px-6 md:px-8'>
      {/* Grid for main charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6">
        <No2Chart />
        <Pm10Chart />
        <Pm25Chart />
      </div>

      {/* Humidity section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6">
        <HumiditySenduro />
        <HumidityLumajang />
        <HumidityPasirian />
      </div>

      {/* Status section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6">
        <StatusSenduro />
        <StatusLumajang />
        <StatusPasirian />
      </div>

      {/* Skala component */}
      <div className="w-full">
        <Skala />
      </div>
    </div>
  );
};

export default Contents;