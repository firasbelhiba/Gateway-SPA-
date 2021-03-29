import React from 'react'

const Chat = () => {
    return (
        <div className="chatbox-list">
            <div className="chatbox">
                <div className="chat-mg">
                    <a href="#" title=""
                    ><img src="assets/images/resources/usr-img1.png" alt=""
                        /></a>
                    <span>2</span>
                </div>
                <div className="conversation-box">
                    <div className="con-title mg-3">
                        <div className="chat-user-info">
                            <img src="assets/images/resources/us-img1.png" alt="" />
                            <h3>John Doe <span className="status-info"></span></h3>
                        </div>
                        <div className="st-icons">
                            <a href="#" title=""><i className="la la-cog"></i></a>
                            <a href="#" title="" className="close-chat"
                            ><i className="la la-minus-square"></i
                            ></a>
                            <a href="#" title="" className="close-chat"
                            ><i className="la la-close"></i
                            ></a>
                        </div>
                    </div>
                    <div className="chat-hist mCustomScrollbar" data-mcs-theme="dark">
                        <div className="chat-msg">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                rutrum congue leo eget malesuada. Vivamus suscipit tortor eget
                                felis porttitor.
                         </p>
                            <span>Sat, Aug 23, 1:10 PM</span>
                        </div>
                        <div className="date-nd">
                            <span>Sunday, August 24</span>
                        </div>
                        <div className="chat-msg st2">
                            <p>Cras ultricies ligula.</p>
                            <span>5 minutes ago</span>
                        </div>
                        <div className="chat-msg">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                rutrum congue leo eget malesuada. Vivamus suscipit tortor eget
                                felis porttitor.
                         </p>
                            <span>Sat, Aug 23, 1:10 PM</span>
                        </div>
                    </div>
                    <div className="typing-msg">
                        <form>
                            <textarea placeholder="Type a message here"></textarea>
                            <button type="submit"><i className="fa fa-send"></i></button>
                        </form>
                        <ul className="ft-options">
                            <li>
                                <a href="#" title=""><i className="la la-smile-o"></i></a>
                            </li>
                            <li>
                                <a href="#" title=""><i className="la la-camera"></i></a>
                            </li>
                            <li>
                                <a href="#" title=""><i className="fa fa-paperclip"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="chatbox">
                <div className="chat-mg">
                    <a href="#" title=""
                    ><img src="assets/images/resources/usr-img2.png" alt=""
                        /></a>
                </div>
                <div className="conversation-box">
                    <div className="con-title mg-3">
                        <div className="chat-user-info">
                            <img src="assets/images/resources/us-img1.png" alt="" />
                            <h3>John Doe <span className="status-info"></span></h3>
                        </div>
                        <div className="st-icons">
                            <a href="#" title=""><i className="la la-cog"></i></a>
                            <a href="#" title="" className="close-chat"
                            ><i className="la la-minus-square"></i
                            ></a>
                            <a href="#" title="" className="close-chat"
                            ><i className="la la-close"></i
                            ></a>
                        </div>
                    </div>
                    <div className="chat-hist mCustomScrollbar" data-mcs-theme="dark">
                        <div className="chat-msg">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                rutrum congue leo eget malesuada. Vivamus suscipit tortor eget
                                felis porttitor.
                         </p>
                            <span>Sat, Aug 23, 1:10 PM</span>
                        </div>
                        <div className="date-nd">
                            <span>Sunday, August 24</span>
                        </div>
                        <div className="chat-msg st2">
                            <p>Cras ultricies ligula.</p>
                            <span>5 minutes ago</span>
                        </div>
                        <div className="chat-msg">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                rutrum congue leo eget malesuada. Vivamus suscipit tortor eget
                                felis porttitor.
                        </p>
                            <span>Sat, Aug 23, 1:10 PM</span>
                        </div>
                    </div>
                    <div className="typing-msg">
                        <form>
                            <textarea placeholder="Type a message here"></textarea>
                            <button type="submit"><i className="fa fa-send"></i></button>
                        </form>
                        <ul className="ft-options">
                            <li>
                                <a href="#" title=""><i className="la la-smile-o"></i></a>
                            </li>
                            <li>
                                <a href="#" title=""><i className="la la-camera"></i></a>
                            </li>
                            <li>
                                <a href="#" title=""><i className="fa fa-paperclip"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="chatbox">
                <div className="chat-mg bx">
                    <a href="#" title=""><img src="assets/images/chat.png" alt="" /></a>
                    <span>2</span>
                </div>
                <div className="conversation-box">
                    <div className="con-title">
                        <h3>Messages</h3>
                        <a href="#" title="" className="close-chat"
                        ><i className="la la-minus-square"></i
                        ></a>
                    </div>
                    <div className="chat-list">
                        <div className="conv-list active">
                            <div className="usrr-pic">
                                <img src="assets/images/resources/usy1.png" alt="" />
                                <span className="active-status activee"></span>
                            </div>
                            <div className="usy-info">
                                <h3>John Doe</h3>
                                <span
                                >Lorem ipsum dolor <img src="assets/images/smley.png" alt=""
                                    /></span>
                            </div>
                            <div className="ct-time">
                                <span>1:55 PM</span>
                            </div>
                            <span className="msg-numbers">2</span>
                        </div>
                        <div className="conv-list">
                            <div className="usrr-pic">
                                <img src="assets/images/resources/usy2.png" alt="" />
                            </div>
                            <div className="usy-info">
                                <h3>John Doe</h3>
                                <span
                                >Lorem ipsum dolor <img src="assets/images/smley.png" alt=""
                                    /></span>
                            </div>
                            <div className="ct-time">
                                <span>11:39 PM</span>
                            </div>
                        </div>
                        <div className="conv-list">
                            <div className="usrr-pic">
                                <img src="assets/images/resources/usy3.png" alt="" />
                            </div>
                            <div className="usy-info">
                                <h3>John Doe</h3>
                                <span
                                >Lorem ipsum dolor <img src="assets/images/smley.png" alt=""
                                    /></span>
                            </div>
                            <div className="ct-time">
                                <span>0.28 AM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
