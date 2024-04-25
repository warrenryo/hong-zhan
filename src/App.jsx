import { useState, useEffect } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/Homepage'
import "preline/preline";

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </>
  )
}

export default App
