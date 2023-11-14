import { useFormContext } from "react-hook-form";
import "./select.scss";

interface Props {
  name: string;
}

export const Select = ({ name }: Props) => {
  const { register } = useFormContext();

  return (
    <div className="custom-select col-xs-5">
      <select {...register(name)}>
        <option value="DNI">DNI</option>
        <option value="Carnet de Extranjeria">Carnet de Extranjeria</option>
      </select>
      <div className="select-arrow">
        <img src="./icons/arrow_down.svg" alt="" />
      </div>
    </div>
  );
};
