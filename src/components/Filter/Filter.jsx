import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactSlice';
import { DebounceInput } from 'react-debounce-input';
import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();

  return (
    <form>
      <label className={s.label}>
        Find contacts by name
        <DebounceInput
          type="text"
          minLength={2}
          debounceTimeout={300}
          onChange={e => dispatch(setFilter(e.target.value))}
          className={s.input}
        />
      </label>
    </form>
  );
}

export default Filter;
