import React from 'react';
import AvatarUpload from './components/AvatarUpload';
import {Layout} from "./components/Layout";
import {Logo} from "./components/logo";
import {Divider} from "@material-ui/core";

const App = () => {
    return (
        <Layout>
            <Logo/>
            <AvatarUpload/>
            <small>upload a picture of a dog 🐱 or cat 🐶 to see a fun advertisement !!!</small>
            <Divider/>
             <a href="https://www.linkedin.com/in/marcelodeveloper/"> &lt;/&gt; with ❤️ by Marcelo Guimarães</a>
        </Layout>
    );
};

export default App;
