import '../styles/nav.css'
import { Flecha, Logo } from './svg/svg'

const Nav = () => {
  return (
    <nav className='nav'>
      <div className="logo"><span><Logo /></span> <span>Rotar AI</span></div>  
      <ul>
        <li><a href="">Producto</a></li>
        <li><a href="">Soluciones</a></li>
        <li><a href="">Recurso</a></li>
        <li><a href="">Precios</a></li>
      </ul>
      <div className="Options">
        <ul>
            <li><a href="">Acceso</a></li>
            <li><a href="">Reserva una demo<span><Flecha /></span></a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
