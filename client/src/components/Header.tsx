import logo from '../assets/icons/daraz.png';
import '../styles/Header.css';

export default function Header() {
  return (
    <div className="Header">
      <div className="header__icon">
        <img src={logo} alt="" />
      </div>
      <div className="search__box">
        <input type="text" />
      </div>
      <div className="header__icon">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
