// import bootstrap from 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import PersonIcon from '@mui/icons-material/Person';
import './SubHeader.css'

function SubHeader() {
  return (
    <div className='container'>
        <p>Envios gratis a partir de $3000</p>
        <div>
        <PersonIcon className='person' color="primary" />
        <a href="#">Inicia Sesión</a>
        <a href="#">Registrarse</a>
        </div>
    </div>
  );
}

export default SubHeader;

