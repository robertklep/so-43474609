var router = express.Router();
router.use('/', require('./home.js'));
router.use('/inviteParticipants', require('./invite.js'));
module.exports = router;
