import React from "react";
import 'antd/dist/antd.css';
import { Menu } from 'antd';


export function Navbar () {

    const items = [
        {label: 'Home'}        
    ]
    
 return (
    
    <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items}
    />     
    
 )
}

export default Navbar;