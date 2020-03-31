import React from 'react';
import './App.css';
import connect from '@vkontakte/vkui-connect';
import {View} from '@vkontakte/vkui';
import Login from "./src/Auth/Login";
import Main from "./src/Main";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePanel: 'login',
            fetchedUser: '',
        }
    }

    go = (e) => {
        this.setState({activePanel: e.currentTarget.dataset.to})
    };


    componentDidMount() {
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetUserInfoResult':
                    this.setState({fetchedUser: e.detail.data});
                    break;
                default:
                    console.log(e.detail.type);
            }
        });
        connect.send('VKWebAppGetUserInfo', {});
    }

    render() {
        return (
            <View activePanel={this.state.activePanel} header={false}>
                <Login id="login" go={this.go}/>
                <Main id="main" go={this.go}/>
            </View>
        );
    }

}

export default App;
