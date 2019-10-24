const router = require('express').Router();

let Contract = require('../models/contract.model');

//Get onload request
router.route('/').get((req, res) => {
  Contract.find()
    .then(contracts => res.json(contracts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Contract.findById(req.params.id)
    .then(track => res.json(track))
    .catch(err => res.status(400).json('Error: ' + err))
})

// Post request
router.route('/add').post((req, res) => {
  const contractName = req.body.contractName;

  const newContract = new Contract({contractName});

  newContract.save()
    .then(() => res.json('Contract added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;