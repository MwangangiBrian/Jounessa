import { useState } from 'react';
import Img1 from '../assets/images/destinations/athens-greece.avif';
import Img2 from '../assets/images/destination.png';
import Img3 from '../assets/images/payment.png';
import Img4 from '../assets/images/reach-airport.png';
import italy from '../assets/images/destinations/Colosseum-rome-italy.jpg';
import London from '../assets/images/destinations/london.webp';
import Paris from '../assets/images/destinations/paris.webp';
import Istanbul from '../assets/images/destinations/istanbul-turkey.avif';

interface Destinations {
  id: number;
  image: string;
  city: string;
  country: string;
  cost: number;
  days: number;
}

export function Destinations() {
  const [startIndex, setStartIndex] = useState(0);
  const destinations: Destinations[] = [
    {
      id: 1,
      image: italy,
      city: 'Rome',
      country: 'Italy',
      cost: 5.42,
      days: 10,
    },
    {
      id: 2,
      image: London,
      city: 'London',
      country: 'UK',
      cost: 4.2,
      days: 12,
    },
    {
      id: 3,
      image: Paris,
      city: 'Paris',
      country: 'France',
      cost: 15,
      days: 14,
    },
    {
      id: 4,
      image: Istanbul,
      city: 'Istanbul',
      country: 'Turkey',
      cost: 3.5,
      days: 7,
    },
  ];

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % destinations.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  // Get 3 destinations to display, handling wrap-around
  const visibleDestinations = Array.from({ length: 3 }, (_, i) => {
    const index = (startIndex + i) % destinations.length;
    return destinations[index];
  });

  return (
    <>
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h4 className="font-semibold text-sm mb-2">Top Selling</h4>
          <h1 className="text-4xl font-bold">Top Destinations</h1>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 
          rounded-full bg-white shadow-lg flex items-center justify-center
          hover:bg-gray-50 transition-colors duration-300 z-10"
        >
          <svg
            className="w-6 h-6 text-[#14183E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex gap-8 justify-center items-center">
          {visibleDestinations.map((destination) => (
            <div
              key={destination.id}
              className="w-[314px] bg-white rounded-[24px] overflow-hidden shadow-lg
              transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={destination.image}
                alt={`${destination.city}, ${destination.country}`}
                className="w-full h-[327px] object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[#5E6282]">
                    {destination.city}, {destination.country}
                  </p>
                  <p className="text-[#5E6282]">${destination.cost}k</p>
                </div>
                {/* width="15" height="15" */}
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 17.00 17.00"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="si-glyph si-glyph-paper-plane"
                    fill="#000000"
                    transform="rotate(0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <title>924</title> <defs> </defs>{' '}
                      <g stroke-width="1.7" fill="none" fill-rule="evenodd">
                        {' '}
                        <path
                          d="M17,1.042 L11.436,14.954 L7.958,11.477 L8.653,13.563 L7.03,14.958 L7.03,11.563 L14.984,3.375 L6.047,9.969 L1,8.694 L17,1.042 Z"
                          fill="#000000"
                          className="si-glyph-fill"
                        >
                          {' '}
                        </path>{' '}
                      </g>{' '}
                    </g>
                  </svg>

                  <p className="text-[#5E6282]">{destination.days} Days Trip</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 
          rounded-full bg-white shadow-lg flex items-center justify-center
          hover:bg-gray-50 transition-colors duration-300 z-10"
        >
          <svg
            className="w-6 h-6 text-[#14183E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Bookings Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex gap-20 justify-between items-center">
          {/* Left Content */}
          <div className="flex-1">
            <span className="text-[#5E6282] font-semibold mb-4 block">
              Easy and Fast
            </span>
            <h2 className="text-[#14183E] text-5xl font-bold mb-8">
              Book Your Next Trip
              <br />
              In 3 Easy Steps
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-[13px] bg-[#F0BB1F] bg-opacity-20 flex items-center justify-center">
                  <img src={Img2}></img>
                </div>
                <div>
                  <h3 className="text-[#5E6282] font-bold mb-1">
                    Choose Destination
                  </h3>
                  <p className="text-[#5E6282] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-[13px] bg-[#F15A2B] bg-opacity-20 flex items-center justify-center">
                  <img src={Img3}></img>
                </div>
                <div>
                  <h3 className="text-[#5E6282] font-bold mb-1">
                    Make Payment
                  </h3>
                  <p className="text-[#5E6282] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-[13px] bg-[#006380] bg-opacity-20 flex items-center justify-center">
                  <img src={Img4}></img>
                </div>
                <div>
                  <h3 className="text-[#5E6282] font-bold mb-1">
                    Reach Airport on Selected Date
                  </h3>
                  <p className="text-[#5E6282] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Trip Card */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-[354px] h-[367px] bg-[#59B1E6] opacity-[0.05] rounded-[26px] rotate-[-12deg]" />

              {/* Main Card */}
              <div
                className="relative bg-white rounded-[26px] p-6 
                shadow-[0px_100px_80px_rgba(0,0,0,0.02),0px_64.8148px_46.8519px_rgba(0,0,0,0.0151852),0px_38.5185px_25.4815px_rgba(0,0,0,0.0121481),0px_20px_13px_rgba(0,0,0,0.01),0px_8.14815px_6.51852px_rgba(0,0,0,0.00785185),0px_1.85185px_3.14815px_rgba(0,0,0,0.00481481)] 
                before:absolute before:-top-10 before:-right-10 before:w-[354px] before:h-[367px] 
                before:bg-[#59B1E6] before:opacity-5 before:rounded-[26px] before:rotate-[-12deg] 
                before:-z-10
                w-[370px]"
              >
                <img
                  src={Img1}
                  alt="Trip to Greece"
                  className="w-full h-[161px] rounded-[24px] object-cover mb-6"
                />

                <h3 className="text-lg font-bold text-[#080809] mb-3">
                  Trip To Greece
                </h3>
                <p className="text-[#84829A] mb-6">14-29 Dec | 2024</p>

                {/* Action Icons */}
                <div className="flex gap-4 mb-6">
                  <button className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg
                      width="20"
                      height="20"
                      className="text-[#F0BB1F]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"></path>
                      <rect width="24" height="24" fill="none"></rect>
                    </svg>
                  </button>
                  <button className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="text-[#84829A]"
                    >
                      <path
                        d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4"
                        stroke="currentColor"
                        strokeWidth="1.224"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      className="text-[#84829A]"
                    >
                      <path d="M29.3,2.6c-0.3-0.2-0.7-0.3-1-0.2L3,11.7c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l10.2,3.8l10-10 c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-9.8,9.8l6.6,10.6c0.2,0.3,0.5,0.5,0.8,0.5c0.1,0,0.1,0,0.2,0c0.4-0.1,0.7-0.4,0.8-0.7l6.2-25.2 C29.7,3.3,29.6,2.9,29.3,2.6z"></path>
                    </svg>
                  </button>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="text-[#84829A]"
                    >
                      <path d="M19 2H5C3.346 2 2 3.346 2 5v2.831c0 1.053.382 2.01 1 2.746V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9.424c.618-.735 1-1.692 1-2.746V5c0-1.654-1.346-3-3-3zm1 3v2.831c0 1.14-.849 2.112-1.891 2.167L18 10c-1.103 0-2-.897-2-2V4h3c.552 0 1 .449 1 1zM10 4h4v4c0 1.103-.897 2-2 2s-2-.897-2-2V4zM4 5c0-.551.448-1 1-1h3v4c0 1.103-.897 2-2 2l-.109-.003C4.849 9.943 4 8.971 4 7.831V5zm2 14v-4h12v4H6z" />
                    </svg>
                    <span className="text-[#84829A]">24 people going</span>
                  </div>
                  <button className="text-[#DB4D6D] hover:text-[#DB4D6D]/80 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>

                {/* Ongoing Trip Card */}
                <div
                  className="absolute -bottom-24 -right-16 bg-white rounded-[18px] p-4 
                  shadow-[0px_100px_80px_rgba(0,0,0,0.02),0px_64.8148px_46.8519px_rgba(0,0,0,0.0151852),0px_38.5185px_25.4815px_rgba(0,0,0,0.0121481),0px_20px_13px_rgba(0,0,0,0.01),0px_8.14815px_6.51852px_rgba(0,0,0,0.00785185),0px_1.85185px_3.14815px_rgba(0,0,0,0.00481481)]
                  w-[263px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={Img1}
                      alt="Ongoing trip"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[#84829A] text-sm">Ongoing</p>
                      <h4 className="font-bold text-[#080809]">Trip to rome</h4>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8A79DF]">40% completed</span>
                    <div className="w-20 h-1.5 bg-[#F5F5F5] rounded-full">
                      <div className="w-[40%] h-full bg-[#8A79DF] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
