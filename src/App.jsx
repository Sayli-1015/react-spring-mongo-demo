import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Header/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./Pages/Home.jsx";
import BarcodePatternMaster from "./Pages/BarcodePatternMaster.jsx";

function App() {
  return (
      <>
        <>
        <div className="container">
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/barcode' element={<BarcodePatternMaster />} />
            </Routes>
            <Footer/>
        </div>
        </>
      </>
  )
}

export default App
