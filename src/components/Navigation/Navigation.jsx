import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <header>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink className={s.link} to="/">
              Home
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink className={s.link} to="/contacts">
              Movies
            </NavLink>
          </li>
        </ul>
      </header>

      <Outlet />
    </>
  );
};
export default Navigation;
