import { Footer, Header } from "../Components";
import "../styles/Pages/Home.scss";
import { FormQuote } from "../Components/FormQuote/FormQuote";

export const HomePage = () => {
  // const { dispatch } = useContextQuote();

  return (
    <>
      <Header />
      <main id="home">
        <div className="row  card">
          <div className="col-xs-7 card__body">
            <span className="card__body__sup">Seguro Salud Flexible</span>
            <p className="card__body__title">Creado para ti y tu familia</p>
          </div>
          <picture className="col-xs-5">
            <img src="/img/family.png" alt="" className="card__body__img" />
          </picture>
        </div>
        <p className="description">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría, 100% online.
        </p>
        <FormQuote />
      </main>
      <Footer />
    </>
  );
};
