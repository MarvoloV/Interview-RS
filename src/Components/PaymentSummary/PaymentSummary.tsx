import { useContextQuote } from "../../store";
import "./paymentSummary.scss";
export const PaymentSummary = () => {
  const { state } = useContextQuote();
  return (
    <div className="container row center-xs">
      <p className="title col-xs-12 col-md-10">Resumen del seguro</p>
      <div className="card  col-xs-12 col-md-10">
        <p className="title col-xs-12">Resumen del seguro</p>
        <span className="card__title">Precios calculados para:</span>
        <div className="card__header">
          <img
            src="./icons/ic_family.svg"
            alt=""
            className="card__header__img"
          />
          <span className="card__header__title">{state.user.fullName}</span>
        </div>
        <div className="card__body">
          <p className="card__body__title">Responsable de pago</p>
          <p className="card__body__info">
            {state.user.typeDocument}: ${state.user.document}
          </p>
          <p className="card__body__info">Celular: {state.user.cellphone}</p>
          <p className="card__body__title">Plan elegido</p>
          <p className="card__body__info">{state.plan.name}</p>
          <p className="card__body__info">
            Costo del Plan: ${state.plan.price} al mes
          </p>
        </div>
      </div>
    </div>
  );
};
