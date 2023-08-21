import React, { useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import notification1 from "../../../assets/images/dashboard/Notifications/notification1.png";
import notification2 from "../../../assets/images/dashboard/Notifications/notification2.png";
import notification3 from "../../../assets/images/dashboard/Notifications/notification3.png";
import notification4 from "../../../assets/images/dashboard/Notifications/notification4.png";
import notification5 from "../../../assets/images/dashboard/Notifications/notification5.png";

const ChampNotificationPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      image: notification1,
      message: "1. Some quick example text for notification ",
      read: false,
    },
    {
      id: 2,
      image: notification2,
      message: "2.Some quick example text for notification ",
      read: true,
    },
    {
      id: 3,
      image: notification3,
      message: "3.Some quick example text for notification ",
      read: true,
    },
    {
      id: 4,
      image: notification4,
      message: "4. Some quick example text for notification ",
      read: true,
    },
    {
      id: 5,
      image: notification5,
      message: "5. Some quick example text for notification ",
      read: true,
    },
    // ... Add more notifications
  ]);

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      read: true,
    }));
    setNotifications(updatedNotifications);
  };

  const handleNotificationToggle = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id
        ? { ...notification, read: !notification.read }
        : notification
    );
    setNotifications(updatedNotifications);
  };

  return (
    <>
      <ChampNavbar />
      <div style={{ marginTop: "70px" }}></div>
      <Container
        fluid
        className="text-center bg-light"
        style={{
          height: "1080px",
          overflow: "hidden",
          color: "#000",
          fontFamily: "Raleway",
        }}
      >
        <h1 style={{ textAlign: "left", paddingLeft: "20px" }}>Notifications</h1>
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <Button
            variant="primary"
            size="sm"
            onClick={markAllAsRead}
          >
            Mark All as Read
          </Button>
        </div>

        {notifications.map((notification) => (
          <div
            key={notification.id}
            style={{
              borderTop:"1px solid black",
              marginBottom: "20px",
              paddingBottom: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={notification.image}
                alt={`Notification ${notification.id}`}
                style={{ height: "100px", width: "100px" }}
              />
              <div style={{ marginLeft: "20px" }}>
                <Card.Text className={notification.read ? "read-notification" : ""}>
                  {notification.message}
                </Card.Text>
              </div>
            </div>
            <div>
              <Button
                onClick={() => handleNotificationToggle(notification.id)}
                variant={notification.read ? "secondary" : "primary"}
                size="sm"
              >
                {notification.read ? "Mark as Unread" : "Mark as Read"}
              </Button>
            </div>
          </div>
        ))}

        <div className="d-flex m-5 align-items-center justify-content-center cursor-pointer">
          <Button href="/ChampDashboard">Go Home</Button>
        </div>
      </Container>
    </>
  );
};

export default ChampNotificationPage;
