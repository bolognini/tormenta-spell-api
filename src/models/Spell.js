const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const SpellSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  classification: {
    type: String,
    required: true
  },
  circle: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

SpellSchema.plugin(mongoosePaginate)

mongoose.model('Product', SpellSchema)