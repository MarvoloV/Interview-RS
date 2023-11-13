import "./cardPlan.scss";
import { List } from "../../interfaces/ListPlans";

interface Props {
  plan: List;
}

const listiconsDescription = [
  {
    src: "./icons/ic_GlMedicalAttentionSolid.svg",
  },
  {
    src: "./icons/ic_GlLaptopSolid.svg",
  },
  {
    src: "./icons/ic_hospital.svg",
  },
];

export const CardPlan = ({ plan }: Props) => {
  return (
    <div key={plan.name} className="col-xs-10 col-md-3 cardPlan">
      <div className="row between-xs cardPlan__header">
        <p className="cardPlan__header-name">{plan.name}</p>
        <img src="./icons/IcHomeLight.svg" alt="" />
      </div>
      <p className="cardPlan__cost">Costo del Plan</p>
      <p className="cardPlan__price">${plan.price} al mes</p>

      <ul className="cardPlan__description-list">
        {plan.description.map((desc, index: number) => (
          <li key={desc} className="cardPlan__description-item">
            <img
              className="cardPlan__description-icon"
              src={listiconsDescription[index].src}
              alt=""
            />
            <p className="cardPlan__description-text">{desc}</p>
          </li>
        ))}
      </ul>
      <button className="cardPlan__select-button">Seleccionar Plan</button>
    </div>
  );
};
