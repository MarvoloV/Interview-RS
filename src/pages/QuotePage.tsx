import "../styles/Pages/Quote.scss";
import { Header, ListQuote, ListPlans, PaymentSummary } from "../Components";
import { QuoteItem } from "../interfaces/ListQuote";
import { useEffect, useState } from "react";
import { List, getPlans } from "../services/Quote";
import { useContextQuote } from "../store/QuoteProvider";

const listQuote: QuoteItem[] = [
  {
    value: "me",
    title: "Para mi",
    content: "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    srcIcon: "./icons/IcProtectionLight.svg",
  },
  {
    value: "other",
    title: "Para alguien más",
    content:
      "Realiza una cotización para uno de tus familiares o cualquier persona.",
    srcIcon: "./icons/IcAddUserLight.svg",
  },
];

export const QuotePage = () => {
  const [activeCard, setActiveCard] = useState("");
  const { state } = useContextQuote();
  const [list, setList] = useState<List[]>([]);
  const [step, setStep] = useState(1);
  const getListData = async () => {
    const response = await getPlans();

    setList(response.list);
  };
  useEffect(() => {
    getListData();
  }, []);

  return (
    <div className=" container ">
      <Header />

      <div id="quote" className="container">
        {step === 1 && (
          <>
            <div className="quote__intro">
              <p className="quote__intro-title">
                Rocío ¿Para quién deseas cotizar?
              </p>
              <p className="quote__intro-subtitle">
                Selecciona la opción que se ajuste más a tus necesidades.
              </p>
            </div>
            <ListQuote
              listQuote={listQuote}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
            {activeCard && (
              <ListPlans
                list={list}
                age={state.user.age!}
                discount={activeCard === "other" ? 0.95 : 1}
                setStep={setStep}
              />
            )}
          </>
        )}
        {step === 2 && <PaymentSummary />}
      </div>
    </div>
  );
};

/*  useEffect(() => {
    const listUpdate = list.map((plan) => {
      if (activeCard === "other") {
        plan.price = (plan.price * (100 - discount)) / 100;
      } else {
        plan.price = plan.price * 1.05;
      }
      return plan;
    });
    console.log(
      "🚀 ~ file: QuotePage.tsx:45 ~ listUpdate ~ listUpdate:",
      listUpdate
    );
  }, [activeCard]); */
