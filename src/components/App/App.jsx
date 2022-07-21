import Navigation from '../Navigation';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NoSuchPage from 'components/views/NoSuchPage';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';
import Movies from 'components/views/Contacts';
import Register from 'components/views/Register';
import Login from 'components/views/Login';

const Home = lazy(() => import('components/views/Home'));

export const App = () => {
  return (
    <div className={s.app}>
      <ToastContainer autoClose={1500} />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index exact element={<Home />} />
            <Route path="contacts" element={<Movies />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NoSuchPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
