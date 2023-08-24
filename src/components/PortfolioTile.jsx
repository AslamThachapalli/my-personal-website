import "../App.css";
/* 
<a href="https://www.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_11878958.htm#query=food%20delivery&position=2&from_view=search&track=ais">Image by jcomp</a> on Freepik
<a href="https://www.freepik.com/free-vector/chatbot-messenger-program-concept-with-support-symbols-isometric-vector-illustration_26761515.htm#query=speech%20ai&position=9&from_view=search&track=ais">Image by macrovector</a> on Freepik
*/

const PortfolioTile = ({ title, description, image, link }) => {
  return (
    <div
      className="card col-md-6 col-lg-4 mt-4 ms-2 me-2 shadow"
      style={{ width: "20rem" }}
    >
      <img
        src={image}
        className="card-img-top"
        alt="..."
        style={{ cursor: "pointer", height: "13rem" }}
        onClick={() => {
          console.log("tapped");
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          href={link}
          className="btn"
          style={{ background: "#30363D", color: "#FFFFFF" }}
        >
          View on Github
        </a>
      </div>
    </div>
  );
};

export default PortfolioTile;
