import { Destinations } from './components/destinations';
import { Header } from './components/header';
import { LandingPage } from './components/landingpage';
import { Services } from './components/services';
import { Testimonials } from './components/testimonials';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <Services />
      <Destinations />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
