import React from 'react';
import AvatarUpload from './components/AvatarUpload';
import {Layout} from "./components/Layout";
import {Logo} from "./components/logo";

const App = () => {
    return (
        <Layout>
            <Logo/>
            <AvatarUpload/>
        </Layout>
    );
};

export default App;
