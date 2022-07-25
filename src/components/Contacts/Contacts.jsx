import PropTypes from 'prop-types';

import { GrBasket } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';
import { useDeleteContactMutation, useGetContactsQuery } from 'redux/api';
import { SpinnerRoundOutlined } from 'spinners-react';
import { filteredContacts, getFilter } from 'redux/contactsSelectors';
import { useSelector } from 'react-redux';
import s from './Contacts.module.css';
import { Paper } from '@mui/material';

const Contacts = () => {
  const [deleteUser, result] = useDeleteContactMutation();
  const filter = useSelector(getFilter);
  const { error, filteredData, isLoading } = useGetContactsQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        filteredData: filteredContacts(result, filter),
      };
    },
  });

  return (
    <div>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: '#ffffff78',
          padding: '10px',
          marginTop: '20px',
        }}
      >
        {error && <p>No contacts</p>}

        {isLoading || result.isLoading ? (
          <SpinnerRoundOutlined className={s.spiner} />
        ) : (
          <ul className={s.list}>
            {filteredData?.map(({ name, id, number }) => {
              return (
                <li key={id} className={s.item}>
                  <div className={s.text}>
                    <span>{name}</span>: <span>{number}</span>
                  </div>
                  <button
                    key={id}
                    onClick={() => deleteUser(id)}
                    className={s.btn}
                  >
                    <BiArrowBack className={s.arrow} />
                    <GrBasket />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </Paper>
    </div>
  );
};

Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
