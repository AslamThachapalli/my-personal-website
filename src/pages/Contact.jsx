import { BiLogoLinkedin } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="d-flex flex-column vh-100 justify-content-between">
        <Header currentTab="Contact" />
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h1>Let's Talk!</h1>
            </div>
            <div className="col-md-6 d-flex flex-column">
              <div className="d-flex justify-content-center mb-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-dark"
                >
                  <BiLogoLinkedin style={{ width: "40px", height: "40px" }} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-dark ps-4"
                >
                  <MdOutlineMailOutline
                    style={{ width: "40px", height: "40px" }}
                  />
                </a>
              </div>
              <div className="mt-4">
                <div class="mb-3">
                  <label for="nameInput" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="nameInput"
                    placeholder="Your Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="emailInput" class="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="emailInput"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="messageInput" class="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="messageInput"
                    rows="3"
                    placeholder="Write Something!"
                  ></textarea>
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button">
                    Sent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Contact;
