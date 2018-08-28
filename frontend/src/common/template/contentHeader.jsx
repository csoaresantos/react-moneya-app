import React, {Component} from 'react'
import ContentHeader from '../common/dashboard'
import Content from '../common/dashboard'


export default class Dashboard extends Component{
    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" small="1.0" />
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}