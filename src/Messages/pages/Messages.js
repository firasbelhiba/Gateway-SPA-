import React, { Fragment, useEffect, useState } from 'react'
import User_message_details from '../components/User_message_details'
import Current_user_message from '../components/Current_user_message'
import Other_user_message from '../components/Other_user_message'
import socketClient from "socket.io-client";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loading_spinner } from '../../Shared/layouts/Loading_spinner';
import { getAllProfiles } from '../../actions/profile';
import { useLocation } from 'react-router';

const SERVER = "http://localhost:5000";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const Messages = ({ getAllProfiles, profile: { profiles, loading } }) => {

    let query = useQuery();

    let currentUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        getAllProfiles();
    }, [])


    const [message, setMessage] = useState("");
    const [senderId, setSenderId] = useState(currentUser._id);
    const [recipientId, setRecipientId] = useState(query.get("id"));


    const socket = socketClient(SERVER);

    const [msg, setMsg] = useState("")
    socket.on('chat-message', data => {
        console.log(data);
        setMsg(data);
    })

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const data = new FormData();
    //     data.append("message", message);
    //     var socket = socketClient(SERVER);
    //     socket.once('connection', (data) => {
    //         socket.emit('message',
    //             {
    //                 message: message,
    //                 senderId: senderId,
    //                 recipientId: recipientId
    //             });
    //     });
    // };

    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("message", message);
        socket.emit('send-chat-message', message)

    }



    return <Fragment>
        {loading ? <Loading_spinner /> :
            <Fragment>
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
                                            {profiles.map(profile => (
                                                < User_message_details
                                                    key={profile._id}
                                                    profile={profile}
                                                />
                                            ))}
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
                                                    <h3>{msg}</h3>
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
                                            <form onSubmit={(e) => onSubmit(e)}>
                                                <div className="mf-field">
                                                    <input
                                                        type="text"
                                                        name="message"
                                                        placeholder="Type a message here"
                                                        onChange={(e) => setMessage(e.target.value)}
                                                    />
                                                    <button type="submit">Send</button>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>}
    </Fragment>
}

Messages.propTypes = {
    getAllProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile
});


export default connect(mapStateToProps, { getAllProfiles })(Messages)
