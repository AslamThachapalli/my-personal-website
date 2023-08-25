import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrReactjs } from "react-icons/gr";
import SocialMedia from "./SocialMedia";

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
            <SocialMedia link="https://www.linkedin.com/in/aslam-thachapalli/">
              <BiLogoLinkedin />
            </SocialMedia>

            <SocialMedia
              link="https://github.com/AslamThachapalli/"
              isPadded={true}
            >
              <BsGithub />
            </SocialMedia>

            <SocialMedia
              link="https://medium.com/@aslam.develop912"
              isPadded={true}
            >
              <SiMedium />
            </SocialMedia>

            <SocialMedia
              link="mailto:aslam.develop912@gmail.com"
              isPadded={true}
            >
              <MdOutlineMailOutline />
            </SocialMedia>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
