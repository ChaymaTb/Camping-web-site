import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNab from './DashboardNab'

const Dashboard = () => {
    return (
        <div>
            <DashboardNab/>
            <Outlet/>
        </div>
    )
}

export default Dashboard