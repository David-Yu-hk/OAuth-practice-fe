import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GuildTable.css"; // Optional styling

// 🔷 Define prop types for SafeImage
interface SafeImageProps {
  url: string | null;
  altText: string;
  fallbackText: string;
}

// 🔷 Component for safely displaying guild icons
const SafeImage: React.FC<SafeImageProps> = ({ url, altText, fallbackText }) => {
  const [errored, setErrored] = useState<boolean>(false);

  if (!url || errored) return <span>{fallbackText}</span>;

  return (
    <img
      src={url}
      alt={altText}
      width={40}
      height={40}
      style={{ borderRadius: "50%" }}
      onError={() => setErrored(true)}
    />
  );
};

// 🔷 Define user and guild types
interface User {
  username: string;
  email: string;
}

interface Guild {
  id: string;
  name: string;
  icon?: string | null;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [guildsData, setGuildsData] = useState<Guild[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<User>("http://localhost:8080/user", { withCredentials: true })
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user data!", error));
  }, []);

  const handleClick = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await axios.get<Guild[]>(
        "http://localhost:8080/discord/guilds",
        { withCredentials: true }
      );

      const actualGuild = response.data.find(
        (g) => g.name === "Path of Exile 1 & 2"
      );
      console.log("Actual Guild ID:", actualGuild?.id);

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
        <div style={{ textAlign: "left" }}>
          <p>
            <strong>username:</strong> {user.username}
          </p>
          <p>
            <strong>email:</strong> {user.email}
          </p>

          <button onClick={handleClick}>Get Discord Servers</button>
          {isLoading && <p>Fetching servers...</p>}

          {guildsData.length > 0 && (
            <table
              style={{
                margin: "20px auto",
                borderCollapse: "collapse",
                width: "80%",
              }}
            >
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                    Server Icon
                  </th>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                    Server Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {guildsData.map((guild) => {
                  const iconUrl = guild.icon
                    ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
                    : null;

                  return (
                    <tr key={guild.id}>
                      <td
                        style={{
                          border: "1px solid #ccc",
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        <div className="icon-container">
                          <SafeImage
                            url={iconUrl}
                            fallbackText="No Icon"
                            altText={`${guild.name} Icon`}
                          />
                          <span className="hover-label">{guild.name}</span>
                        </div>
                      </td>
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                        {guild.name}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;