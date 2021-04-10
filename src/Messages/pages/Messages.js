import React, { useEffect, useState } from 'react'
import User_message_details from '../components/User_message_details'
import Current_user_message from '../components/Current_user_message'
import Other_user_message from '../components/Other_user_message'
import openSocket from 'socket.io-client';
import axios from "axios";


//const socket = openSocket('http://localhost:5000');

const Messages = () => {

    // function subscribeToTimer(cb) {
    //     socket.on('timer', timestamp => cb(null, timestamp));
    //     socket.emit('subscribeToTimer', 1000);
    //   }

    //     subscribeToTimer((err, timestamp) => this.setState({ 
    //       timestamp }));


    //      const state = {
    //         timestamp: 'no timestamp yet'
    //       };

    const [formData, setFormData] = useState({
        message: 'alo',
        id: '5',
    });



    const connectionSocket = () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        axios.post(
            "http://localhost:5000/api/chat",
            formData,
            config
        );
    }




    return (
        <section className="messages-page">
            <div className="container">
                <div className="messages-sec">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 no-pdd">
                            <div className="msgs-list">
                                <div className="msg-title">
                                    <h3>Messages</h3>
                                    <ul>
                                        <li>
                                            <a href="#" title=""><i className="fa fa-cog"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" title=""
                                            ><i className="fa fa-ellipsis-v"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="messages-list">
                                    <User_message_details />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 pd-right-none pd-left-none">
                            <div className="main-conversation-box">
                                <div className="message-bar-head">
                                    <div className="usr-msg-details">
                                        <div className="usr-ms-img">
                                            <img src="images/resources/m-img1.png" alt="" />
                                        </div>
                                        <div className="usr-mg-info">
                                            <h3>John Doe</h3>
                                            <p>Online</p>
                                        </div>
                                    </div>
                                    <a href="#" title=""><i className="fa fa-ellipsis-v"></i></a>
                                </div>
                                <div className="messages-line">
                                    <div className="main-message-box">
                                        <div className="messg-usr-img">
                                            <img src="images/resources/m-img1.png" alt="" />
                                        </div>
                                        <div className="message-dt">
                                            <div className="message-inner-dt img-bx">
                                                <img src="images/resources/mt-img1.png" alt="" />
                                                <img src="images/resources/mt-img2.png" alt="" />
                                                <img src="images/resources/mt-img3.png" alt="" />
                                            </div>
                                            <span>Sat, Aug 23, 1:08 PM</span>
                                        </div>
                                    </div>
                                    <Other_user_message />
                                    <Current_user_message />

                                </div>
                                <div className="message-send-area">
                                    <form>
                                        <div className="mf-field">
                                            <input
                                                type="text"
                                                name="message"
                                                placeholder="Type a message here"
                                            />
                                            {/* <button onClick={connectionSocket} type="submit">Send</button> */}
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#" title=""><i className="fa fa-smile-o"></i></a>
                                            </li>
                                            <li>
                                                <a href="#" title=""><i className="fa fa-camera"></i></a>
                                            </li>
                                            <li>
                                                <a href="#" title=""
                                                ><i className="fa fa-paperclip"></i></a>
                                            </li>
                                        </ul>
                                    </form>
                                    <button onClick={connectionSocket} >send</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Messages
