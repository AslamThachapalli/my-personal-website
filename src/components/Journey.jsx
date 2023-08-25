const Journey = ({ period, company, title, responsibilities }) => {
  return (
    <div className="row mt-4">
      <div className="col-md-5">
        <h5>{period}</h5>
        <h6>{company}</h6>
      </div>

      <div className="col-md-7">
        <h5 className="mt-4 mt-md-0">{title}</h5>
        <ul className="list-group list-group-flush">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="list-group-item list-group-item-action">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Journey;
