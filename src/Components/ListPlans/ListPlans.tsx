import { CardPlan } from "../index";
import { List } from "../../interfaces/ListPlans";

interface Props {
  list: List[];
}

export const ListPlans = ({ list }: Props) => {
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
        {list
          .filter((plan) => plan.age > 33)
          .map((plan) => (
            <CardPlan plan={plan} />
          ))}
      </div>
    </div>
  );
};
