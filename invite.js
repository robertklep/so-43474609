var router = express.Router();
router.use('/route1', require('./route1.js'));
router.use('/route2', require('./route2.js'));
module.exports = router;
