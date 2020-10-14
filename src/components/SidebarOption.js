import React from "react";
import { useHistory } from "react-router-dom";
import db from "../firebase";

function SidebarOption({ Icon, title, id, AddChannelOption, toggleChannels }) {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
    if (title === "Channels") toggleChannels();
  };

  const addChannel = () => {
    const channelName = prompt("please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={AddChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="channel">
          <span className="hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
