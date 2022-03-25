import { useNavigate } from "react-router-dom";
import Caroussel, { CarousselItem } from "../components/Caroussel";
import Top10 from "../components/Top10";
import VinylsHorizontalBanner from "../components/VinylsHorizontalBanner";

const Home = () => {
  {/* page d'accueil du site*/}
  {/* variable pour definir les chemin d'acces aux datas, a revoir avec le back*/}
  const ourSelection = "ourSelection"
  const classics = "classics"
  
  {/* fonction pour naviguer a la page about us*/}
  let navigate = useNavigate();
  const goToAboutUs = () => {
    let path = "/about";
    navigate(path)
  }
 
  return (
    <div className="home">
      <div className="homeContentUp">
        <div className="left-div">
          <div className="caroussel">
            {/* caroussel news*/}
            <Caroussel>
              {/* items du carrousel, titre, sous titre de l'info pour chaque item, image a rajouter*/}
              <CarousselItem>
                <div class="caroussel-info">
                  <h5>Title 1</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </CarousselItem>
              <CarousselItem>
                <div class="caroussel-info">
                  <h5>Title 2</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </CarousselItem>
              <CarousselItem>
                <div class="caroussel-info">
                  <h5>Title 3</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </CarousselItem>
              <CarousselItem>
                <div class="caroussel-info">
                  <h5>Title 4</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </CarousselItem>
              <CarousselItem>
                <div class="caroussel-info">
                  <h5>Title 5</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </CarousselItem>
            </Caroussel>
            <h1 className="news-title">News</h1>
          </div>
          <div className="caroussel">
            {/* caroussel back in stock */}
            <Caroussel>
              {/* items du carrousel, titre, sous titre de l'info pour chaque item, image a rajouter*/}
              <CarousselItem>
                <div class="caroussel-info">
                  <h5>Title 5</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </CarousselItem>
              <CarousselItem>
                <div class="caroussel-info">
                  <h5>Title 8</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </CarousselItem>
              <CarousselItem>
                <div class="caroussel-info">
                  <h5>Title 9</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </CarousselItem>
            </Caroussel>
            <h1 className="backInStock-title">Back in stock</h1>
          </div>
          {/* image about us */}
          <div className="aboutUs">
            <img className="aboutUsPic" src="./assets/about-us.jpg" alt="about us"></img>
            <h1 className="aboutUs-title">About us</h1>
            {/* bouton pour aller vers la page about us*/}
            <button className="seeMore" onClick={goToAboutUs}>See more</button>
          </div>
        </div>
        <div className="right-div">
          {/* composant top10 affichant les 10 meilleures ventes*/}
          <Top10 />
        </div>
      </div>
      <div className="homeContentDown">
        {/* composant affichant une selection de 4 vinyls de notre selection*/}
        <h1 className="ourSelection">Our selection</h1>
        {/* chemin vers les datas a revoir avec le back*/}
        <VinylsHorizontalBanner dbPath={ourSelection}/>
        <hr />
        {/* composant affichant une selection de 4 vinyls classics (parmis les bonnes ventes?)*/}
        <h1 className="classics">Classics</h1>
        {/* chemin vers les datas a revoir avec le back*/}
        <VinylsHorizontalBanner dbPath={classics} />
      </div>
    </div>
  );
}

export default Home;
