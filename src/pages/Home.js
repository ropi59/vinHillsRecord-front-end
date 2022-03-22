import { useNavigate } from "react-router-dom";
import Caroussel, { CarousselItem } from "../components/Caroussel";
import Top10 from "../components/Top10";
import VinylsHorizontalBanner from "../components/VinylsHorizontalBanner";

const Home = () => {
  const ourSelection = "ourSelection"
  const classics = "classics"
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
            <Caroussel>
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
            <Caroussel>
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
          <div className="aboutUs">
            <img className="aboutUsPic" src="./assets/about-us.jpg" alt="about us"></img>
            <h1 className="aboutUs-title">About us</h1>
            <button className="seeMore" onClick={goToAboutUs}>See more</button>
          </div>
        </div>
        <div className="right-div">
          <Top10 />
        </div>
      </div>
      <div className="homeContentDown">
        <h1 className="ourSelection">Our selection</h1>
        <VinylsHorizontalBanner dbPath={ourSelection}/>
        <hr />
        <h1 className="classics">Classics</h1>
        <VinylsHorizontalBanner dbPath={classics} />
      </div>
    </div>
  );
}

export default Home;
