import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { routes } from './constants/constants';
import { Provider } from 'react-redux';
import { store } from './services/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Routes>
            {
              routes.map((r) => {
                return <Route path={r.path} element={<r.element />} />
              })
            }
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}