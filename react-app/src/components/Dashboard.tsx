import React, { useState, useEffect } from "react";
import axios from "axios";
import UserInfo from "./UserInfo";
import GuildIconTable from "./GuildIconTable";
import GuildChannelsTable from "./GuildChannelsTable";
import { DiscordGuild, DiscordUser } from "../api/Api";
import "./GuildTable.css";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<DiscordUser | null>(null);
  const [guildsData, setGuildsData] = useState<DiscordGuild[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<DiscordUser>("http://localhost:8080/user", { withCredentials: true })
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user data!", error));
  }, []);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<DiscordGuild[]>(
        "http://localhost:8080/discord/guilds",
        { withCredentials: true }
      );
      setGuildsData(response.data);
    } catch (error) {
      console.error("Error fetching Discord guilds!", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Discord Info</h2>
      {user ? (
        <>
          <UserInfo user={user} />
          <button onClick={handleClick}>Get Discord Servers</button>
          {isLoading && <p>Fetching servers...</p>}

          {guildsData.length > 0 && (
            <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
              <GuildIconTable guildsData={guildsData} />
              <GuildChannelsTable guildsData={guildsData} />
            </div>
          )}
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;