import { CardPlan } from "../index";
import { List } from "../../interfaces/ListPlans";
import "./listPlans.scss";
interface Props {
  list: List[];
  age: number;
  discount: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const ListPlans = ({ list, age, discount, setStep }: Props) => {
  const listPlans = list
    .filter((plan) => plan.age > age)
    .map((plan) => ({ ...plan, price: plan.price * discount }));
  return (
    <div className="list__container">
      <div className="row list__plan">
        {listPlans.map((plan) => (
          <CardPlan plan={plan} key={plan.name} setStep={setStep} />
        ))}
      </div>
    </div>
  );
};
