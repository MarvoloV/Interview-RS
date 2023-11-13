import "./input.scss";
import { useFormContext } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  classNameInputGroup?: string;
  type?: string;
}
export const Input = ({
  label,
  name,
  classNameInputGroup = "col-xs-6",
  type = "text",
}: Props) => {
  const { register } = useFormContext();

  return (
    <div className={`inputGroup ${classNameInputGroup}`}>
      <input type={type} required autoComplete="off" {...register(name)} />
      <label>{label}</label>
    </div>
  );
};
