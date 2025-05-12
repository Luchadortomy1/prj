import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import './App.css'

const App = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

export default App