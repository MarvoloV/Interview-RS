import { Footer, Header } from "../Components";
import "../styles/Pages/Home.scss";
import { FormQuote } from "../Components/FormQuote/FormQuote";

export const HomePage = () => {
  return (
    <>
      <Header />

      <main id="home" className="container">
        <img src="./img/blur-purple.png" alt="" className="img__blur__bottom" />
        <img src="./img/blur-turquoise.png" alt="" className="img__blur__top" />
        <div className="row  card">
          <div className="col-xs-7 col-md-4 card__body">
            <span className="card__body__sup">Seguro Salud Flexible</span>
            <p className="card__body__title">Creado para ti y tu familia</p>
            <p className="card__body__description">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría, 100% online.
            </p>
            <div className="form__desktop">
              <FormQuote />
            </div>
          </div>
          <picture className="col-xs-5 col-md-6">
            <img src="/img/family.png" alt="" className="card__body__img" />
          </picture>
        </div>
        <div className="form__mobile">
          <p className="description">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría, 100% online.
          </p>
          <FormQuote />
        </div>
      </main>
      <Footer />
    </>
  );
};
