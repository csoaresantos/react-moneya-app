import React, { Component } from 'react'
import ValueBox from '../common/widget/valueBox'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSummary } from './dashboardAction'

class Dashboard extends Component {
    componentWillMount() {
        this.props.getSummary()
    }
    render() {
        const { credit, debt } = this.props.summary

        return (
            <div>
                <ContentHeader title="" small="versão 1.0" />
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

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)