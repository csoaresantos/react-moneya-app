const INITIAL_STATE = { summary: { credit: 100, debt: 23 } }

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'BILING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload}
        default:
            return state
    }
}