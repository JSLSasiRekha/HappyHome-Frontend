import React from 'react'
import AdminHeader from '../../components/Layout/AdminHeader'
import AdminSideBar from '../../components/Admin/Layout/AdminSideBar'
import AllSellers from "../../components/Admin/AllSellers";
import ApproveSellers from '../../components/Admin/ApproveSellers';

const AdminSellerApproval = () => {
  return (
    <div>
    <AdminHeader />
    <div className="bg-blue-100 w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <AdminSideBar active={9} />
        </div>
        <ApproveSellers/>
      </div>
    </div>
  </div>
  )
}

export default AdminSellerApproval