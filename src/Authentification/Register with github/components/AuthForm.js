import React from 'react'
import LoginGithub from 'react-login-github';


const AuthForm = () => {
    const onSuccess = response => console.log(response);
    const onFailure = response => console.error(response);
    return (
        <div>
            <LoginGithub clientId="5056fd3842964de4add2"
                onSuccess={onSuccess}
                onFailure={onFailure} />
        </div>
    )
}

export default AuthForm
