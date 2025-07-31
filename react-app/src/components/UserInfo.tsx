import React from "react";
import { DiscordUser } from "../api/Api";

interface Props {
  user: DiscordUser;
}

const UserInfo: React.FC<Props> = ({ user }) => (
  <div style={{ textAlign: "left" }}>
    <p>
      <strong>username:</strong> {user.username}
    </p>
    <p>
      <strong>email:</strong> {user.email}
    </p>
  </div>
);

export default UserInfo;