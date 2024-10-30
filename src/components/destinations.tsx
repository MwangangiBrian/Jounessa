import Img from '../assets/images/woman-in-red.jpg';
export function Destinations() {
  return (
    <>
      <div>
        <h4>Top selling</h4>
        <h2>Top Destinations</h2>
        <div className="flex gap-3">
          <div>
            <div>
              <p>Rome, italy</p>
              <p>$5,42k</p>
            </div>
          </div>
          <div>
            <p>London, UK</p>
            <p>$4.2k</p>
          </div>
          <div>
            <p>Full Europe</p>
            <p>$15k</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-3">
          <p>Easy and fast</p>
          <h1>book Your Next Trip</h1>
          <h1> In 3 Easy Steps</h1>
          <div className="flex flex-col gap-2">
            <div>
                <img></img>
                <p>Choose Destination</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <img></img>
                <p>Make Payment</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <img></img>
                <p>Get your trip</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
            <img className='h-70 w-20' src={Img} alt="" />
            <p>Trip to Greece</p>
            <p>14 - 29 Aug | 4 days</p>
            <div className='logos flex gap-3'>
                <img></img>
                <img></img>
                <img></img>
            </div>
            <div className='flex'>
                <img></img>
                <p>24 people going</p>
                <img></img>
            </div>
        </div>
      </div>
    </>
  );
}
