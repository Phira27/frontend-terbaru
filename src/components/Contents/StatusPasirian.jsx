import PasirianAPI from "../api/PasirianAPI";

function StatusPasirian() {
  const latestData = PasirianAPI();
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id", options);
  };

  if (!latestData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white border-2 border-slate-300 rounded-sm p-4 sm:p-5 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
      <div className="flex flex-col sm:flex-row justify-between items-center h-full">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          <img
            src="./src/assets/wind.png"
            className="animate-pulse w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
            alt="Wind"
          />
          <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col justify-center items-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold animate-bounce text-zinc-600">
              {latestData.ispu_average}
            </div>
            <div className="text-lg sm:text-xl md:text-2xl mt-1 text-zinc-600 text-center">
              {latestData.category_average}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-600">Pasirian</div>
          <div className="text-base sm:text-lg md:text-xl py-1 text-zinc-600">
            {formatDate(latestData.time)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusPasirian;