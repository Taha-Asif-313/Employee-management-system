import React from 'react'
import AdminBar from '../Components/Admin/AdminBar/AdminBar'
import { Outlet } from 'react-router-dom'

const AdminPannel = () => {
  return (
    <>
    <div className='flex w-full h-screen justify-end lg:flex-row flex-col'>
    <AdminBar/>
    <Outlet/>
    </div>
    </>
  )
}

export default AdminPannel