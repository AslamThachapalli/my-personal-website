import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioTile from "../components/PortfolioTile";
import videoChat from "../assets/video_chat.jpg";
import netflix from "../assets/netflix-logo.jpg";
import faceImg from "../assets/face-auth.jpg";
import vocalis from "../assets/vocalis.jpg";
import foodiee from "../assets/foodiee.jpg";
import integration from "../assets/integration.jpg";
import notes from "../assets/notes.jpg";
import pythonApi from "../assets/python_api.jpg";
import attributions from "../components/attributions";

const Portfolio = () => {
  const [showAttributions, setShowAttributions] = useState(false);

  const toggleAttributions = () => {
    const shouldShow = !showAttributions;
    setShowAttributions(shouldShow);
  };

  return (
    <>
      <Header currentTab="Portfolio" />

      <div className="container p-4">
        <div className="row d-flex justify-content-center">
          <PortfolioTile
            image={videoChat}
            title="WebRTC Peer Chat"
            description="Peer to Peer Video Chat application using WebRTC Protocol. Agora realtime messaging is used for signalling."
            link="https://github.com/AslamThachapalli/webrtc-peer-chat"
          />
          <PortfolioTile
            image={vocalis}
            title="Vocalis AI"
            description="This is a voice assistant app developed with flutter using OpenAI apis. The app uses ChatGPT and Dall-E AI image generation."
            link="https://github.com/AslamThachapalli/vocalis_ai"
          />
          <PortfolioTile
            image={faceImg}
            title="Face Authentication"
            description="Face authentication app (SignUp + SignIn) written in flutter using flutter_face_api and google_ml_kit_face_detection"
            link="https://github.com/AslamThachapalli/face-authentication-app"
          />
          <PortfolioTile
            image={netflix}
            title="Netflix Clone"
            description="A netflix_clone app designed in Clean Architecture + TDD approach. The code passed in total of 90 Unit Tests."
            link="https://github.com/AslamThachapalli/Netflix_Clone_App"
          />
          <PortfolioTile
            image={foodiee}
            title="Foodiee App"
            description="An e-commerce app programmed in DDD architecture. App contains payment integrations using Razorpay, map integration using Mapbox Api and more."
            link="https://github.com/AslamThachapalli/foodiee_app"
          />
          <PortfolioTile
            image={notes}
            title="Notes App"
            description="A personalised notes taking app designed in DDD architecture. Bloc is used for state management and firebase as backend."
            link="https://github.com/AslamThachapalli/Notes_App"
          />
          <PortfolioTile
            image={integration}
            title="Flutter Platform Integration"
            description="An App that explores the platform channels provided by flutter."
            link="https://github.com/AslamThachapalli/flutter_platform_channels"
          />
          <PortfolioTile
            image={pythonApi}
            title="Python Social Media App"
            description="This is backend project created using FastApi. It contains authentication, CRUD operations for a social media post plus liking and unliking a post."
            link="https://github.com/AslamThachapalli/python-social-media-app"
          />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <p onClick={toggleAttributions} style={{ cursor: "pointer" }}>
          attributions
        </p>
      </div>

      <div
        className={`d-flex justify-content-center ms-4 me-4 ${
          showAttributions ? "" : "d-none"
        }`}
      >
        <div className="card" style={{ width: "25rem" }}>
          <ul className="list-group list-group-flush">
            {attributions.map((attr, index) => {
              return (
                <li key={index} className="list-group-item">
                  {attr}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <br />
      <Footer />
    </>
  );
};

export default Portfolio;
