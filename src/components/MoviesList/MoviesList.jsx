import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import Section from 'components/Section';

import s from './MoviesList.module.css';
function MoviesList() {
  return (
    <>
      <Section>
        <Filter />
        <div className={s.items}>
          <ContactForm />

          <Contacts />
        </div>
      </Section>
    </>
  );
}
MoviesList.propTypes = {};

export default MoviesList;
