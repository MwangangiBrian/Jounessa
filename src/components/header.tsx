export function Header() {
  return (
    <>
      <div className="flex justify-between  ">
        <div className="py-2">Journessa</div>
        <div className="flex gap-8">
          <ul className="list-none flex gap-3 py-2">
            <li className="ml-2">Destinations</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Bookings</li>
          </ul>
          <div className="flex gap-3 m">
          <button>Login</button>
          <button className="rounded border-solid border-2 border-black px-5 py-2">Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
}
