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

const billingCycleScheme = new mongoose.Scheme({})