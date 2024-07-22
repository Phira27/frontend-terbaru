import SenduroAPI from "../../api/SenduroAPI";
import windIcon from "../../assets/wind.png";

const StatusSenduro = () => {
  const latestData = SenduroAPI();
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id', options);
  };

  if (!latestData) {
    return <div>Memuat...</div>;
  }

  return (
    <div className="bg-white border-2 border-slate-300 rounded-sm p-4 max-w-full w-full transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
      <div className="flex flex-col sm:flex-row justify-between items-center h-full">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0 w-full sm:w-auto">
          <img
            src={windIcon}
            className="animate-pulse w-20 h-20 sm:w-24 sm:h-24"
            alt="Angin"
          />
          <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col justify-center items-center">
            <div className="text-2xl sm:text-3xl font-bold animate-bounce text-zinc-600">
              {latestData.ispu_average % 1 === 0 ? latestData.ispu_average : latestData.ispu_average.toFixed(2)}
            </div>
            <div className="text-base sm:text-lg mt-1 text-zinc-600 text-center">
              {latestData.category_average}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0">
          <div className="text-xl sm:text-2xl font-bold text-zinc-600">Senduro</div>
          <div className="text-sm sm:text-base py-1 text-zinc-600">
            {formatDate(latestData.time)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusSenduro;