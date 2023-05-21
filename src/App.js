import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import MainPage from './MainPage';
import Road from './Road';

function App() {
  const [language, setLanguage] = useState("en")

  return (
    <>
      <NavBar language={language} setLanguage={setLanguage} />
      <Routes>
          <Route path="/" element={<MainPage language={language} />} />
          <Route path="/road" element={<Road language={language} />} />
       </Routes>
    </> 
  )
}

export default App;
