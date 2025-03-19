import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
//import SearchBooks from './pages/SearchBooks'
//import SavedBooks from './pages/SavedBooks'
import HomePage from './pages/StartPage.js'
import SavedPages from './pages/SavedPages.js'
import IndividualPage from './pages/IndividualPage.js'
import SignUp from './pages/SignUp.js'
import StartPage from './pages/StartPage.js'
import React from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <StartPage />
      }, {
        path: '/SignUp',
        element: <SignUp />
      },
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/:location',
        element: <IndividualPage />
      },
      {
        path: '/saved',
        element: <SavedPages />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)