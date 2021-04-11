import React, { useState, useEffect } from "react";
import socketClient from "socket.io-client";
const SERVER = "http://localhost:5000";

const TestChat = () => {

    var socket = socketClient(SERVER);
    socket.on('connection', (data) => {
        console.log(`I'm connected with the back-end`, data);
    });
    return (
        <div>test</div>
    );
}

export default TestChat
