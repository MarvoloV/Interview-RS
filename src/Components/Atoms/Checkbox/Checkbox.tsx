import "./Checkbox.scss";
interface Props {
  title: string;
}
export const Checkbox = ({ title }: Props) => {
  return (
    <div className="checkbox-wrapper-33">
      <label className="checkbox">
        <input
          type="checkbox"
          className="checkbox__trigger visuallyhidden"
          required
        />
        <span className="checkbox__symbol">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1"
            viewBox="0 0 28 28"
            height="28px"
            width="28px"
            className="icon-checkbox"
            aria-hidden="true"
          >
            <path d="M4 14l8 7L24 7"></path>
          </svg>
        </span>
        <p className="checkbox__textwrapper">{title}</p>
      </label>
    </div>
  );
};
