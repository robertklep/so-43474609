var router = express.Router();
router.post('/:key', function(req, res, next) {
  res.end('route2');
});
module.exports = router;
