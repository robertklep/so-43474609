var router = express.Router();
router.get('/', function(req, res, next) {
  res.end(req.path);
});
module.exports = router;
