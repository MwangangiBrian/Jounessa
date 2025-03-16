export const Overview = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex gap-3">
          <h1> Welcome back</h1>
          <div>
            <img
              src="https://placehold.co/600x400"
              alt="image"
              height={10}
              width={10}
              className="radius-full"
            />
          </div>
        </div>
        <div className="flex">
          <h2>Dashboard</h2>
        </div>
      </div>
    </>
  );
};
