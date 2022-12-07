import React from "react";

export const Location = () => {
  return (
    <section id="location">
    <div className="container mt-5 p-5">
      <div className="card mb-3">
        <div className="row g-0"> 
          <div className="col-md-6 p-5 row align-items-center">
            <div className="card-body text-center">
              <h2 className="card-title">
                Ubicación
              </h2>
              <br/>
              <h5 className="card-text">
                8 de Noviembre 567
                <br/>
                <br/>
                (Ex Bella Vista)
                <br/>
                <br/>
                <br/>
                Salto, Uruguay
              </h5>
            </div>
          </div>
          <div className="col-md-6 ms-auto">
            <img
              src="https://sintropia.com.uy/desarrollo/home2.png"
              className="img-fluid rounded-start"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};