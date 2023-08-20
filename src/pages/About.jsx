import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header currentTab="About" />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <h1 className="mt-4">Aslam Thachapalli</h1>
          <h2 className="mt-2">
            Mexican artist, I mainly work with oils, color pencils and gouache.
            Passionate about celebrating diversity through my work, weaving
            stories through shapes and colours, inspired by feelings, dreams and
            everyday life. My art intends to represent strong confident
            characters living in vibrant worlds which are often a fusion between
            real life and my imagination. I play with the disruption of the
            human form to reveal my view on both internal and external beauty.
          </h2>
          <h1 className="mt-4">My Journey</h1>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
