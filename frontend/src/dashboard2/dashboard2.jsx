import React, { Component } from 'react'
import ValueBox from '../common/widget/valueBox'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard2 extends Component {
    constructor(props) {
        super(props)
        this.state = { credit: 0, debt: 0}
    }
    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`).then(resp => this.setState(resp.data))
    }
    render() {
        const { debt, credit } = this.state
        return (
            <div>
                <ContentHeader title="" small="versão sem redux" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" value={`R$ ${credit}`} text="Crédito" icon="bank" />
                        <ValueBox cols="12 4" color="red" value={`R$ ${debt}`} text="Débito" icon="credit-card" />
                        <ValueBox cols="12 4" color="blue" value={`R$ ${credit - debt}`} text="Consolidado" icon="money" />
                    </Row>
                </Content>
            </div>
        )
    }
}