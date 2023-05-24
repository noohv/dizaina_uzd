import latvija from "./images/latvija.png"
import portrait from "./images/profile_picture.png"
import "./App.css";

function MainPage() {
  return (
    <div className="mainPage">
      <section className="latvia">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">Mans ceļš uz Latvijas Universitāti </h1>
            </div>
            <img src={latvija} alt="Latvijas kartes ilustrācija" />
        </div>
      </section>

      <section className="latvia-text">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">Par šo mājaslapu </h1>
            </div>
            <div className="text-left">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis sed orci elementum volutpat. Nunc fringilla pulvinar mollis. Nulla id arcu varius, vulputate ante vitae, rhoncus sem. Phasellus porta facilisis ex quis consectetur. Etiam sollicitudin ex quis felis vehicula egestas. Donec dictum consectetur ligula quis finibus. Etiam purus massa, placerat ut dui vitae, tempus volutpat risus. Quisque eleifend luctus elit in commodo. Sed sit amet venenatis massa, id faucibus mauris. Aenean quis risus urna. Pellentesque tristique, lorem vel finibus venenatis, neque orci porta ligula, non egestas odio lectus eu nunc. Aliquam erat volutpat.

Proin a finibus odio. Aliquam condimentum finibus justo. Ut id felis vestibulum, tincidunt nunc eget, viverra urna. In semper congue lectus, nec condimentum dolor vehicula sed. Etiam lacinia commodo lectus non sagittis. Donec semper justo vel elit egestas, sit amet tincidunt diam porta. Sed ac eros nulla. Nullam blandit, lorem at tincidunt scelerisque, metus velit vulputate elit, sit amet hendrerit dui urna laoreet nunc. Aenean pulvinar vulputate bibendum. Mauris tempor massa id enim tincidunt, commodo suscipit lectus consectetur. Praesent vitae commodo nunc, id cursus augue. Etiam. </p>
            </div>
        </div>
      </section>

      <section className="about">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">Par mani </h1>
            </div>
            <img src={portrait} />
            <div className="text-left">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis sed orci elementum volutpat. Nunc fringilla pulvinar mollis. Nulla id arcu varius, vulputate ante vitae, rhoncus sem. Phasellus porta facilisis ex quis consectetur. Etiam sollicitudin ex quis felis vehicula egestas. Donec dictum consectetur ligula quis finibus. Etiam purus massa, placerat ut dui vitae, tempus volutpat risus. Quisque eleifend luctus elit in commodo. Sed sit amet venenatis massa, id faucibus mauris. Aenean quis risus urna. Pellentesque tristique, lorem vel finibus venenatis, neque orci porta ligula, non egestas odio lectus eu nunc. Aliquam erat volutpat.

Proin a finibus odio. Aliquam condimentum finibus justo. Ut id felis vestibulum, tincidunt nunc eget, viverra urna. In semper congue lectus, nec condimentum dolor vehicula sed. Etiam lacinia commodo lectus non sagittis. Donec semper justo vel elit egestas, sit amet tincidunt diam porta. Sed ac eros nulla. Nullam blandit, lorem at tincidunt scelerisque, metus velit vulputate elit, sit amet hendrerit dui urna laoreet nunc. Aenean pulvinar vulputate bibendum. Mauris tempor massa id enim tincidunt, commodo suscipit lectus consectetur. Praesent vitae commodo nunc, id cursus augue. Etiam. </p>
            </div>
        </div>
      </section>

    </div>
  )
}

export default MainPage;
