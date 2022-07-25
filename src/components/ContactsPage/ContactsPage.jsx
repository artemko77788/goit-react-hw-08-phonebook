import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';

import s from './ContactsPage.module.css';
function ContactsPage() {
  return (
    <>
      <Filter />
      <div className={s.items}>
        <ContactForm />
        <Contacts />
      </div>
    </>
  );
}
ContactsPage.propTypes = {};

export default ContactsPage;
