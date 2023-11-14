import React, { Dispatch, SetStateAction } from "react";
import { CardQuote } from "../index";
import { QuoteItem } from "../../interfaces";

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
    <div className="col-xs-12 col-md-6 quote__container">
      <div className="quote__list">
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
