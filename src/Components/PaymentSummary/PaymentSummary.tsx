import "./paymentSummary.scss";
export const PaymentSummary = () => {
  return (
    <>
      <p className="title">Resumen del seguro</p>

      <div className="card">
        <span className="card__title">Precios calculados para:</span>
        <div className="card__header">
          <img
            src="./icons/ic_family.svg"
            alt=""
            className="card__header__img"
          />
          <span className="card__header__title">Rocio Miranda Díaz</span>
        </div>
        <div className="card__body">
          <p className="card__body__title">Responsable de pago</p>
          <p className="card__body__info">DNI: 444888888</p>
          <p className="card__body__info">Celular: 5130216147</p>
          <p className="card__body__title">Plan elegido</p>
          <p className="card__body__info">Plan en Casa y Clínica</p>
          <p className="card__body__info">Costo del Plan: $99 al mes</p>
        </div>
      </div>
    </>
  );
};
