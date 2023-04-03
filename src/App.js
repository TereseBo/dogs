import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Style
import './App.css'
//Pages
import Doglist from './pages/Doglist'
import Dogdetails from './pages/Dogdetails'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Doglist />} />
        <Route path="/dog/:dog" element={<Dogdetails />} />
      </Routes>
    </BrowserRouter>
  )
}

