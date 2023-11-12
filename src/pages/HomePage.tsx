import { Footer, Header } from "../Components";
import "../styles/Pages/Home.scss";
import { Input, Checkbox, Select } from "../Components/Atoms";

export const HomePage = () => {
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
        <form action="" className=" form">
          <div className="row container">
            <Select />
            <Input label="Nro. de documento" type="number" />
          </div>
          <Input
            label="Celular"
            classNameInputGroup="col-xs-12 radius"
            type="number"
          />
          <Checkbox title={"Acepto la Política de Privacidad"} />
          <Checkbox title={"Acepto la Política Comunicaciones Comerciales"} />
          <a href="#" className="link">
            Aplican Términos y Condiciones.
          </a>
          <button className="button primary">Cotiza aquí</button>
        </form>
      </main>
      <Footer />
    </>
  );
};
