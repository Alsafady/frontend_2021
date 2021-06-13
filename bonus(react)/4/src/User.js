import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function User() {
  return (
    <div className="user_content">
      <Avatar icon={<UserOutlined />} />
      <h2>Username {/* replace this with the name from the state*/}</h2>
    </div>
  );
}
