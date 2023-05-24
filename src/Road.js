import "./App.css";
import { useEffect } from "react";
import liepajaImg from "./images/liepaja.png"
import grobinaImg from "./images/grobina.png"

function Road({language, id}) {

  useEffect(() => {
    const element = document.getElementById(id);
    if(id === "road") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [id]);


  return (
    <div className="roadPage">
    
      <section className="liepaja" id="liepaja">
        <div className="container">
          <img src={liepajaImg} alt="Liepājas pludmales ilustrācija" />
        </div>
      </section>

      <section className="grobina" id="grobina">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">Mans ceļš uz Latvijas Universitāti </h1>
            </div>
            <img src={grobinaImg} alt="Grobiņas vēja ģeneratoru ilustrācija" />
        </div>
      </section>

      <section id="saldus">
       
       </section>

      <section id="riga">
        
      </section>

      <section id="tramvajs">
        
      </section>

      <section id="biblioteka">
        
      </section>

      <section id="universitate">
        
      </section>

    </div>
  )
}

export default Road;
