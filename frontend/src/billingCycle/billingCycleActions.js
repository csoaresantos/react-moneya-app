import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'
const BASE_URL = 'http://localhost:3003/api'

const INITIAL_VALUES = {}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(value) {
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, value)
        .then(resp => {
            toastr.success('Sucesso', 'Operação Realizada com sucesso.')
            dispatch([
                init()
            ])
        })
        .catch(e => {
            e.response.data.errors.forEach( error => toastr.error('Erro', error))
        })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('BillingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabUpdate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}