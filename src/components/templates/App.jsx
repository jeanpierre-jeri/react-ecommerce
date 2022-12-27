import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainHeader } from '../organisms/MainHeader'

export const App = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  )
}
