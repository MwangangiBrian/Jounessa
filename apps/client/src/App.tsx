import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/landingpage';
import { Login } from './components/auth/login';
import { Signup } from './components/auth/signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/auth/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
