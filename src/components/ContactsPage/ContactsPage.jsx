import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import Section from 'components/Section';

import s from './ContactsPage.module.css';
function ContactsPage() {
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
ContactsPage.propTypes = {};

export default ContactsPage;
