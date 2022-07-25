import s from './userMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/authOperations';
import { getUser } from 'redux/contactsSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <>
      <h2 className={s.text}> Welcome {user.name.toUpperCase()}</h2>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
