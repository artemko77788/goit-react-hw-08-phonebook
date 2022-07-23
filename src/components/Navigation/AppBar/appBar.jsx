import AuthNav from '../AuthNav/authNav';
import Home from '../Home/home';
import UserMenu from '../../userMenu';
import { useSelector } from 'react-redux';
import s from './appBar.module.css';
import { getIsLoggedIn } from 'redux/contactsSelectors';
import Section from 'components/Section';
import { Outlet } from 'react-router-dom';
const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header>
      <Section>
        <div className={s.navbar}>
          <Home />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
        <Outlet />
      </Section>
    </header>
  );
};
export default AppBar;
