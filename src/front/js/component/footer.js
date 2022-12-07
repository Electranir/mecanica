import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
				<hr />
        <div className="container pt-5 pb-5 mt-5">
          <div className="row ">
            <div className="col-lg-5">
              <h3>Imagen del taller</h3>
			  <p>
                8 de noviembre 567 (ex Bella Vista)
                <br />
                Tel. +598 98 802 826
                <br />
                Mail. nelsoniracemotos@hotmail.com
              </p>
            </div>



            <div className="col-lg-2 mt-5">
              <h5> SOBRE</h5> <br />
              <Link to="/pages/about">Sobre Nosotros</Link>
              <br />
              <Link to="/pages/contact">Contacto</Link>
            </div>

            <div className="col-lg-2 mt-5">
              <h5> POLÍTICAS </h5> <br />
              <Link to="/pages/politicas">Política de Privacidad</Link> <br />
              <Link to="/pages/terminos">Términos y Condiciones</Link>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};