import PropTypes from 'prop-types';

import { GrBasket } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';
import { useDeleteContactMutation, useGetContactsQuery } from 'redux/api';
import { SpinnerRoundOutlined } from 'spinners-react';
import { filteredContacts, getFilter } from 'redux/contactsSelectors';
import { useSelector } from 'react-redux';
import s from './Contacts.module.css';

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
      {error && <p>Somesing wrong</p>}

      {isLoading || result.isLoading ? (
        <SpinnerRoundOutlined className={s.spiner} />
      ) : (
        <ul className={s.list}>
          {filteredData?.map(({ name, id, number }) => {
            return (
              <li key={id} className={s.item}>
                <span>{name}</span>: <span>{number}</span>
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
