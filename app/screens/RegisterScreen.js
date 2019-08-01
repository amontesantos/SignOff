import React from 'react';

import Wallpaper from '../components/Wallpaper';
import RegisterForm from '../components/forms/RegisterForm';
import Logo from '../components/Logo';

export default class RegisterScreen extends React.Component {
    render() {
        return (
            <Wallpaper>
                <Logo />
                <RegisterForm />
            </Wallpaper>
        );
    }
}