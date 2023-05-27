import "./App.scss";
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Posts from "./pages/Posts";
import PostSection from "./layouts/PostSection";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="posts">
              <Route index element={<Posts />} />
              <Route path=":id" element={<PostSection />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
