// Header component
import React from "react";

const Header = () => {
  return (
    <div style={styles.header}>

      <h1 style={styles.title}>
        Service Ticket System
      </h1>

      <p style={styles.subtitle}>
        Manage service requests easily and efficiently
      </p>

    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#e2e8f0",
    padding: "30px",
    textAlign: "center"
  },

  title: {
    margin: 0,
    fontSize: "28px",
    color: "#0f172a"
  },

  subtitle: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#334155"
  }
};

export default Header;