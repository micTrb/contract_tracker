const router = require('express').Router();

let Exercise = require('../models/exercise.model');


//Get onload request
router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Post request
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = req.body.date;


  const newExercise = new Exercise ({
    username,
    description,
    duration,
    date
  });


newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;