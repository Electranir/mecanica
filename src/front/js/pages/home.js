import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <section>
      <div className="container-fluid bgimage text-center">
        <div className="container col-lg-6">
          <div className="pt-5">
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="mt-5 m-4 p-4 bghome p-3">
            <h1>
              Taller Mecánico de Motos
              <br />
              "Nelson Irace"
            </h1>
            <button type="button" className="mt-3 btn btn-outline-dark">
              <h5>Contacto</h5>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
