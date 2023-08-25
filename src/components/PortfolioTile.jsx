import "../App.css";
/* 
<a href="https://www.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_11878958.htm#query=food%20delivery&position=2&from_view=search&track=ais">Image by jcomp</a> on Freepik
<a href="https://www.freepik.com/free-vector/mobile-application-testing-connection-two-pieces-puzzle-ux-ui-design-development-concept_4102883.htm#query=integration&position=15&from_view=search&track=sph">Image by fullvector</a> on Freepik
<a href="https://www.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_11879344.htm#query=notes&position=0&from_view=search&track=sph">Image by jcomp</a> on Freepik
Photo by <a href="https://unsplash.com/@alexbemore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexander Shatov</a> on <a href="https://unsplash.com/photos/UVfvFrp4x4E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
<a href="https://www.freepik.com/free-vector/woman-face-scan-process-digital_5597102.htm#query=face%20auth&position=34&from_view=search&track=ais">Image by gstudioimagen</a> on Freepik
<a href="https://www.freepik.com/free-vector/tiny-man-chatting-online-with-ai-assistant-flat-illustration_13683699.htm#query=speech%20ai&position=36&from_view=search&track=ais">Image by pch.vector</a> on Freepik
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
          target="_blank"
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
