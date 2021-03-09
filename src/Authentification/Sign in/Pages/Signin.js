import React from "react";

import Introduction from "../Components/Introduction";
import AuthForm from "../Components/AuthForm";
import Footer from "../Components/Footer";

import "./Signin.css";

const Signin = () => {
    return (
        <body class="sign-in">
            <div class="wrapper">
                <div class="sign-in-page">
                    <div class="signin-popup">
                        <div class="signin-pop">
                            <div class="row">
                                <Introduction />
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