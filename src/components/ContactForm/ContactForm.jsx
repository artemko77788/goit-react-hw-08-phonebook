import s from './ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAddContactMutation, useGetContactsQuery } from 'redux/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const handleAddContact = async (values, { resetForm }) => {
    for (const { name } of data) {
      if (name.toLowerCase() === values.name.toLowerCase()) {
        alert(`${name} is already in contacts.`);
        resetForm();
        return;
      }
    }

    try {
      await addContact(values);
      resetForm();
      toast.success('Added!', {
        position: 'top-center',
        autoClose: 200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required(<p class={s.errorMasage}>Enter your Name</p>),
    number: Yup.number().required(
      <p class={s.errorMasage}>Enter your Number</p>
    ),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleAddContact}
      className={s.form}
      validationSchema={SignupSchema}
    >
      <Form>
        <label htmlFor="name" className={s.label}>
          Name:
        </label>
        <div>
          <ErrorMessage name="name" />
        </div>

        <Field
          placeholder={'Enter your  Name'}
          className={s.input}
          type="text"
          name="name"
        />

        <label htmlFor="number" className={s.label}>
          <></>

          <p>Number:</p>
        </label>
        <div>
          <ErrorMessage name="number" />
        </div>

        <Field
          placeholder={'Enter your  Number'}
          className={s.input}
          type="tel"
          name="number"
        />

        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
