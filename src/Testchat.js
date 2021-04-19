import React, { useState, useEffect } from "react";
import socketClient from "socket.io-client";
const SERVER = "http://localhost:5000";

const TestChat = () => {

    var socket = socketClient(SERVER);
    socket.once('connection', (data) => {
        //console.log(`I'm connected with the back-end`, data);
        socket.emit('message', { message: 'ahla bel bena', id: 1 });

    });
    return (
        <div>test</div>
    );
}

export default TestChat
