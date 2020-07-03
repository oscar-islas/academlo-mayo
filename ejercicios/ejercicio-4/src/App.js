import React from "react";
import "./styles.css";

import { Sidebar } from "./components/sidebar";
import Navbar from "./components/navbar";
import { ThumbContainer } from "./components/thumb-container";

import streamLineIcon from "./icons/iconfinder_Streamline-18_185038.png";
import fireIcon from "./icons/iconfinder_Icon_Element_Fire_03_513726.png";
import homeIcon from "./icons/iconfinder_ic_home_48px_3669170.png";
import historyIcon from "./icons/iconfinder_ic_restore_48px_3669259.png";
import subscriptionsIcon from "./icons/iconfinder_ic_subscriptions_48px_3669213.png";
import notificationIcon from "./icons/iconfinder_icon-ios7-bell_211694.png";
import appsIcon from "./icons/iconfinder_ic_view_module_48px_3669149.png";
import bellIcon from "./icons/iconfinder_icon-ios7-bell_211694.png";
import youtubeLogo from "./icons/iconfinder_youtube_294703.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: [
        {
          icon: homeIcon,
          title: "Principal"
        },
        {
          icon: fireIcon,
          title: "Tendencias"
        },
        {
          icon: subscriptionsIcon,
          title: "Suscripciones"
        },
        {
          icon: notificationIcon,
          title: ""
        },
        {
          icon: appsIcon,
          title: ""
        },
        {
          icon: bellIcon,
          title: ""
        }
      ],
      logo: youtubeLogo,
      videoThumbnails: [
        {
          thumbnailUrl:
            "https://img.youtube.com/vi/OXQyPyxnJtg/maxresdefault.jpg",
          title: "Haciendo TU TAREA de inglés | Superholly",
          channel: "Superholly",
          avatarUrl:
            "https://yt3.ggpht.com/a/AATXAJyXLZAq0OZ-y8e0tR2Q5GIwFg_X9ns05zmPeA6b5w=s48-c-k-c0xffffffff-no-rj-mo",
          date: "2 jul 2020",
          views: "60,302"
        },
        {
          thumbnailUrl:
            "https://img.youtube.com/vi/a5uQMwRMHcs/maxresdefault.jpg",
          title:
            "Daft Punk ft. Julian Casablancas - Instant Crush (Official Video)",
          channel: "Daft Punk",
          avatarUrl:
            "https://yt3.ggpht.com/a-/AOh14GgOI8a7pgyfc1iAhsBpK8rGK1LXixCU3wl9gnc=s48-c-k-c0xffffffff-no-nd-rj",
          date: "6 dic. 2013",
          views: "363,062,006"
        },
        {
          thumbnailUrl: "",
          title: "",
          channel: "",
          avatarUrl: "",
          date: "",
          views: ""
        },
        {
          thumbnailUrl: "",
          title: "",
          channel: "",
          avatarUrl: "",
          date: "",
          views: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Navbar />
        <ThumbContainer />
      </div>
    );
  }
}

export default App;
