import React from 'react'

export const Comment = () => {
    return (
        <div class="comment-section">
            <a href="#" class="plus-ic">
                <i class="la la-plus"></i>
            </a>
            <div class="comment-sec">
                <ul>
                    <li>
                        <div class="comment-list">
                            <div class="bg-img">
                                <img src="assets/images/resources/bg-img1.png" alt="" />
                            </div>
                            <div class="comment">
                                <h3>John Doe</h3>
                                <span
                                ><img src="assets/images/clock.png" alt="" /> 3 min
          ago</span>
                                <p>Lorem ipsum dolor sit amet,</p>
                                <a href="#" title="" class="active"
                                ><i class="fa fa-reply-all"></i>Reply</a
                                >
                            </div>
                        </div>
                        <ul>
                            <li>
                                <div class="comment-list">
                                    <div class="bg-img">
                                        <img src="assets/images/resources/bg-img2.png" alt="" />
                                    </div>
                                    <div class="comment">
                                        <h3>John Doe</h3>
                                        <span
                                        ><img src="assets/images/clock.png" alt="" /> 3 min
              ago</span>
                                        <p>Hi John</p>
                                        <a href="#" title=""
                                        ><i class="fa fa-reply-all"></i>Reply</a
                                        >
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class="comment-list">
                            <div class="bg-img">
                                <img src="assets/images/resources/bg-img3.png" alt="" />
                            </div>
                            <div class="comment">
                                <h3>John Doe</h3>
                                <span
                                ><img src="assets/images/clock.png" alt="" /> 3 min
          ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam luctus hendrerit metus, ut ullamcorper quam finibus
                                    at.
        </p>
                                <a href="#" title=""><i class="fa fa-reply-all"></i>Reply</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="post-comment">
                <div class="cm_img">
                    <img src="assets/images/resources/bg-img4.png" alt="" />
                </div>
                <div class="comment_box">
                    <form>
                        <input type="text" placeholder="Post a comment" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
