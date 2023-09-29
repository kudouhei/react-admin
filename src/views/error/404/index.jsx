import React, { Component } from "react";
import { Button, Row, Col } from "antd";
import { connect } from "react-redux";

import "./index.less";

/* 404 page */
class NotFound extends Component {
  goHome = () => {
    this.props.history.replace("/home");
  };

  render() {
    return (
      <Row className="not-found">
        <Col span={12} className="left"></Col>
        <Col span={12} className="right">
          <h1>404</h1>
          <h2>page not found</h2>
          <div>
            <Button type="primary" onClick={this.goHome}>
              back to Home
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default connect()(NotFound);