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
  const cardStyle = {
    border: isActive ? "3px solid #141938" : "0px solid #ccc",
    borderRadius: "24px",
    padding: "10px",
    boxShadow: "0px 1px 32px 0px #AEACF359",
  };

  return (
    <div style={cardStyle}>
      <div className="radio-input">
        <input
          type="radio"
          name="color"
          checked={isActive}
          onChange={onCardClick}
          value={value}
          id={title}
        />
        <label htmlFor={title}>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="./icons/ic_check.svg" alt="" />
          </span>
        </label>
      </div>
      <div className="row">
        <img src={srcIcon} alt="" />
        <h3>{title}</h3>
      </div>
      <p>{content}</p>
    </div>
  );
};
