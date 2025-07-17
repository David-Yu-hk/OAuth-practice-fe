import React from "react";
import axios from "axios";

const Dashboard = () => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        axios
            .get('http://localhost:8080/user', {withCredentials: true})
            .then(response => {setUser(response.data)})
            .catch(error => {
                console.error("There was an error fetching the user data!", error);
                }
            )
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            {user ? (
                <div style={{ textAlign: "center" }}>
                    {user.picture && (
                        <img src={user.picture} alt="User Profile" referrerPolicy="no-referrer"/>
                    )}
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default Dashboard;