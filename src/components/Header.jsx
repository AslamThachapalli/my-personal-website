const Header = ({ currentTab }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d--flex justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              className={
                currentTab === "About" ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              href="/info"
            >
              About
            </a>
            <a
              className={
                currentTab === "Portfolio" ? "nav-link active" : "nav-link"
              }
              href="/portfolio"
            >
              Portfolio
            </a>
            <a
              className={
                currentTab === "Contact" ? "nav-link active" : "nav-link"
              }
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
