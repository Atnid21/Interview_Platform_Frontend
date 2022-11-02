import './App.css';
import { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Loading from './Components/Loading';
const About = lazy(() => import('./Components/About'));
const Contact = lazy(() => import('./Components/Contact'));
const Feature = lazy(() => import('./Components/Feature'));
const Meeting = lazy(() => import('./Components/Meeting'));
const Modal = lazy(() => import('./Components/Modal'));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="feature" element={<Feature />} />
            <Route path="verify" element={<Modal />} />
            <Route path="meeting/:meetingId" element={<Meeting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;