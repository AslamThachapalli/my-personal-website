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
              I'm a dedicated Flutter developer passionate about creating
              engaging, pixel-perfect mobile apps. My love for elegant code and
              user-centric design drives me to transform innovative concepts
              into delightful digital experiences. Additionally, I bring
              expertise in web technologies such as HTML, CSS, Bootstrap, React,
              and JavaScript to craft versatile and dynamic digital solutions.
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
                  "Working as Mobile Application Developer for Qatar National Bank (QNB).",
                  "Lead member in migrating QNB's current app, which is built with Kony framework, to flutter framework for Android, IOS and Web.",
                  "Explored Micro-App Architecture potential in Flutter via git submodules and Melos for R&D purposes.",
                  "I created tailored packages and plugins to meet precise needs, leveraging Platform Channels for native functionality. Additionally for web, I utilized dart-js interoperability to harness specific JavaScript libraries",
                  "Clean Architecture approach is used to develop the app.",
                  "Firebase Cloud Messaging (FCM) is used to integrate push notification functionality.",
                ]}
                link="https://www.digichorus.com/"
              />

              <Journey
                period="Jan 2023 - June 2023"
                company="Brain Podium Technologies Pvt Ltd"
                title="Freelance Flutter Developer"
                responsibilities={[
                  "Project #1",
                  "Integrated a comprehensive chat module into Livelong Wealth app, resulting in increased customer engagement and retention. The chat module included features such as image and video sharing, link sharing, user tagging, message reactions, push notifications and more.",
                  "Improved UI/UX of the whole app | Added Animations | Worked on UI bug fixes.",
                  "Project #2",
                  "Developed two apps for a food token management system within an organization. The first app allowed users to redeem tokens using face authentication technology, while the second app served as an admin tool for user management and monitoring of token availability records.",
                  "Used google_ml_kit and flutter_face_api packages to implement face authentication and wrote custom face comparison logic to reduce the face comparison time.",
                  "Integrated excel to assess and update the user token usage records.",
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
