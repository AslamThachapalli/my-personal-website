import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center p-4 p-md-0"
      style={{ height: "100vh", backgroundColor: "#BECEE8" }}
    >
      <div className="container">
        <div className="row text-black d-flex justify-content-center">
          <div className="col-md-10 col-lg-8 m-4 ">
            <h1 className="text-center">Aslam Thachapalli</h1>
            <h2 className="text-start mt-4">
              Hello, I am Aslam. Welcome to my corner of the internet! I am a
              Flutter Developer based in India. Here you can see some of my
              favorite{" "}
              <span
                onClick={() => navigate("portfolio")}
                style={{
                  cursor: "pointer",
                  color: "#EFF5FE",
                }}
              >
                WORKS.
              </span>
            </h2>

            <h2 className="text-start mt-4">
              Feel free to snoop around on my{" "}
              <a
                href="https://drive.google.com/file/d/1i2bIjHzc1pWQw-hl1Q-_0WDrrfysIC9J/view?usp=sharing"
                target="_blank"
                style={{ textDecoration: "none", color: "#EFF5FE" }}
              >
                CV.
              </a>
              <br />
              For inquiries or a how you doing{" "}
              <span
                onClick={() => navigate("contact")}
                style={{ cursor: "pointer", color: "#EFF5FE" }}
              >
                CONTACT ME,
              </span>
              <br />I will be happy to hear from you.
            </h2>

            <h2 className="text-start mt-4">
              P.S. If this wasn't enough for you no worries! <br /> you can also
              find out more{" "}
              <span
                onClick={() => navigate("info")}
                style={{ cursor: "pointer", color: "#EFF5FE" }}
              >
                ABOUT ME
              </span>{" "}
              here ;)
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
