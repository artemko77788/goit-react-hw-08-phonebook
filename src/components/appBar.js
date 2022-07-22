import AuthNav from './authNav';
import Navigation from './Navigation/Navigation';
import UserMenu from './Navigation/userMenu';

const AppBar = () => {
  return (
    <header>
      <div>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </div>
    </header>
  );
};
export default AppBar;
