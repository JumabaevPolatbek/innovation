import './App.scss';
// import AboutSection from './layouts/AboutSection';
// import BlogSection from './layouts/BlogSection';
// import Courses from './layouts/Courses';
// import EventsSection from './layouts/EventsSection';
// import Footer from './layouts/Footer';
// import Header from './layouts/Header';
// import HeroSection from './layouts/HeroSection';
// import MenuBox from './layouts/MenuBox';
// import ServiceSection from './layouts/ServiceSection';
// import Statistics from './layouts/Statistics';
// import Testimonials from './layouts/Testimonials';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
function App() {


  return (
    // <div className="App">
    //   <Header />
    //   <HeroSection />
    //   <MenuBox />
    //   <AboutSection />
    //   <ServiceSection />
    //   <Courses />
    //   <EventsSection />
    //   <Statistics />
    //   <BlogSection />
    //   <Testimonials />
    //   <Footer />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
