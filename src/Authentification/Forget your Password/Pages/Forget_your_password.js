import React from 'react'
import Footer from '../Components/Footer'
import AuthForm from '../Components/AuthForm'
import Introduction from '../Components/Introduction'
import Alert from "../../../Shared/layouts/Alert";


const Forget_your_password = () => {
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
    )
}

export default Forget_your_password
