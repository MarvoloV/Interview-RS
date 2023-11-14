import "./header.scss";

export const Header = () => {
  return (
    <header className="container between-xs header ">
      <img src="/icons/rimac.svg" alt="" className="header__logo" />

      <div className="row contact">
        <p className="contact__buy">¡Compra por este medio!</p>
        <img src="/icons/Telephone.svg" alt="" className="contact__img" />
        <p className="contact__phone">(01) 411 6001</p>
      </div>
    </header>
  );
};
