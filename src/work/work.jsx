import React from 'react';
import './work.css';

import Travel from './../assets/travel.png';
import Pos from './../assets/pos.png';
import Iot from './../assets/iot.png';
import Inventory from './../assets/inventory.png';

import WorkCard from '../components/workCard/workCard';

export default function Work() {
  return (
    <div className='work-page-container'>
            <p className='header-p1'>MY WORK</p>
            <p className='header-p2'>RECENT WORK</p>

      <div className='work-card-container'>
      <WorkCard image = 'img4' title='E-commerce Site' content='An online store platform that allows users to browse products, make purchases, and manage their accounts. The admin panel enables product management, order tracking, and customer support.'/>
        <WorkCard image = 'img1' title=' TRAVEL WEB SITE' content="Users can customize tour packages and access detailed information on destinations. The site includes an admin panel for managing tours, bookings, and content"/>
        <WorkCard image = 'img2' title= 'INVENTORY MANAGEMENT SYSTEM' content='Designed for businesses to track and organize stock efficiently. The system offers an admin panel for controlling inventory levels, product categories and reports.'/>
        <WorkCard image = 'img3' title='SMART GREEN HOUSE' content='An IoT-based greenhouse system automating irrigation and misting. It monitors conditions and offers remote control for optimized plant growth.'/>
        <WorkCard image = 'img4' title='POS SYSTEM' content='Designed to streamline sales transactions, manage inventory and generate reports. It includes an admin panel for overseeing products, sales data and user access.'/>
      </div>
    </div>
  )
}
