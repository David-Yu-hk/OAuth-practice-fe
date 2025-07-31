import React from "react";
import { DiscordGuild } from "../api/Api";


interface Props {
  guildsData: DiscordGuild[];
}


const GuildChannelsTable: React.FC<Props> = ({ guildsData }) => (
  <table style={{ borderCollapse: "collapse", minWidth: "300px" }}>
    <thead>
      <tr>
        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Channels</th>
      </tr>
    </thead>
    <tbody>
      {guildsData.map((guild) => (
        <tr key={`${guild.id}-info`}>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>{guild.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default GuildChannelsTable;