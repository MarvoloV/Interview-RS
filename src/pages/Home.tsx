import { Footer, Header } from "../Components/";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="row ">
          <div className="col-xs-6">
            <p>Seguro Salud Flexible</p>
            <p>Creado para ti y tu familia</p>
          </div>
          <img src="/img/family.png" alt="" className="col-xs-6" />
        </div>
        <p>
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría, 100% online.
        </p>
        <form action="">
          <select name="" id="">
            <option value="DNI">DNI</option>
          </select>
          <input type="number" />
          <input type="number" />
          <input type="checkbox" name="" id="" />
          <label>Acepto la Política de Privacidad</label>
          <input type="checkbox" name="" id="" />
          <label>Acepto la Política Comunicaciones Comerciales</label>
          <a href="">Aplican Términos y Condiciones.</a>
          <button>Cotiza aquí</button>
        </form>
      </main>
      <Footer />
    </>
  );
};
