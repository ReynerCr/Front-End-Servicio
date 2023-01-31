import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import ControlDashboard from './routes/ControlDashboard';
import Login from './routes/Login';
import ProfesorDashboard from './routes/ProfesorDashboard';
import Admin_Profesores from './routes/Admin_Profesores';
import { ThemeProvider } from '@mui/material/styles';
import theme from './temaCoding'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard-profesor", 
    element: <ProfesorDashboard />,
  },
  {
    path: "/dashboard-control",
    element: <ControlDashboard />,
  },
  {
    path:"/admin/profesores",
    element: <Admin_Profesores />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
