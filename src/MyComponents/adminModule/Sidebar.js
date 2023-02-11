import React, { useState } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaShoppingBag } from "react-icons/fa";
import { MdContactMail, MdReviews } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh color="yellow"/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt color="yellow"/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar color="yellow"/>
        },
        {
            path:"/reviews",
            name:"Reviews",
            icon:<MdReviews color="yellow"/>
        },
        {
            path:"/applications",
            name:"Applications",
            icon:<FaShoppingBag color="yellow"/>
        },
        {
            path:"/contact",
            name:"Contact",
            icon:<MdContactMail color="yellow"/>
        },
        {
            path:"/employee",
            name:"Employee",
            icon:<BsPersonLinesFill color="yellow"/>
        }
    ]
    return (
        <div className="container-p">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none" }}type="text text-primary" className="logo">SL</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;


