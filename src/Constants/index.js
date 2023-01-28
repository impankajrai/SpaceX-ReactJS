import React from "react";
import styles from "./style.module.css";


export const columns = [
  {
    title: "No ",
    dataIndex:"no",
    fixed: "left",
    render: (text) => (text === null || text === undefined ? "-" : (text))
  },
 
  {
    title: "Launched (UTC)",
    dataIndex: "launched",
    render: (text) => (text === null || text === undefined ? "-" : (text)),
  },
  {
    title: "Location.",
    dataIndex: "location",
    render: (text) => (text === null || text === undefined ? "-" : (text)),
  },
  {
    title: "Mission.",
    dataIndex: "mission",
    render: (text) => (text === null || text === undefined ? "-" : (text)),
  },
  {
    title: "Orbit.",
    dataIndex: "orbit",
    width: "17%",
    render: (text) => (text === null || text === undefined ? "-" : (text)),
  },
  {
    title: "Launch Status",
    dataIndex: "launchStatus",
    render: (text) => {
      if(text===null){
        return <p className={styles.statusUpcomming}>Upcomming</p>
      }
      else if(text){
        return <p className={styles.statusSuccess}>Success</p>
      }
      else{
      return <p className={ styles.statusFailed}>Failed</p>
      }
    }
  },
  {
    title: "Rocket",
    dataIndex: "rocket",
    render: (text) => text === null || text === undefined
      ? "-"
      : text,
  
  }
];


export const popupData=[
  {
    title: "key ",
    dataIndex:"key",
    fixed: "left",
    render: (text) => (text === null || text === undefined ? "-" : (text))
  },
  {
    title: "Value ",
    dataIndex:"value",
    render: (text) => (text === null || text === undefined ? "-" : (text))
  },


]