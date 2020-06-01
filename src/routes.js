const express = require('express')
const routes = express.Router()

const SpellController = require('./controllers/SpellController')

routes.get('/spells', SpellController.index)
routes.get('/spells/:id', SpellController.show)
routes.post('/spells', SpellController.store)
routes.put('/spells/:id', SpellController.update)
routes.delete('/spells/:id', SpellController.destroy)

module.exports = routes