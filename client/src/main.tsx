import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import HomePage from './pages/HomePage.js'
import IndividualPage from './pages/IndividualPage.js'
import SignUp from './pages/SignUp.js'
import StartPage from './pages/StartPage.js'
import React from 'react'
import PrivateRoute from './components/PrivateRoute.js'
import SavedPlaces from './pages/SavedPlaces.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: localStorage.getItem('id_token') ? <Navigate to="/home" /> : <StartPage />,
      },
      {
        path: '/SignUp',
        element: <SignUp handleModalClose={() => console.log('Modal closed')} />
      },
      {
        path: '/home',
        element: <PrivateRoute><HomePage /></PrivateRoute>
      },
      {
        path: '/home/:city',
        element: <PrivateRoute><IndividualPage /></PrivateRoute>
      },
      {
        path: '/saved',
        element: <PrivateRoute><SavedPlaces /></PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);