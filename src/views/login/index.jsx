import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button } from "antd";
import { connect } from "react-redux";

import "./index.less";
import { login } from "@/store/actionCreator/auth";
import { getUserInfo } from "@/store/actionCreator/user";

const Item = Form.Item; 

class Login extends Component {
  handleSubmit = (event) => {
    // prevent default behavior
    event.preventDefault();

    // form validate
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        // login
        const { username, password } = values;

        this.props.login(username, password);
      } else {
        console.log("validate failed!");
      }
    });
  };

  // password validate
  validatePwd = (rule, value, callback) => {
    console.log("validatePwd()", rule, value);
    if (!value) {
      callback("must input");
    } else if (value.length < 4) {
      callback("Password length cannot be less than 4 digits");
    } else if (value.length > 12) {
      callback("Password length cannot be greater than 12 digits");
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback("Passwords must be in English, numeric or underlined");
    } else {
      callback(); // success
    }
  };

  render() {
    // user already login
    const {token}  = this.props
    if (token) {
      return <Redirect to="/home" />;
    }

    const form = this.props.form;
    const { getFieldDecorator } = form;

    return (
      <div className="login">
        <header className="login-header">
          <h1>React: admin system</h1>
        </header>
        <section className="login-content">

          <h2>User Login</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "must input",
                  },
                  { min: 4, message: "cannot be less than 4 digits" },
                  { max: 12, message: "cannot be greater than 12 digits" },
                  {
                    pattern: /^[a-zA-Z0-9_]+$/,
                    message: "must be in English, numeric or underlined",
                  },
                ],
                initialValue: "admin", // initial
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="username"
                />
              )}
            </Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    validator: this.validatePwd,
                  },
                ],
                initialValue: "123456", // initial
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

const WrapLogin = Form.create()(Login);

export default connect(state => state.user, { login, getUserInfo })(WrapLogin);