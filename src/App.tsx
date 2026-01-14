import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { authRoutes, commonRoutes, protectedRoutes } from './constants/constants';
import { Provider } from 'react-redux';
import { store, useAppDispatch, useAppSelector } from './services/redux/store';
import NotFound from './pages/NotFound/not-found';
import { useEffect } from 'react';
import { getItemFromStorage } from './utils/localstorage.utils';
import { login } from './services/redux/slices/auth.slice';
import type { User } from './types/user.types';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const Navigator = () => {
  const user = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch()

  useEffect(() => {
    getLoggedInUser()
  }, [])

  const getLoggedInUser = () => {
    const user = getItemFromStorage<User | null>("user");
    if (user) {
      dispatch(login(user))
    }
  }

  return <Router>
    <div className="app-container">
      <Routes>
        {
          (commonRoutes.concat(authRoutes)).map((r) => {
            return <Route path={r.path} element={<r.element />} />
          })
        }

        {
          user.accessToken && protectedRoutes.map((r) => {
            return <Route path={r.path} element={<r.element />} />
          })
        }

        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  </Router>
}