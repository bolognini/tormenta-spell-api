const mongoose = require('mongoose')

const Spell = mongoose.model('Product')

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query
    const spells = await Spell.paginate({}, { page, limit: 10 })
    return res.json(spells)
  },

  async show(req, res) {
    const spell = await Spell.findById(req.params.id)
    return res.json(spell)
  },

  async store(req, res) {
    const spell = await Spell.create(req.body)
    return res.json(spell)
  },

  async update(req, res) {
    const spell = await Spell.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.json(spell)
  },

  async destroy(req, res) {
    await Spell.findByIdAndRemove(req.params.id)
    return res.send()
  }
}