import SubHeader from "../SubHeader/SubHeader";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <>
    <SubHeader />
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">Inicio</li>
          <li className="navbar__item">Sobre Nosotros</li>
          <li className="navbar__item">
            Productos
            <ul className="navbar__submenu">
              <li className="navbar__item">Todos los Productos</li>
              <li className="navbar__item">Remeras</li>
              <li className="navbar__item">Camperas</li>
              <li className="navbar__item">Buzos</li>
              <li className="navbar__item">Zapatillas</li>
            </ul>
          </li>
          <li className="navbar__item">Contacto</li>
        </ul>
        <CartWidget />
      </nav>
    </header>
    </>
  );
}

export default NavBar;
