import React, { Dispatch, SetStateAction } from "react";
import { CardQuote } from "../index";
import { QuoteItem } from "../../interfaces/ListQuote";

interface Props {
  listQuote: QuoteItem[];
  activeCard: string;
  setActiveCard: Dispatch<SetStateAction<string>>;
}

export const ListQuote = ({ listQuote, activeCard, setActiveCard }: Props) => {
  const handleCardClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveCard(event.target.value);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        {listQuote.map((quote) => (
          <CardQuote
            title={quote.title}
            content={quote.content}
            srcIcon={quote.srcIcon}
            onCardClick={handleCardClick}
            isActive={activeCard === quote.value}
            key={quote.title}
            value={quote.value}
          />
        ))}
      </div>
    </div>
  );
};
