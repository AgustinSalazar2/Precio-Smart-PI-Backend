const express = require('express');


const router = express.Router();
// desestructurando controladores del foro..
const {
    getForoMens,
    postForoMens,
    putForoMens,
    deleteForoMens
} = require('../controllers/foro.controllers');
const validateJWT = require('../middlewares/validate-jwt.middlewares');


//Definición de rutas...
router.route('/foro')
    .get(getForoMens);

router.route('/foro')
    .post( postForoMens );

router.route('/foro/:id_Foro')
.put(putForoMens);

router.route('/foro/:id_Foro')
.delete(deleteForoMens);

module.exports = router;