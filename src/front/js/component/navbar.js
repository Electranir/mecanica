import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="" alt="Bootstrap" width="30" height="24" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-dark"
                aria-current="page"
                href="#aboutUs"
              >
                Sobre Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#service">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#schedule">
                Horario
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#location">
                Locación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
