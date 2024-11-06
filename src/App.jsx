import { Routes, Route } from 'react-router-dom'
import Price from './pages/Price'
import Main from './pages/Main'
import Currencies from './pages/Currencies'
import './style.css'
import Nav from "./components/Nav";
export default function App () {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/currencies" element={<Currencies/>}/>
          <Route path="/price/:symbol" element={<Price/>}/>
        </Routes>
      </div>
    );
  }