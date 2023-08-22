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
            <h1 className="mt-4">Aslam Thachapalli</h1>
            <h2 className="mt-2">
              Mexican artist, I mainly work with oils, color pencils and
              gouache. Passionate about celebrating diversity through my work,
              weaving stories through shapes and colours, inspired by feelings,
              dreams and everyday life. My art intends to represent strong
              confident characters living in vibrant worlds which are often a
              fusion between real life and my imagination. I play with the
              disruption of the human form to reveal my view on both internal
              and external beauty.
            </h2>
            <h1 className="mt-4">My Journey</h1>
            <div className="mt-2">
              <Journey
                period="July 2023 - Present"
                company="Digichorus Technologies Pvt Ltd"
                title="Flutter Developer"
                responsibilities={[
                  "This is a Task That i did on the company.",
                  "This is a Task That i did on the company. This task a bit long",
                  "This is a small Responsibility",
                ]}
              />

              <Journey
                period="Nov 2022 - May 2023"
                company="Kohbee Technologies Pvt Ltd"
                title="Flutter Developer Intern"
                responsibilities={[
                  "This is a Task That i did on the company.",
                  "This is a Task That i did on the company. This task a bit long",
                  "This is a small Responsibility",
                ]}
              />

              <Journey
                period="Jan 2022 - May 2023"
                company="Brain Podium Technologies Pvt Ltd"
                title="Freelance Flutter Developer"
                responsibilities={[
                  "This is a Task That i did on the company.",
                  "This is a Task That i did on the company. This task a bit long",
                  "This is a small Responsibility",
                ]}
              />

              <Journey
                period="July 2022"
                company="College of Engineering Trivandrum"
                title="Graduation"
                responsibilities={[
                  "This is a Task That i did on the company.",
                  "This is a Task That i did on the company. This task a bit long",
                  "This is a small Responsibility",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <Footer></Footer>
    </>
  );
};

export default About;
