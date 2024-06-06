import React from 'react'


const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-orange-600">
              HOY<span className="text-[#0000ff]">PEAK</span>
            </h1>
            <p className="text-center text-sm text-[#0000ff]">Your Hoy, Our Peak</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
