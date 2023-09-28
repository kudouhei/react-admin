import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import { Layout } from 'antd';
import './index.less';

const { Header, Sider, Content, Footer } = Layout;

class Main extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  componentWillMount() {
    console.log('props:', this.props);

    // this.props.getUserInfo(this.props.token);
  }

  render() {
    const { token } = this.props;

    if (!token) {
      return <Redirect to="/login" />;
    }

    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <NavMenu />
        </Sider>
        <Layout>
          <Header className="header">
            <NavBar />
          </Header>
          <Content className="content">{this.props.children}</Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect((state) => state.user)(Main);
