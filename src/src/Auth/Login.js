import React from 'react';
import {Panel, FormLayout, FormLayoutGroup, PanelHeader, Input, Button, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            popout: null,
        }
    }

    dnevnikAuth = (e) => {
        this.props.go(e);
    };

    render() {
        return (
            <View activePanel={this.props.id}>
                <Panel id={this.props.id}>
                    <PanelHeader>Авторизация</PanelHeader>

                    <FormLayout>
                        <FormLayoutGroup top="Логин">
                            <Input type="text" placeholder="Введите логин"/>
                        </FormLayoutGroup>
                        <FormLayoutGroup top="Пароль">
                            <Input type="password" placeholder="Введите пароль"/>
                        </FormLayoutGroup>
                        <Button size='xl' onClick={this.dnevnikAuth} data-to="main">Войти</Button>
                    </FormLayout>
                </Panel>
            </View>
        )
    }
}
