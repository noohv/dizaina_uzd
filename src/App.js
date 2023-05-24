import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import MainPage from './MainPage';
import Road from './Road';
import { Footer } from './components/Footer';

function App() {
  const [language, setLanguage] = useState("lv")

  useEffect(()=>{
    if(localStorage.getItem("lang") === null) {
      localStorage.setItem("lang", language)
    } else {
      setLanguage(localStorage.getItem("lang"))
    }
  },[language])

  return (
    <>
      <NavBar language={language} setLanguage={setLanguage} />
      <Routes>
          <Route path="/" element={<MainPage language={language} />} />
          <Route path="/road" element={<Road language={language} id="road" />} />
          <Route path="/road/liepaja" element={<Road language={language} id="liepaja" />} />
          <Route path="/road/grobina" element={<Road language={language} id="grobina" />} />
          <Route path="/road/saldus" element={<Road language={language} id="saldus" />} />
          <Route path="/road/riga" element={<Road language={language} id="riga" /> }/>
          <Route path="/road/tramvajs" element={<Road language={language} id="tramvajs" />} />
          <Route path="/road/biblioteka" element={<Road language={language} id="biblioteka" />} />
          <Route path="/road/universitate" element={<Road language={language} id="universitate" />} />
       </Routes>
       <Footer language={language} />
    </> 
  )
}

export default App;
