import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import Services from './Components/Home/Services/Services';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/services" element={<Services/>} />
      {/* <Route path="/services/:id" element={<Home/>} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
