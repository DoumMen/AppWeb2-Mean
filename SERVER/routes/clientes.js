const { Router } = require('express')
const router = Router()
const clientesctrl = require('../controllers/controllerclientes')

router.get('/',clientesctrl.getclientes);
router.get('/:id',clientesctrl.getcliente);
router.post('/',clientesctrl.crearcliente);
router.put('/:id',clientesctrl.editcliente);
router.delete('/:id',clientesctrl.deletecliente);
module.exports = router