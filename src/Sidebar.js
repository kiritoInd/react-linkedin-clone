import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'


function Sidebar() {
    const recentItem = (topic)=>(
        <div className="sidebar__recentItem">
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
        </div>
        );
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80" alt="" />
        <Avatar className='sidebar__avatar' />
        <h2>Shreyansh Rajput</h2>
        <h4>shreyansh69420@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p>who viewed you</p>
            <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className="sidebar__stat">
            <p>view on post</p>
            <p className='sidebar__statNumber'>2,643</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programing")}
        {recentItem("developer")}
        {recentItem("design")}
      </div>
    </div>
  )
}

export default Sidebar
