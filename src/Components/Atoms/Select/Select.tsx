import "./select.scss";
export const Select = () => {
  return (
    <div className="custom-select col-xs-5">
      <select>
        <option value="DNI">DNI</option>
        <option value="Carnet de Extranjeria">Carnet de Extranjeria</option>
      </select>
      <div className="select-arrow">
        <img src="./icons/arrow_down.svg" alt="" />
      </div>
    </div>
    // <select name="" id="" className="form__select">

    // </select>
  );
};
