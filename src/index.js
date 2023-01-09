import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Main, ServicesAdditionalPage, TrainingAdditionalPage, ModalPage, NotFoundPage } from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage/>,
    children: [
      {
        index: true,
        element: <Main/>,
      },
      {
        path: '/services',
        element: <ServicesAdditionalPage/>
      },
      {
        path: '/training',
        element: <TrainingAdditionalPage/>
      },
    ]
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);