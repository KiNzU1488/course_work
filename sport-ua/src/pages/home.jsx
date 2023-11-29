import { NavLink, Outlet } from 'react-router-dom'
import '../styles/home.css'
import Logo from '../img/modlogo.svg'
import { useEffect, useState } from 'react'
import { WindowWidthProvider } from '../context/windowWidthProvider';

export default function Home() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    <>{windowWidth > 1300 ?
      <header className="my-header">
        <div className="my-header__container"><img src={Logo} alt="Logo" />
          <h3 className={windowWidth > 1300 ? 'my-header__title' : 'my-header__title small'}>Управління фізичної культури і спорту МО України</h3>
        </div>
        <div className="my-header__links">
          <NavLink className={windowWidth > 1300 ? "my-header__link" : "my-header__link small__link"} to="/">Главная</NavLink>
          <NavLink className={windowWidth > 1300 ? "my-header__link" : "my-header__link small__link"} to="/sizm">Участь у заходах Міжнародної ради військового спорту (СІЗМ)</NavLink>
          <NavLink className={windowWidth > 1300 ? "my-header__link" : "my-header__link small__link"} to="/slavaUa">Олімпійська слава ЗСУ</NavLink>
          <NavLink className={windowWidth > 1300 ? "my-header__link" : "my-header__link small__link"} to="/news">Новини</NavLink>
        </div>
      </header> :
      <>
        <header className="my-header">
          <div className="my-header__container"><img src={Logo} alt="Logo" />
            <h3 className={windowWidth > 1300 ? 'my-header__title' : 'my-header__title small'}>Управління фізичної культури і спорту МО України</h3>
          </div>
        </header>
        <header className="my-header">
          <div className="my-header__links">
            <NavLink className={windowWidth > 1300 ? "my-header__link" : "my-header__link small__link"} to="/">Главная</NavLink>
            <NavLink className={windowWidth > 1300 ? "my-header__link" : "my-header__link small__link"} to="/sizm">Участь у заходах Міжнародної ради військового спорту (СІЗМ)</NavLink>
            <NavLink className={windowWidth > 1300 ? "my-header__link" : "my-header__link small__link"} to="/slavaUa">Олімпійська слава ЗСУ</NavLink>
            <NavLink className={windowWidth > 1300 ? "my-header__link" : "my-header__link small__link"} to="/news">Новини</NavLink>
          </div>
        </header>
      </>
    }
    <WindowWidthProvider>
      <Outlet windowWidth={windowWidth} />
    </WindowWidthProvider>
    </>
  )
}