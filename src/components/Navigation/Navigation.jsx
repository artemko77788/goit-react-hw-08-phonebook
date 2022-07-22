import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';
import UserMenu from './userMenu';

const Navigation = () => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} to="/">
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="/contacts">
            Contacts
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="/register">
            Register
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <UserMenu />
        </li>
      </ul>

      <Outlet />
    </>
  );
};
export default Navigation;
