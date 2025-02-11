import { Link } from "react-router-dom";
import Image from "../assets/images/JournessaLogo.png";
import { ModeToggle } from "./ModeToggle";
export function Header() {
  return (
    <>
      <div className="flex justify-around justify-items-center gap-6 mt-4 cursor-pointer sticky top-0 w-full z-50">
        <div className="py-2"><Link to={'/'}><img className="h-10 flex-none" src={Image} /></Link></div>
        <div className="flex w-200 gap-5 font-semibold ">
          <ul className="list-none flex gap-6 py-4 justify-items-center font-semibold">
            <li className="ml-2 ">Destinations</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Bookings</li>
          </ul>
          <div className=" flex gap-3 items-center">
            <Link to={'/auth'} ><button >Login</button></Link>
            <button className="flex gap-1 items-center">EN<svg className="cursor-default" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
 