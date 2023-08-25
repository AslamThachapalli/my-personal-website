import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrReactjs } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-dark" style={{ height: "5rem" }}>
      <div className="container">
        <div className="row text-light">
          <div className="col-sm-6 mt-2 d-flex justify-content-center justify-content-sm-start">
            <p>
              Made With
              <span style={{ color: "#61DCF9" }}>
                <GrReactjs className="ms-2" />
              </span>
            </p>
          </div>

          <div className="col-sm-6 mb-2 mt-sm-2 d-flex justify-content-center justify-content-sm-end">
            <a
              href="https://www.linkedin.com/in/aslam-thachapalli/"
              target="_blank"
              className="text-light"
            >
              <BiLogoLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-light ps-4"
            >
              <BsGithub />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-light ps-4"
            >
              <SiMedium />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-light ps-4"
            >
              <MdOutlineMailOutline />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
