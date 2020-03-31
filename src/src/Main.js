import React from 'react';
import {Panel, Group, HorizontalScroll, Tabbar, TabbarItem, Epic, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Back from '@vkontakte/icons/dist/24/back';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            popout: null,
            activeStory: 'main',
            activePanel: 'main',
            styles: {
                itemStyle: {
                    flexShrink: 0,
                    width: 140,
                    height: 140,
                    margin: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontSize: 12,
                    borderRadius: 5,
                    border: '1px solid black'
                }
            }
        }
    }

    render() {
        return (
            <View id={this.props.id} header={false} activePanel={this.state.activePanel}>
                <Panel id="main" separator={false}>
                    <Group>
                        <HorizontalScroll>
                            <div style={{display: 'flex'}}>
                                <div style={this.state.styles.itemStyle}>1</div>
                                <div style={this.state.styles.itemStyle}>2</div>
                                <div style={this.state.styles.itemStyle}>3</div>
                                <div style={this.state.styles.itemStyle}>4</div>
                                <div style={this.state.styles.itemStyle}>5</div>
                            </div>
                        </HorizontalScroll>
                    </Group>
                </Panel>
                <Epic activeStory={this.state.activeStory} tabbar={
                    <Tabbar>
                        <TabbarItem
                            onClick={this.props.go}
                            data-to="login"
                            selected={this.state.activeStory === 'main'}
                            data-story="main"
                        ><Icon24Back/></TabbarItem>
                        <TabbarItem
                            selected={this.state.activeStory === 'main'}
                            data-story="main"
                        >Main</TabbarItem>
                        <TabbarItem
                            selected={this.state.activeStory === 'main'}
                            data-story="main"
                        >Main</TabbarItem>
                    </Tabbar>
                }/>
            </View>
        )
    }
}
