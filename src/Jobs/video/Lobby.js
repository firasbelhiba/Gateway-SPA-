import React from "react";

const Lobby = ({
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}) => {
  return (
    <form onSubmit={handleSubmit}>
     
      <div>
        <label htmlFor="room">Room name:</label>
        <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          readOnly={connecting}
          required
        />
      </div>

      <button type="submit" style={{backgroundColor:"#153b44"}} disabled={connecting}>
        {connecting ? "Connecting" : "Join"}
      </button>
    </form>
  );
};

export default Lobby;
