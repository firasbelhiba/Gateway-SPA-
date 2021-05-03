import React from 'react'
import { Link } from 'react-router-dom';

const Freecourse_suggestions = () => {

    let freecourseList = JSON.parse(localStorage.getItem("freecourse"));

    return (
        <div className="suggestions full-width">
            <div className="sd-title">
                <h3>
                    {" "}
                    <img
                        style={{ width: "180px", height: "30px" }}
                        src="https://www.freecoursesonline.me/wp-content/uploads/2018/12/FreeCoursesOnline.Me_.logo_.png"
                        className="mr-1"
                    />
                    <hr />
            Get Free courses Now !
          </h3>
                <i className="la la-ellipsis-v"></i>
            </div>
            <div className="suggestions-list">
                {freecourseList === null ? (
                    <h2>There is no jobs for the moment ! Visit us later !!</h2>
                ) : (
                    freecourseList.map((data) => (
                        <div className="suggestion-usd">
                            <span>
                                <a
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-arrow-circle-up"></i>
                                </a>
                            </span>
                            <div className="sgt-text">
                                <h4>
                                    <img
                                        className="mr-2"
                                        style={{ width: "30px", height: "30px" }}
                                        src={data.image}
                                        alt=""
                                    />{" "}
                                    {data.title}
                                </h4>
                                <hr />
                                {
                                    <h2>
                                        {data.date}
                                    </h2>
                                }
                                <hr />
                                <span>{data.description}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Freecourse_suggestions
