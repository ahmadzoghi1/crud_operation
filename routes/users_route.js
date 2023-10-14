var express = require('express');
var router = express.Router();
const { find, add, updatesingle, findsingle, deleteevery, deletesingle } = require('../controllers/product.controller');

/* GET users listing. */
router.route("/").get(find);
/* POST add listing. */

router.route("/").post(add);
/* UPDATE update listing. */

router.route("/:id").put(updatesingle);
// .post('/add', add);

// router.get('/:_id', userController.find)
// router.route("/regx/:key").get(regx);
// fetch single products
router.route("/:id").get(findsingle);
// delete all products
router.route("/").delete(deleteevery);
// delete single products
router.route("/:id").delete(deletesingle);

module.exports = router;
