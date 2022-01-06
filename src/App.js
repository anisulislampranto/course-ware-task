import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import ServiceDetails from './Components/Home/ServiceDetails/ServiceDetails';
import Services from './Components/Home/Services/Services';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/serviceDetails" element={<ServiceDetails/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
