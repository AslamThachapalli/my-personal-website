import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-success d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <div className="row text-black d-flex justify-content-center">
          <div className="col-md-10 col-lg-8 m-4 ">
            <h1 className="text-center">Aslam Thachapalli</h1>
            <h2 className="text-start mt-4">
              Hi! I am a Flutter Developer based in India. Here you can see some
              of my latest <span className="text-light">work</span>
            </h2>

            <h2 className="text-start mt-4">
              Feel free to snoop around my{" "}
              <span className="text-light">CV.</span>
              <br />
              For Enquiries and How you doing{" "}
              <span className="text-light">contact me,</span>
              <br />I will be happy to hear from you.
            </h2>

            <h2 className="text-start mt-4">
              P.S. If this wasn't enough for you no worries! <br /> you can also
              find out more{" "}
              <span
                className="text-light"
                onClick={() => navigate("info")}
                style={{ cursor: "pointer" }}
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