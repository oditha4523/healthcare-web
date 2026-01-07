import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Statistics from './components/Statistics/Statistics';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import Doctors from './components/Doctors/Doctors';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Statistics />
        <Services />
        <Process />
        <Doctors />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
