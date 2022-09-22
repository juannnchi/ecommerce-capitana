import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">CAPITANA</div>
        <ul className="navbar__menu">
          <li className="navbar__item">Inicio</li>
          <li className="navbar__item">Sobre Nosotros</li>
          <li className="navbar__item">
            Categorias
            <ul className="navbar__subcategories">
              <li>Categoria 1</li>
              <li>Categoria 2</li>
              <li>Categoria 3</li>
              <li>Categoria 4</li>
            </ul>
          </li>
          <li className="navbar__item">Contacto</li>
        </ul>
        <form className="nav__form" action="#">
          <input
            className="searchbar"
            type="search"
            name="search"
            placeholder="¿Qué Buscás?..."
            aria-label="Busca en el sitio"
          ></input>
          <button className="search__btn">
            <i className="bi bi-search"></i>
          </button>
        </form>
        <i className="bi bi-cart2">0</i>
      </nav>
    </header>
  );
};

export default NavBar;
