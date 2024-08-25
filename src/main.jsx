import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home.jsx';
import App from './App.jsx'
import './index.css'
import NotFound from './components/NotFound.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'*',
    element: <NotFound />
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
