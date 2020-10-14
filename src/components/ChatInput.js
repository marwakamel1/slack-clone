import React, { useState } from "react";
import db from "../firebase";
import firebase from "firebase";
import { connect } from "react-redux";

function ChatInput({ channelName, roomID, authedUser }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (roomID) {
      db.collection("rooms").doc(roomID).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: authedUser.displayName,
        userImage: authedUser.photoURL,
      });
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}
function mapStateToProps({ authedUser }, { roomID, channelName }) {
  return { roomID, channelName, authedUser };
}

export default connect(mapStateToProps)(ChatInput);
