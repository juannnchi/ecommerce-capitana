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
          <li className="navbar__item"><a href="#">Inicio</a></li>
          <li className="navbar__item"><a href="#">Sobre Nosotros</a></li>
          <li className="navbar__item categorias"><a href="#">Productos</a>
            
            <ul className="navbar__submenu">
              <li className="navbar__subitem"><a href="#">Todos Los Productos</a></li>
              <li className="navbar__subitem"><a href="#">Remeras</a></li>
              <li className="navbar__subitem"><a href="#">Camperas</a></li>
              <li className="navbar__subitem"><a href="#">Buzos</a></li>
              <li className="navbar__subitem"><a href="#">Zapatillas</a></li>
            </ul>
          </li>
          <li className="navbar__item"><a href="#">Contacto</a></li>
        </ul>
        <CartWidget />
      </nav>
    </header>
    </>
  );
}

export default NavBar;

