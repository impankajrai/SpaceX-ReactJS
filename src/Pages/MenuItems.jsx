import React from 'react'
import { Dropdown, Space,Menu, Switch } from 'antd';

export const AllMenu = ({ onPrint, key }) => (
  <Menu.Item onClick={onPrint} key={key}>
    <div >
      <span style={{ color: "#343938" }}>All Launches</span>
    </div>
  </Menu.Item>
);

export const UpcommingMenu = ({ onClick, key }) => (
  <Menu.Item onClick={onClick} key={key}>
    <div >
      <span style={{ color: "#343938" }}>Upcomming Launches</span>
    </div>
  </Menu.Item>
);

export const SuccessMenu = ({ onPrint, key }) => (
  <Menu.Item onClick={onPrint} key={key}>
    <div >
      <span style={{ color: "#343938" }}>Successful Launches</span>
    </div>
  </Menu.Item>
);

export const FailedMenu = ({ onPrint, key }) => (
  <Menu.Item onClick={onPrint} key={key}>
    <div >
      <span style={{ color: "#343938" }}>Failed Launches</span>
    </div>
  </Menu.Item>
);

export {}