import React from 'react'
import AuthForm from '../Components/AuthForm'
import Introduction from '../Components/Introduction'
import Alert from "../../../Shared/layouts/Alert";
import Footer from '../../Sign up/Components/Footer';

const New_password = () => {
    return (
        <body className="sign-in">
            <div className="wrapper">
                <div className="sign-in-page">
                    <div className="signin-popup">
                        <div className="signin-pop">
                            <div className="row">
                                <Introduction />
                                <AuthForm />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </body>
    )
}

export default New_password
