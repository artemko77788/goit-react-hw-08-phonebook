import s from './userMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/authOperations';
import { getUser } from 'redux/contactsSelectors';
import { Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <>
      <h2 className={s.text}> Welcome {user.name.toUpperCase()}</h2>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </>
  );
};

export default UserMenu;
