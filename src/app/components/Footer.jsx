// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12 ">
            <div className="flex flex-col items-center">
              <img src="homebutton.png" alt="Industry Specialists" className="w-12 h-12" />
              <p className="mt-2 text-sm text-gray-900">Industry Specialists</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="verify.png" alt="Guaranteed Results" className="w-12 h-12" />
              <p className="mt-2 text-sm text-gray-900">Guaranteed Results</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="searching.png" alt="Qualified Leads" className="w-12 h-12" />
              <p className="mt-2 text-sm text-gray-900">Qualified Leads</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold text-[#0000ff]">HOY<span className="text-gray-900">PEAK</span></h1>
          <p className="mt-2 text-sm text-gray-600">Your Hoy, Our Peak</p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">HoyPeak - ©2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
