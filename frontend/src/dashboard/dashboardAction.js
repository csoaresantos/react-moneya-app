import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILING_SUMMARY_FETCHED',
        paylad: request
    }
}