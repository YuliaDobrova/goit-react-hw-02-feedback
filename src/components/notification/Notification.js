import React from "react";
import styles from "./Notification.module.css";

const Notification = ({ message }) => {
  return <p className={styles.messageText}>{message}</p>;
};

export default Notification;
