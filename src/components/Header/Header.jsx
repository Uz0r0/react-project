import './Header.css';
import logo from '../../assets/images/logo.png';
import product from '../../assets/images/index-can.png';
import background from '../../assets/images/background.png';

function Header() {
  
  return (
    <header>
      <div className='Header-top d-flex'>
        <div>
          <img src={logo} alt="Логотип" />
        </div> 
        <div className='nav'>
          <ul className='d-flex'>
            <li className='active'><a href="">ГЛАВНАЯ</a></li>
            <li><a href="">КАТАЛОГ ПРОДУКЦИИ</a></li>
            <li><a href="">ПОДБОР ПРОГРАММЫ</a></li>
          </ul>
        </div>
      </div>
      <div className='Header-bottom'>
        <div className='info'>
          <h1>Функциональное питание для котов</h1>
          <p>ЗАНЯЛСЯ СОБОЙ? ЗАЙМИСЬ КОТОМ!</p>
          <button>ПОДОБРАТЬ ПРОГРАММУ</button>
        </div>
        <div>
          <img src={product} alt="Продукт" className='product-image'/>
          <img src={background} alt="Задний фон" className='background'/>
        </div> 
      </div>
    </header>
    
  );
}

export default Header;