import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register" className={s.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={s.link}>
        Login
      </NavLink>
    </>
  );
};
export default AuthNav;
