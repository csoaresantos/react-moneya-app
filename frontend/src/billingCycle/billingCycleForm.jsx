import React, { Component} from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from './billingCycleActions'
import ItemList from './itemList'

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, credits, debts } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={labelAndInput} label='Nome'cols='12 4' placeholder='Informe o nome' />
                    <Field name="month" component={labelAndInput} label='Mês'cols='12 4' placeholder='Informe o mês'  />
                    <Field name="year" component={labelAndInput} label='Ano'cols='12 4' placeholder='Informe o ano'  />
                    <ItemList cols='12 6' list={credits} field='credits' legend='Créditos' />
                    <ItemList cols='12 6' list={debts} field='debts' legend='Débitos' showStatus={true} />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

const selecto = formValueSelector('billingCycleForm')
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapStateToProps = state => ({credits: selecto(state, 'credits'), debts: selecto(state, 'debts')})
const dispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, dispatchToProps)(BillingCycleForm)