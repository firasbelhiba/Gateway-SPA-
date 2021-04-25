import React from 'react'
import Footer from '../../Sign in/Components/Footer'
import Introduction from '../../Sign in/Components/Introduction'
import AuthForm from '../components/AuthForm'

const Register_with_facebook = () => {
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

export default Register_with_facebook
