import Footer from "../components/Footer";
import Header from "../components/Header";
import Journey from "../components/Journey";

const About = () => {
  return (
    <>
      <Header currentTab="About" />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-11 col-lg-8">
            <h1 className="mt-4 mb-4">Aslam Thachapalli</h1>
            <h4 className="mt-2">
              I'm a passionate Flutter developer dedicated to crafting engaging
              and pixel-perfect mobile applications. With a love for elegant
              code and user-centric design, I find joy in turning innovative
              ideas into delightful and functional digital experiences.
            </h4>
            <h3 className="mt-4">When I'm not coding:</h3>
            <h4>
              Outside the world of code and pixels, you'll often find me reading
              History, travelling, exploring tastes. Exploring diverse interests
              fuels my creativity and keeps me excited about the next big coding
              challenge.
            </h4>
            <h3 className="mt-4">Let's Build Something Amazing:</h3>
            <h4>
              Whether you have an app idea that needs a touch of Flutter magic
              or you're looking to collaborate on a project, I'm always up for a
              new adventure. Let's connect and create together!
            </h4>
            <br />
            <h6>Cheers to innovation and clean code! 🎉</h6>
            <h1 className="mt-4">My Journey</h1>
            <div className="mt-2">
              <Journey
                period="July 2023 - Present"
                company="Digichorus Technologies Pvt Ltd"
                title="Flutter Developer"
                responsibilities={[
                  "Working on Micro App architectural pattern with Flutter",
                ]}
                link="https://www.digichorus.com/"
              />

              <Journey
                period="Jan 2023 - May 2023"
                company="Brain Podium Technologies Pvt Ltd"
                title="Freelance Flutter Developer"
                responsibilities={[
                  "Added a comprehensive chat module to a stock market education app - Livelong Wealth",
                  "Developed an attendance management application. It uses Face Authentication to identify the user.",
                ]}
                link="https://www.brainpodium.com/"
              />

              <Journey
                period="Nov 2022 - May 2023"
                company="Kohbee Technologies Pvt Ltd"
                title="Flutter Developer Intern"
                responsibilities={[
                  "Extended app localisation capabilities to support multilingual user experiences.",
                  "Wrote integration tests from scratch to ensure the reliability and functionality of the app.",
                  "Developed internal tools and admin-specific flows in the app to manage client on-boarding and other controls for client management.",
                  "Developed Trusted Web Activities (TWAs) to deliver customised apps for clients, contributing to their business growth.",
                  "Added additional modules to enhance the overall functionality and user experience of the app.",
                ]}
                link="https://www.kohbee.com/"
              />

              <Journey
                period="July 2022"
                company="College of Engineering Trivandrum"
                title="Graduation"
                responsibilities={["Completed my Bachelors in Technology"]}
                link="https://www.cet.ac.in/"
              />
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <Footer />
    </>
  );
};

export default About;
