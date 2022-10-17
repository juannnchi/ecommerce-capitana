import SubHeader from "../SubHeader/SubHeader";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import {NavLink} from "react-router-dom"

function NavBar() {
  return (
    <>
    <SubHeader />
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item"><NavLink>Inicio</NavLink></li>
          <li className="navbar__item"><NavLink>Sobre Nosotros</NavLink></li>
          <li className="navbar__item categorias"><NavLink>Productos</NavLink>
            
            <ul className="navbar__submenu">
              <li className="navbar__subitem"><NavLink to='/'>Todos Los Productos</NavLink></li>
              <li className="navbar__subitem"><NavLink to='/Productos/Remeras'>Remeras</NavLink></li>
              <li className="navbar__subitem"><NavLink to='/Productos/Camperas'>Camperas</NavLink></li>
              <li className="navbar__subitem"><NavLink to='/Productos/Buzos'>Buzos</NavLink></li>
              <li className="navbar__subitem"><NavLink to='/Productos/Zapatillas'>Zapatillas</NavLink></li>
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

