import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      theme="dark"
      mode="horizontal"
      selectedKeys={[current]}
    >
      <Menu.Item key="home">
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item key="contacts">
        <Link to="/contact-info">Contacts</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;
