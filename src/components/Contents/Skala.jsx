const Skala = () => {
  const scales = [
    { range: "1-50", label: "Baik", color: "bg-green-300", textColor: "text-green-800" },
    { range: "51-100", label: "Sedang", color: "bg-blue-300", textColor: "text-blue-800" },
    { range: "101-150", label: "Tidak Sehat", color: "bg-yellow-300", textColor: "text-yellow-800" },
    { range: "151-200", label: "Sangat Tidak Sehat", color: "bg-orange-300", textColor: "text-orange-800" },
    { range: "201-300", label: "Berbahaya", color: "bg-red-300", textColor: "text-red-800" }
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {scales.map((scale, index) => (
        <div key={index} className={`flex flex-col justify-between items-center flex-grow p-4 m-2 rounded-lg ${scale.color} shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out`}>
          <span className={`text-xl font-bold ${scale.textColor}`}>{scale.range}</span>
          <span className={`text-lg ${scale.textColor}`}>{scale.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Skala;
