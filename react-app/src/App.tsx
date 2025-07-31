import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

// Define route configuration using React Router v7's data API
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;