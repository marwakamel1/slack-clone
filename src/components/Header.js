import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/Help";
import { connect } from "react-redux";

function Header({ authedUser }) {
  const fr = undefined;
  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header_avatar"
          alt={authedUser?.displayName}
          src={authedUser?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="search...." />
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}
function mapStateToProps({ authedUser }) {
  return { authedUser };
}
export default connect(mapStateToProps)(Header);
