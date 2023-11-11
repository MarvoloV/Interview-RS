import "./input.scss";
interface Props {
  label: string;
  classNameInputGroup?: string;
  type?: string;
}
export const Input = ({
  label,
  classNameInputGroup = "col-xs-6",
  type = "text",
}: Props) => {
  return (
    <div className={`inputGroup ${classNameInputGroup}`}>
      <input type={type} required autoComplete="off" />
      <label>{label}</label>
    </div>
  );
};
