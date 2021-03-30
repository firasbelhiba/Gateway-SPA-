import React from "react";

const OptionsBar = () => {
    return (
        <section className="forum-sec ui segment">
            <div className="container">
                <div className="forum-links">
                    <ul>
                        <li className="active"><a href="#" title="">Most Relevent For You</a></li>
                        <li><a href="#" title="">My Questions</a></li>
                        <li><a href="#" title="">Followed</a></li>
                        <li><a href="#" title="">Popular This Week</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default OptionsBar;
