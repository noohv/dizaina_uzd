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
          <Route path="/road" element={<Road language={language} id="liepaja"  />} />
          <Route path="/road/liepaja" element={<Road language={language} id="liepaja" />} />
          <Route path="/road/grobina" element={<Road language={language} id="grobina" />} />
          <Route path="/road/riga" element={<Road language={language} />} id="riga" />
          <Route path="/road/tramvajs" element={<Road language={language} id="tramvajs" />} />
          <Route path="/road/latvijas_universitate" element={<Road language={language} id="latvijas_universitate" />} />
       </Routes>
    </> 
  )
}

export default App;
