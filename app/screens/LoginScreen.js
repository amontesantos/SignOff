import React from 'react';

import Wallpaper from '../components/Wallpaper';
import Logo from '../components/Logo';
import LoginForm from '../components/forms/LoginForm';
import SignupSection from '../components/SignupSection';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <Wallpaper>
                <Logo />
                <LoginForm />
                <SignupSection />
            </Wallpaper>
        );
    }
}