import React from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';

const FacebookLoginButton = () => {
    const responseFacebook = (response: ReactFacebookLoginInfo) => {
        // Xử lý logic đăng nhập thành công ở đây
        console.log(response);
    };

    return (
        <FacebookLogin
            appId="643970673763047"
            fields="name,email,picture"
            callback={responseFacebook}
        />
    );
};

export default FacebookLoginButton;
