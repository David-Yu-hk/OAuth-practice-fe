import React from "react";
import SafeImage from "./SafeImage";
import { DiscordGuild } from "../api/Api";
import "./GuildTable.css";

interface Props {
  guildsData: DiscordGuild[];
}

const GuildIconTable: React.FC<Props> = ({ guildsData }) => (
  <table style={{ borderCollapse: "collapse", width: "120px" }}>
    <thead>
      <tr>
        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Guilds</th>
      </tr>
    </thead>
    <tbody>
      {guildsData.map((guild) => {
        const iconUrl = guild.icon
          ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
          : null;

        return (
          <tr key={guild.id}>
            <td style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center" }}>
              <div className="icon-container">
                <SafeImage
                  url={iconUrl}
                  fallbackText="No Icon"
                  altText={`${guild.name} Icon`}
                />
                <span className="hover-label">{guild.name}</span>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default GuildIconTable;