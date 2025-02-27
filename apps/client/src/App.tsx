import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/landingpage';
import { UserAuth } from './components/auth/UserAuth';
import { ThemeProvider } from './components/ThemeProvider';
import { Locations } from './components/locations/Locations';
import Hotels from './components/hotels/Hotels';

function App() {
  return (
    <>
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/auth" element={<UserAuth />}></Route>
          <Route path="/locations" element={<Locations />}></Route>
          <Route path="/hotels" element={<Hotels />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
