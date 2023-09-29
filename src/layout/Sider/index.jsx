import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import Menu from "./Menu";
const { Sider } = Layout;

const LayoutSider = (props) => {
  const { sidebarCollapsed } = props;
  return (
    <Sider collapsible collapsed={sidebarCollapsed} trigger={null}>
      <Menu />
    </Sider>
  );
};

export default connect((state) => state.app)(LayoutSider);