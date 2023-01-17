import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './App';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LeftMenu from './components/LeftMenu';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/menu',
    element: <LeftMenu/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
