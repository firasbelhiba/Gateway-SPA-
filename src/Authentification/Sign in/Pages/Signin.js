import React from "react";

import Introduction from "../Components/Introduction";
import AuthForm from "../Components/AuthForm";
import Footer from "../Components/Footer";

import "./Signin.css";
import Alert from "../../../Shared/layouts/Alert";

const Signin = () => {
    return (
        <body className="sign-in">
            <div className="wrapper">
                <div className="sign-in-page">
                    <div className="signin-popup">
                        <div className="signin-pop">
                            <div className="row">
                                <Introduction />
                                <Alert />
                                <AuthForm />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </body>
    );
};

export default Signin;