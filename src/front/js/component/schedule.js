import React from "react";
import { Link } from "react-router-dom";

export const Schedule = () => {
  return (
    <section id="schedule">
      <div className="container mt-5 p-5">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src="https://res.cloudinary.com/dfrxcfjha/image/upload/v1670382715/samples/Web/open_qqvcp7.jpg"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-6 p-5 row align-items-center">
              <div className="card-body text-center">
              <h2 className="card-title">Horario de atención</h2>
              <br />
                <h5 className="card-text">
                  Lunes a Viernes: 8 a 12:30, 14:30 a 19 hs
                  <br />
                  <br />
                  Sábados: 8 a 12 hs
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
