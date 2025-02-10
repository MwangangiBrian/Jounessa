import Img from '../assets/images/Traveller 1.png';
import { Header } from './header';
import { Services } from './services';
import { Destinations } from './destinations';
import { Testimonials } from './testimonials';
import { Footer } from './footer';

export function LandingPage() {
  return (
    <>
    <Header />
      <div className="flex justify-center items-center mb-4">
        <div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xs font-bold text-orange-500'>BEST DESTINATIONS AROUND THE WORLD</h2>
            <p className='text-6xl font-bold'>Travel, enjoy<br/> and live a <br/>full life</p>
            <p className='text-sm text-slate-600'>
              Build Wicket longer admire so barton vanity itself do in
              it <br/>Preferred to sportsmen it engrosed listening. Park gate<br/>self
              they west hard for life
            </p>
            <div className="flex gap-4">
              <button className="rounded-sm bg-[#fbbf24] px-5 py-0.5 font-semibold drop-shadow-md">
                Find out more
              </button>
              <div className="flex items-center gap-2">
                <button>
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 135 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="67.5" cy="67.5" r="67.5" fill="#F24E1E" />
                    <g filter="url(#filter0_d_2713_968)">
                      <path
                        d="M97.8129 65.4404C99.7266 66.6103 99.7266 69.3897 97.8129 70.5596L55.5647 96.3864C53.5657 97.6085 51 96.1698 51 93.8268V42.1732C51 39.8302 53.5657 38.3915 55.5647 39.6136L97.8129 65.4404Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_2713_968"
                        x="47"
                        y="39.1685"
                        width="56.2482"
                        height="65.6631"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2713_968"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2713_968"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </button>
                <button className="mx-3 py-1 font-semibold">Play Demo</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Img} />
        </div>
      </div>
      <Services />
      <Destinations />
      <Testimonials />
      <Footer />
    </>
  );
}
