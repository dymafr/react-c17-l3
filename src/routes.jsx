import { createBrowserRouter } from 'react-router';
import App from './App';
import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/Profile/Profile';
import ErrorBoundary from './pages/ErrorBoundary/ErrorBoundary';

export const ROUTER = createBrowserRouter([
  {
    path: '/',
    Component: App,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: '/profile',
        Component: Profile,
        caseSensitive: true,
      },
    ],
  },
]);
