import s from './HomePage.module.css';
import PropTypes from 'prop-types';
function HomePage() {
  return (
    <>
      <h2 className={s.title}>Trending today</h2>
    </>
  );
}
HomePage.propType = {
  films: PropTypes.array.isRequired,
};

export default HomePage;
