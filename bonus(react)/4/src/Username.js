import React from "react";
import { Form, Input, Button } from "antd";

export default function Username() {
  const onSubmit = (val) => {
    // you will get the username here
    // if you got a value, manage the state then navigate to route /user
  };

  return (
    <Form layout={"vertical"} onFinish={onSubmit}>
      <Form.Item label="username" name="username">
        <Input placeholder="write username" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
