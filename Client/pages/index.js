import react, { useState, useContext } from 'react'
import DashboardPage from '../src/Components/Chessboard/Chessboard'
import TopNavbar from '../src/Components/Navbar/Navbar'

export default function Index() {
  return <>
    <TopNavbar activeTab={'home'}/>
    <DashboardPage/>
  </>
}