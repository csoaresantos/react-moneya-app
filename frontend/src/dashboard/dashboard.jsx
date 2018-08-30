import React, { Component } from 'react'
import ValueBox from '../common/widget/valueBox'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="" small="versão 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" value="50" text="Crédito" icon="bank" />
                        <ValueBox cols="12 4" color="red" value="50" text="Débito" icon="credit-card" />
                        <ValueBox cols="12 4" color="blue" value="50" text="Consolidado" icon="money" />
                    </Row>
                </Content>
            </div>
        )
    }
}