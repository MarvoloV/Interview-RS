import "./cardPlan.scss";
import { List } from "../../interfaces/ListPlans";
import { PlanData, useContextQuote, setPlanDataAction } from "../../store/";

interface Props {
  plan: List;
  setStep: React.Dispatch<React.SetStateAction<number>>;
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

export const CardPlan = ({ plan, setStep }: Props) => {
  const { dispatch } = useContextQuote();

  const onClickPlan = () => {
    const planInfo: PlanData = {
      name: plan.name,
      price: plan.price,
    };
    dispatch(setPlanDataAction(planInfo));
    setStep(2);
  };
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
      <button className="cardPlan__select-button" onClick={onClickPlan}>
        Seleccionar Plan
      </button>
    </div>
  );
};
