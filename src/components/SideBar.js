import { FiberManualRecordOutlined } from "@material-ui/icons";
import React, { useState, useEffect, Fragment } from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/Bookmark";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/People";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import { connect } from "react-redux";
import { showLoading, hideLoading } from "react-redux-loading";
function SideBar({ authedUser, dispatch }) {
  const [Channels, setChannels] = useState([]);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    dispatch(showLoading());
    return db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);
  const toggleChannels = () => {
    setDisplay(!display);
  };

  if (Channels.length !== 0) dispatch(hideLoading());
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            {authedUser?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title={"Threads"} />
      <SidebarOption Icon={InboxIcon} title={"Mentions & reactions"} />
      <SidebarOption Icon={DraftsIcon} title={"Saved items"} />
      <SidebarOption Icon={BookmarkBorderIcon} title={"Channel browser"} />
      <SidebarOption Icon={PeopleAltIcon} title={"People & user groups"} />
      <SidebarOption Icon={AppsIcon} title={"Apps"} />
      <SidebarOption Icon={FileCopyIcon} title={"File browser"} />

      <hr />
      <SidebarOption
        Icon={ExpandMoreIcon}
        title={"Channels"}
        toggleChannels={toggleChannels}
      />
      <hr />
      <SidebarOption Icon={AddIcon} title={"Add Channel"} AddChannelOption />
      <div className={!display ? "displayChannels" : ""}>
        {Channels.map((channel) => (
          <SidebarOption
            title={channel.name}
            key={channel.id}
            id={channel.id}
          />
        ))}
      </div>
    </div>
  );
}
function mapStateToProps({ authedUser }) {
  return { authedUser };
}
export default connect(mapStateToProps)(SideBar);
