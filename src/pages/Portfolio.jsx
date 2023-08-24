import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioTile from "../components/PortfolioTile";
import netflix from "../assets/netflix.png";
import faceImg from "../assets/Face-recognition.jpg";
import vocalis from "../assets/vocalis.jpg";
import foodiee from "../assets/foodiee.jpg";

const Portfolio = () => {
  return (
    <>
      <Header currentTab="Portfolio" />

      <div className="container p-4">
        <div className="row d-flex justify-content-center">
          <PortfolioTile
            image={vocalis}
            title="Vocalis AI"
            description="Some quick example text to build on the card title and make up
          the bulk of the card's content."
            link="#"
          />
          <PortfolioTile
            image={faceImg}
            title="Face Authentication"
            description="Some quick example text to build on the card title and "
            link="#"
          />
          <PortfolioTile
            image={netflix}
            title="Netflix Clone"
            description="Some quick example text to build on the card title and make up
          the bulk of the card's content."
            link="#"
          />
          <PortfolioTile
            image={foodiee}
            title="Foodiee App"
            description="Some quick example text to build on the card title and make up
          the bulk of the card's content."
            link="#"
          />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Portfolio;
