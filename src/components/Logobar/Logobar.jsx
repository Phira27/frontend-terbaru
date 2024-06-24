import React from "react";

const Logobar = () => {
  return (
    <div className="flex items-center w-full h-full px-4 bg-slate-900 shadow-md z-50">
      <button
        onClick={() => window.location.reload()}
        className="flex justify-start items-center w-fit"
      >
        <img
          src={"./src/assets/logo.png"}
          alt="Polinema Logo Images"
          width="64"
          height="64"
          className="aspect-square w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] mr-5"
        />
        <div className="text-start">
          <p className="leading-none text-sm lg:text-lg mb-1 text-zinc-100 tracking-wide font-medium">
            Pemantau Kualitas Udara
          </p>
          <p className="leading-none text-[0.79em] text-zinc-100 tracking-wide mb-1">
            Kabupaten Lumajang
          </p>
          <p className="leading-none text-[0.79em] text-zinc-100 tracking-wide">
            Polinema PSDKU Lumajang
          </p>
        </div>
      </button>
    </div>
  );
};

export default Logobar;
