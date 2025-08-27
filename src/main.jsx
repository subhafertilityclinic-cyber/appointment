import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRouter>
);
