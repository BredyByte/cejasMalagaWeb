import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Main, ServicesAdditionalPage, TrainingAdditionalPage, NotFoundPage } from './routes'

import { HashRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route index element={<Main />} />
      <Route path='training' element={<TrainingAdditionalPage />} />
      <Route path='services' element={<ServicesAdditionalPage />} />
      <Route path='*' element={<NotFoundPage />}/>
    </Routes>
  </HashRouter>
);