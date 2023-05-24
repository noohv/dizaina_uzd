import "./App.css";
import { useEffect } from "react";
import liepajaImg from "./images/liepaja.png"
import grobinaImg from "./images/grobina.png"
import saldusImg from "./images/saldus_aplis.png"
import rigaImg from "./images/riga.png"

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

      <section className="liepaja-text">
        <div className="container grid">
          <div className="text-center">
            <h1 className="lg">Ceļa sākums - Liepāja</h1>
          </div>

          <div className="text-left">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis sed orci elementum volutpat. Nunc fringilla pulvinar mollis. Nulla id arcu varius, vulputate ante vitae, rhoncus sem. Phasellus porta facilisis ex quis consectetur. Etiam sollicitudin ex quis felis vehicula egestas. Donec dictum consectetur ligula quis finibus. Etiam purus massa, placerat ut dui vitae, tempus volutpat risus. Quisque eleifend luctus elit in commodo. Sed sit amet venenatis massa, id faucibus mauris. Aenean quis risus urna. Pellentesque tristique, lorem vel finibus venenatis, neque orci porta ligula, non egestas odio lectus eu nunc. Aliquam erat volutpat.

Proin a finibus odio. Aliquam condimentum finibus justo. Ut id felis vestibulum, tincidunt nunc eget, viverra urna. In semper congue lectus, nec condimentum dolor vehicula sed. Etiam lacinia commodo lectus non sagittis. Donec semper justo vel elit egestas, sit amet tincidunt diam porta. Sed ac eros nulla. Nullam blandit, lorem at tincidunt scelerisque, metus velit vulputate elit, sit amet hendrerit dui urna laoreet nunc. Aenean pulvinar vulputate bibendum. Mauris tempor massa id enim tincidunt, commodo suscipit lectus consectetur. Praesent vitae commodo nunc, id cursus augue. Etiam. </p>
          </div>
        </div>
      </section>

      <section className="grobina" id="grobina">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">GROBIŅA</h1>
            </div>
            <img src={grobinaImg} alt="Grobiņas vēja ģeneratoru ilustrācija" />
        </div>
      </section>

      <section className="grobina-text">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">Vēl tuvu mājām</h1>
            </div>
            <div className="text-left">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis sed orci elementum volutpat. Nunc fringilla pulvinar mollis. Nulla id arcu varius, vulputate ante vitae, rhoncus sem. Phasellus porta facilisis ex quis consectetur. Etiam sollicitudin ex quis felis vehicula egestas. Donec dictum consectetur ligula quis finibus. Etiam purus massa, placerat ut dui vitae, tempus volutpat risus. Quisque eleifend luctus elit in commodo. Sed sit amet venenatis massa, id faucibus mauris. Aenean quis risus urna. Pellentesque tristique, lorem vel finibus venenatis, neque orci porta ligula, non egestas odio lectus eu nunc. Aliquam erat volutpat.

Proin a finibus odio. Aliquam condimentum finibus justo. Ut id felis vestibulum, tincidunt nunc eget, viverra urna. In semper congue lectus, nec condimentum dolor vehicula sed. Etiam lacinia commodo lectus non sagittis. Donec semper justo vel elit egestas, sit amet tincidunt diam porta. Sed ac eros nulla. Nullam blandit, lorem at tincidunt scelerisque, metus velit vulputate elit, sit amet hendrerit dui urna laoreet nunc. Aenean pulvinar vulputate bibendum. Mauris tempor massa id enim tincidunt, commodo suscipit lectus consectetur. Praesent vitae commodo nunc, id cursus augue. Etiam. </p>
            </div>
        </div>
      </section>

      <section className="saldus" id="saldus">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">SALDUS</h1>
            </div>
            <img src={saldusImg} alt="Saldus apļa ilustrācija" />
        </div>
      </section>

      <section className="saldus-text">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">Pusceļš</h1>
            </div>
            <div className="text-left">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis sed orci elementum volutpat. Nunc fringilla pulvinar mollis. Nulla id arcu varius, vulputate ante vitae, rhoncus sem. Phasellus porta facilisis ex quis consectetur. Etiam sollicitudin ex quis felis vehicula egestas. Donec dictum consectetur ligula quis finibus. Etiam purus massa, placerat ut dui vitae, tempus volutpat risus. Quisque eleifend luctus elit in commodo. Sed sit amet venenatis massa, id faucibus mauris. Aenean quis risus urna. Pellentesque tristique, lorem vel finibus venenatis, neque orci porta ligula, non egestas odio lectus eu nunc. Aliquam erat volutpat.

Proin a finibus odio. Aliquam condimentum finibus justo. Ut id felis vestibulum, tincidunt nunc eget, viverra urna. In semper congue lectus, nec condimentum dolor vehicula sed. Etiam lacinia commodo lectus non sagittis. Donec semper justo vel elit egestas, sit amet tincidunt diam porta. Sed ac eros nulla. Nullam blandit, lorem at tincidunt scelerisque, metus velit vulputate elit, sit amet hendrerit dui urna laoreet nunc. Aenean pulvinar vulputate bibendum. Mauris tempor massa id enim tincidunt, commodo suscipit lectus consectetur. Praesent vitae commodo nunc, id cursus augue. Etiam. </p>
            </div>
        </div>
      </section>

      <section className="riga" id="riga">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">RĪGA</h1>
            </div>
            <img src={rigaImg} alt="Rīgas zīmes ilustrācija" />
        </div>
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
