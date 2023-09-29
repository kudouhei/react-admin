import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, message, Spin } from "antd";
import { connect } from "react-redux";
import "./index.less";
import { login, getUserInfo } from "@/store/actions";
const Item = Form.Item;


class Login extends Component {
  state = {
    loading: false
  };

  handleSubmit = (event) => {
    // prevent default behavior
    event.preventDefault();

    // form validate
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        // login
        const { username, password } = values;

        this.login(username, password);
      } else {
        console.log("validate failed!");
      }
    });
  };

  login = (username, password) => {
    const { login } = this.props;

    this.setState({loading: true});
    login(username, password).then((data) => {
      message.success("success");
      this.getUserInfo(data.token);
    })
    .catch((error) => {
      this.setState({ loading: false });
      message.error(error);
    });
  };

  getUserInfo = (token) => {
    const { getUserInfo } = this.props;

    getUserInfo(token)
      .then((data) => {
        localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
      })
      .catch((error) => {
        message.error(error);
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

    const { getFieldDecorator } = this.props.form;;

    return (
      <div className="login-container">
        <Form onSubmit={this.handleSubmit} className="content">
          <div className="title"><h2>Login</h2></div>
          <Spin spinning={this.state.loading} tip="加载中...">
            <Form.Item>
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
            </Form.Item>
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
          </Spin>
        </Form>
      </div>
    );
  }
}

const WrapLogin = Form.create()(Login);

export default connect(state => state.user, { login, getUserInfo })(WrapLogin);