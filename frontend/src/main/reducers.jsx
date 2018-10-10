import { combineReducers } from 'redux'
import dashboardReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer