import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NoSuchPage from 'components/views/NoSuchPage';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';
import { authOperations } from 'redux/authOperations';

import { useDispatch } from 'react-redux';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import AppBar from 'components/Navigation/AppBar';

const Home = lazy(() => import('components/views/Home'));
const Contacts = lazy(() => import('components/views/Contacts'));
const Register = lazy(() => import('components/views/Register'));
const Login = lazy(() => import('components/views/Login'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshCurentPage());
  }, [dispatch]);
  return (
    <div className={s.app}>
      <ToastContainer autoClose={1500} />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index exact element={<Home />} />

            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <Register />
                </PublicRoute>
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NoSuchPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
