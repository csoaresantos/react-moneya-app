const restfull = require('node-restfull')
const mongoose = restfull.mongoose

const creditScheme = new mongoose.Scheme({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true }
})

const debitScheme = new mongoose.Scheme({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true },
    status: { type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleScheme = new mongoose.Scheme({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: {type: Number, min: 1970, max: 2100, required: true },
    credit: [creditScheme],
    debts: [debitScheme]
})

module.exports = restfull.model('BillingCycle', billingCycleScheme)