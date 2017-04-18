var router = express.Router();
router.post('/:key', function(req, res, next) {
  res.end('route1');
});
module.exports = router;
