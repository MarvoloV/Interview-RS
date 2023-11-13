import { CardPlan } from "../index";
import { List } from "../../interfaces/ListPlans";

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
    <div style={{ overflow: "hidden", marginBottom: "40px" }}>
      <div
        className="row "
        style={{
          overflow: "scroll",
          flexWrap: "nowrap",
          paddingBottom: "40px",
        }}
      >
        {listPlans.map((plan) => (
          <CardPlan plan={plan} key={plan.name} setStep={setStep} />
        ))}
      </div>
    </div>
  );
};
