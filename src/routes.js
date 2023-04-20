import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
const routes = [
  {
    path: '/',
    Element: HomePage
  },
  {
    path: '/register',
    Element: Register
  },
  {
    path: '/login',
    Element: Login
  }
];

export {routes};
