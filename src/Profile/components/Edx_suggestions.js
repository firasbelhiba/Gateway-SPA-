import React from 'react'

const Edx_suggestions = () => {
    let edxSuggestions = JSON.parse(localStorage.getItem("edx"))
    return (
        <div className="suggestions full-width">
            <div className="sd-title">
                <h3>
                    {" "}
                    <img
                        style={{ width: "60px", height: "30px" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fb/EdX_Logo_R_Elm.png"
                        className="mr-1"
                    />
                    Edx formation</h3>
                <i className="la la-ellipsis-v"></i>
            </div>
            <div className="suggestions-list">
                {edxSuggestions === null ? (
                    <h2>There is no jobs for the moment ! Visit us later !!</h2>
                ) : (

                    edxSuggestions.map(item => (
                        <div className="suggestion-usd">
                            <span>
                                <a
                                    href={"https://www.edx.org" + item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-arrow-circle-up"></i>
                                </a></span>
                            <div className="sgt-text">
                                <h4>{item.title}</h4>
                                <span>
                                    {item.certification} - {item.numberOfCertification}
                                </span>
                                <br />
                                <span>
                                    {item.description}
                                </span>
                            </div>

                        </div>
                    ))

                )}

            </div>
        </div>
    )
}

export default Edx_suggestions