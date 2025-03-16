import { Overview } from './Overview';
import { Sidebar } from './Sidebar';

const Dashboard = () => {
  return (
    <>
      <div className="flex gap-1">
        <Sidebar />
        <Overview />
      </div>
    </>
  );
};

export default Dashboard;
