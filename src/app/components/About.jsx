
import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-black-900 mb-8">
          Who Are <span className="text-[#0000ff]">We</span>?
        </h1>
        <p className="text-lg text-gray-700 mb-16">
          We're a Chiswick-based agency that helps home improvement companies by delivering top-tier, quote-ready leads through strategic advertising on popular social media sites. Our targeted approach not only frees you up to concentrate on your work, but also ensures your growth is driven by genuinely interested clients, making your business growth smooth and efficient.
        </p>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our <span className="text-[#0000ff]">Process</span></h2>
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 space-y-8 md:space-y-0">
          <div className="flex-1 text-center">
            <div className="text-6xl text-[#0000ff] mb-4">1</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Gather Content</h3>
            <p className="text-gray-700">
              In the initial step, we collect visuals that highlight your craftsmanship. These form the foundation of our strategy, serving to attract a greater number of potential clients to your business.
            </p>
          </div>
          <div className="flex-1 text-center">
            <div className="text-6xl text-[#0000ff] mb-4">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Launch Ads</h3>
            <p className="text-gray-700">
              Next, we launch ads based on the content we've collected. These ads are strategically designed and placed on popular social media platforms to capture clients' attention.
            </p>
          </div>
          <div className="flex-1 text-center">
            <div className="text-6xl text-[#0000ff] mb-4">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Generate Leads</h3>
            <p className="text-gray-700">
              Finally, we collect information from individuals who are genuinely interested in your services. Prioritising quote-ready leads and eliminating tire kickers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
