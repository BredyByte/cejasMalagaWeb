import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Main, ServicesAdditionalPage, TrainingAdditionalPage, ModalPage, NotFoundPage } from './routes'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
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
  {
    path: '/modal',
    element: <ModalPage/>,
  },
  {
    path: '/*',
    element: <NotFoundPage/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);