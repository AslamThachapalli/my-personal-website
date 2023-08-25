import { BiLogoLinkedin } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialMedia from "../components/SocialMedia";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="d-flex flex-column vh-100 justify-content-between">
        <Header currentTab="Contact" />
        <div className="container">
          <div className="row d-flex align-items-center p-md-0 p-2">
            <div className="col-md-6 mt-md-0 mt-4">
              <h1>Let's Talk!</h1>
              <h4>
                Feel free to reach out or connect with me on LinkedIn/GitHub.
                Let's embark on a journey to reshape the digital world, one
                Flutter app at a time.
              </h4>
            </div>
            <div className="col-md-6 d-flex flex-column mt-md-0 mt-4">
              <div className="d-flex justify-content-center mb-4">
                <SocialMedia
                  isBlackIcon={true}
                  link="https://www.linkedin.com/in/aslam-thachapalli/"
                >
                  <BiLogoLinkedin style={{ width: "40px", height: "40px" }} />
                </SocialMedia>

                <SocialMedia
                  isBlackIcon={true}
                  isPadded={true}
                  link="mailto:aslam.develop912@gmail.com"
                >
                  <MdOutlineMailOutline
                    style={{ width: "40px", height: "40px" }}
                  />
                </SocialMedia>
              </div>
              <ContactForm />
              <br className="d-block d-md-none" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
