import s from './HomePage.module.css';

function HomePage() {
  return (
    <div className={s.wraper}>
      <h2 className={s.title}>Contact book</h2>
      <p className={s.text}>
        Online address book keeps your business connected to critical contact
        lists. With an online address book, your company can create, share, and
        store external contacts and internal directories with just an Internet
        connection.
      </p>
    </div>
  );
}

export default HomePage;
