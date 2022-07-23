import s from './userMenu.module.css';
import { useDispatch } from 'react-redux';
import { authOperations, logOut } from 'redux/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2 className={s.text}>Welcome </h2>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
