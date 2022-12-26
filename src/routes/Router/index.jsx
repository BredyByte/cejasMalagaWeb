import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import { Main, TrainingAdditionalPage, ServicesAdditionalPage, NotFoundPage, ModalPage } from '../'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Main/>}
        errorElement={<NotFoundPage/>}
      />
      <Route
        path="/modal"
        element={<ModalPage/>}
      />
      <Route
        path="/training"
        element={<TrainingAdditionalPage/>}
      />
      <Route
        path="/services"
        element={<ServicesAdditionalPage/>}
      />
    </>
)
)

export default router