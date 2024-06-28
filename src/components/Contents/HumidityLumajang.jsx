import { FaThermometerHalf, FaTint } from 'react-icons/fa';
import LumajangAPI from '../../api/LumajangAPI';

const HumidityLumajang = () => {
  const latestData = LumajangAPI();

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(dateString).toLocaleDateString('id', options);
  };

  if (!latestData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg text-white w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-4 sm:mt-6 md:mt-10 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-0">Lumajang</div>
        <div className="text-sm sm:text-base md:text-xl">{formatDate(latestData.time)}</div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-0 sm:mb-0">
          <FaThermometerHalf className="text-2xl sm:text-3xl mr-2" />
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold">{latestData.temperature}°C</div>
        </div>
        <div className="flex items-center">
          <FaTint className="text-2xl sm:text-3xl mr-2" />
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold">{latestData.humidity}%</div>
        </div>
      </div>
    </div>
  );
};

export default HumidityLumajang;