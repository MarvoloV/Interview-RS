import React from "react";

export const Header = () => {
  return (
    <header className="row between-xs">
      <div className="col-xs-3">
        <img
          src="/img/rimac_logo.png"
          alt=""
          style={{ height: "40px", width: "64px" }}
        />
      </div>
      <div className="col-xs-6 row">
        {/* <p>¡Compra por este medio!</p> */}
        <div className="row">
          <img src="/icons/Telephone.svg" alt="" />
          <p>(01) 411 6001</p>
        </div>
      </div>
    </header>
  );
};
