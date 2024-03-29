import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Calendar from './pages/calendar.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/errorPage.jsx'
import Levels from './pages/levels.jsx'
import Stats from './pages/stats.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/stats",
    element: <Stats />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/levels",
    element: <Levels />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
