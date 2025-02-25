import '../styles/nav.css'
import { Flecha, Logo } from './svg/svg'

const Nav = () => {
  return (
    <nav className='nav'>
      <div className="logo"><span><Logo /></span> <span>Rotar AI</span></div>  
      <ul>
        <li><a href="">Product</a></li>
        <li><a href="">Solutions</a></li>
        <li><a href="">Resourse</a></li>
        <li><a href="">Pricing</a></li>
      </ul>
      <div className="Options">
        <ul>
            <li><a href="">Login</a></li>
            <li><a href="">Book a demo <span><Flecha /></span></a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
