import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import HomeLayout from './Layouts/HomeLayout';
import MeetingLayout from './Layouts/MeetingLayout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Feature from './Components/Feature';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="feature" element={<Feature />} />
        </Route>
        <Route path="/meeting" element={<MeetingLayout />} >
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
