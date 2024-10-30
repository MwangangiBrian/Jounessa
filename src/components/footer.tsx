import Logo from '../assets/images/JournessaLogo.png';
import Img1 from '../assets/images/Google Play.png';
import Img2 from '../assets/images/apple-store.png';

export function Footer() {
  return (
    <footer className="max-w-[1170px] mx-auto pt-[150px] pb-[80px]">
      <div className="grid grid-cols-5 gap-8">
        {/* Logo Section */}
        <div className="col-span-1">
          <div className="mb-8">
            <img className="h-[34px]" src={Logo} alt="Jadoo Logo" />
          </div>
          <p className="text-[#5E6282] text-[13px] leading-[124.5%] max-w-[207px]">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        {/* Company Section */}
        <div className="col-span-1">
          <h4 className="font-bold text-[21px] text-[#080809] mb-8">Company</h4>
          <ul className="space-y-4">
            <li className="text-[#5E6282] hover:text-[#080809] cursor-pointer">
              About
            </li>
            <li className="text-[#5E6282] hover:text-[#080809] cursor-pointer">
              Careers
            </li>
            <li className="text-[#5E6282] hover:text-[#080809] cursor-pointer">
              Mobile
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="col-span-1">
          <h4 className="font-bold text-[21px] text-[#080809] mb-8">Contact</h4>
          <ul className="space-y-4">
            <li className="text-[#5E6282] hover:text-[#080809] cursor-pointer">
              Help/FAQ
            </li>
            <li className="text-[#5E6282] hover:text-[#080809] cursor-pointer">
              Press
            </li>
            <li className="text-[#5E6282] hover:text-[#080809] cursor-pointer">
              Affiliates
            </li>
          </ul>
        </div>

        {/* More Section */}
        <div className="col-span-1">
          <h4 className="font-bold text-[21px] text-[#080809] mb-8">More</h4>
          <ul className="space-y-4">
            <li className="text-[#5E6282] hover:text-[#080809] cursor-pointer">
              Airline Fees
            </li>
            <li className="text-[#5E6282] hover:text-[#080809] cursor-pointer">
              Airline
            </li>
            <li className="text-[#5E6282] hover:text-[#080809] cursor-pointer">
              Low fare tips
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="col-span-1">
          <div className="flex gap-6 mb-8">
            <div className="w-[41px] h-[41px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300">
              <a href="https://github.com/MwangangiBrian/" target="_blank">
                <svg
                  viewBox="0 0 20 20"
                  width="24"
                  height="24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <title>github [#142]</title>{' '}
                    <desc>Created with Sketch.</desc> <defs> </defs>{' '}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {' '}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -7559.000000)"
                        fill="#000000"
                      >
                        {' '}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {' '}
                          <path
                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                            id="github-[#142]"
                          >
                            {' '}
                          </path>{' '}
                        </g>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>
                </svg>
              </a>
            </div>
            <div className="w-[41px] h-[41px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300">
              <a href="https://x.com/Bry_Mwangangi/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="26"
                  height="26"
                  viewBox="0 0 30 30"
                >
                  <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg>
              </a>
            </div>
            <div className="w-[41px] h-[41px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300">
              <a
                href="https://www.linkedin.com/in/brian-mwangi-643a23230/"
                target="_blank"
              >
                <svg
                  fill="#000000"
                  viewBox="0 0 32.00 32.00"
                  height="34"
                  width="34"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#000000"
                  stroke-width="0.544"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <title>linkedin</title>{' '}
                    <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"></path>{' '}
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <h4 className="text-[20px] text-[#5E6282] mb-4">Explore our app</h4>
          <div className="flex gap-4">
            <img
              className="h-[35px] cursor-pointer hover:opacity-80 transition-all duration-300"
              src={Img1}
              alt="Google Play"
            />
            <img
              className="h-[35px] cursor-pointer hover:opacity-80 transition-all duration-300"
              src={Img2}
              alt="App Store"
            />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-20">
        <p className="text-[#5E6282] text-[14px]">
          All rights reserved@Journessa.co
        </p>
      </div>
    </footer>
  );
}
