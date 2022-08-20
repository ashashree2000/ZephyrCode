import { Col, Form, Input, Row, Button, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/userActions";

const Register = () => {
  const dispatch = useDispatch();
  function register(values) {
    if (values.password !== values.confirmpassword) {
      message.error("Passwords not matched");
    } else {
      console.log(values);
      dispatch(registerUser(values));
    }
  }
  return (
    <div className="login">
      <Row justify="center">
        <Col lg={10} sm={24} className="bs p-5">
          <h3>Register</h3>
          <hr />
          <Form layout="vertical" onFinish={register}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmpassword"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
