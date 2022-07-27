import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/contactsSelectors';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const shouldREdirected = isLoggedIn && restricted;

  return shouldREdirected ? <Navigate to="/contacts" /> : children;
}
