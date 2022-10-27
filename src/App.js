import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Media from './pages/Media/Media';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Media' element={<Media />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
