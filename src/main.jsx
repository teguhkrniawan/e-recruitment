import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Lowongan from './pages/Lowongan.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import PengumumanPage from './pages/PengumumanPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/lowongan',
    element: <Lowongan />
  },
  {
    path: '/pengumuman',
    element: <PengumumanPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
