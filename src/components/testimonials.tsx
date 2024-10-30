import { useState } from 'react';
import Img1 from '../assets/images/axon-airlines.png';
import Img2 from '../assets/images/jetstar.png';
import Img3 from '../assets/images/expedia.png';
import Img4 from '../assets/images/quantas.png';
import Img5 from '../assets/images/alitalia.png';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  image: string;
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next.',
      name: 'Mike Taylor',
      location: 'Lahore, Pakistan',
      image: '/testimonials/mike.jpg',
    },
    {
      id: 2,
      quote:
        'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next.',
      name: 'Chris Thomas',
      location: 'CEO of Red Button',
      image: '/testimonials/chris.jpg',
    },
    {
      id: 3,
      quote:
        'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next.',
      name: 'Sarah Johnson',
      location: 'Lead Designer',
      image: '/testimonials/sarah.jpg',
    },
  ];

  const handleCardClick = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-20">
          {/* Left content */}
          <div className="flex-1">
            <p className="text-sm font-bold tracking-[0.2em] text-[#14183E] mb-4">
              TESTIMONIALS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#14183E] leading-tight">
              What People Say
              <br />
              About Us.
            </h2>
          </div>

          {/* Stacked Cards */}
          <div className="flex-1 relative h-[400px]">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              const isNext = index === (activeIndex + 1) % testimonials.length;
              const isNextNext =
                index === (activeIndex + 2) % testimonials.length;

              return (
                <div
                  key={testimonial.id}
                  className={`absolute w-full transition-all duration-500 cursor-pointer
                  ${isActive ? 'z-30 top-0 opacity-100 scale-100' : ''}
                  ${isNext ? 'z-20 top-4 opacity-80 scale-95' : ''}
                  ${isNextNext ? 'z-10 top-8 opacity-60 scale-90' : ''}
                  ${!isActive && !isNext && !isNextNext ? 'opacity-0' : ''}
                `}
                  onClick={handleCardClick}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex gap-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[#5E6282] mb-6">
                          {testimonial.quote}
                        </p>
                        <p className="font-bold text-[#5E6282]">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-[#5E6282]">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Navigation Dots */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300
                  ${index === activeIndex ? 'bg-[#14183E]' : 'bg-[#E5E5E5]'}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="flex gap-6 justify-center items-center mb-10">
        <img
          className="h-20 w-auto  grayscale hover:grayscale-0 transition-all duration-300 "
          src={Img1}
        ></img>
        <img
          className="h-20 w-auto  grayscale hover:grayscale-0 transition-all duration-300"
          src={Img2}
        ></img>
        <img
          className="h-20 w-auto  grayscale hover:grayscale-0 transition-all duration-300"
          src={Img3}
        ></img>
        <img
          className="h-8 w-auto  grayscale hover:grayscale-0 transition-all duration-300"
          src={Img4}
        ></img>
        <img
          className="h-5 w-auto  grayscale hover:grayscale-0 transition-all duration-300"
          src={Img5}
        ></img>
      </div>

      <div className="max-w-[1170px] mx-auto bg-slate-100 rounded-[20px] p-12 relative shadow-lg mb-20">
        <div className="text-center">
          <p className="text-[#5E6282] text-[24px] font-semibold mb-[74px]">
            Subscribe to get information, latest news and other interesting
            offers from us
          </p>
          <div className="flex gap-6 justify-center items-center ">
            <div className="relative">
              <input
                placeholder="Your email"
                className="py-4 px-8 rounded-[10px] min-w-[421px] border border-slate-100 focus:outline-none focus:border-[#FF946D]"
              />

              <svg
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
                width="20px"
                height="20px"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.144"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                    stroke="#000000"
                    stroke-width="1.656"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{' '}
                </g>
              </svg>
            </div>
            <button className="bg-gradient-to-t from-[#FF946D] to-[#FF7D68] text-white px-12 py-4 rounded-[10px] hover:shadow-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-6 -right-6 w-[70px] h-[70px] bg-[#59B1E6] rounded-full opacity-20"></div>
        <div className="absolute top-12 -right-6 w-[30px] h-[30px] bg-[#59B1E6] rounded-full opacity-20"></div>
        <div className="absolute -top-6 -left-6 w-[50px] h-[50px] bg-[#DFD7F9] rounded-full opacity-20"></div>
      </div>
    </>
  );
}
