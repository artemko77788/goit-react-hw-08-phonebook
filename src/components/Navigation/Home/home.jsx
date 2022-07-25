import { NavLink } from 'react-router-dom';
import s from './home.module.css';
const Home = () => {
  return (
    <>
      <NavLink to="/" className={s.link}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={s.link}>
        Contacts
      </NavLink>
    </>
  );
};
export default Home;
