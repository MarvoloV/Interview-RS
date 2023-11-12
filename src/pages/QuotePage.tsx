import "../styles/Pages/Quote.scss";
import { Header } from "../Components/Header/Header";
import { PaymentSummary } from "../Components/";
export const QuotePage = () => {
  return (
    <>
      <Header />
      <div id="quote" className="container">
        <PaymentSummary />
      </div>
    </>
  );
};
