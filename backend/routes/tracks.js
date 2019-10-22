const router = require('express').Router();

let Track = require('../models/track.model');

//Get onload request
router.route('/').get((req, res) => {
  Track.find()
    .then(track => res.json(track))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Post request - Adding track
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const version = req.body.version;
  const artist = req.body.artist;
  const isrc_code = req.body.isrc_code;
  const p_line = req.body.p_line;
  const aliases = req.body.aliases;
  const contractName = req.body.contractName;

  const newTrack = new Track ({
    title,
    version,
    artist,
    isrc_code,
    p_line,
    aliases,
    contractName
  });

  newTrack.save()
    .then(() => res.json('Track added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Get by id
router.route('/:id').get((req, res) => {
  Track.findById(req.params.id)
    .then(track => res.json(track))
    .catch(err => res.status(400).json('Error: ' + err))
})

//Delete by id
router.route('/:id').delete((req, res) => {
  Track.findByIdAndDelete(req.params.id)
    .then(() => res.json("Track deleted"))
    .catch(err => res.status(400).json('Error: ' + err))
})


//Update
router.route('/update/:id').post((req, res) => {
  Track.findById(req.params.id)
    .then(track => {
      track.title = req.body.title;
      track.version = req.body.version;
      track.artist = req.body.artist;
      track.isrc_code = req.body.isrc_code;
      track.p_line = req.body.p_line;
      track.aliases = req.body.aliases;
      track.contractName = req.body.contractName;

      track.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})















module.exports = router;