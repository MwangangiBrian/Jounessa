import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/landingpage';
import { UserAuth } from './components/auth/UserAuth';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/auth" element={<UserAuth />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
