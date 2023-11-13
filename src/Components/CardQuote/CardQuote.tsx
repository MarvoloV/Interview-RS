import "./CardQuote.scss";

interface Props {
  title: string;
  content: string;
  onCardClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
  srcIcon: string;
  value: string;
}

export const CardQuote = ({
  title,
  content,
  onCardClick,
  isActive,
  srcIcon,
  value,
}: Props) => {
  return (
    <div
      className={`col-xs-12 col-md-6 ${
        isActive ? "card__quote-active" : "card__quote"
      }`}
    >
      <div className="radio-input">
        <input
          type="radio"
          name="color"
          checked={isActive}
          onChange={onCardClick}
          value={value}
          id={title}
        />
        <label htmlFor={title} className="radio-input__label">
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="radio-input__check"
          >
            <img
              src="./icons/ic_check.svg"
              alt=""
              className="radio-input__check-icon"
            />
          </span>
        </label>
      </div>
      <div className="card__row row">
        <img src={srcIcon} alt="" className="row__icon" />
        <h3 className="row__title">{title}</h3>
      </div>
      <p className="card__content">{content}</p>
    </div>
  );
};
