const express = require('express');
const router = express.Router();
const TraineeController = require('../controllers/trainee');

// Get all trainees
router.get('/', TraineeController.getAllTrainees);

// Get trainee by ID
router.get('/:id', TraineeController.getTraineeById);

// Create new trainee
router.post('/', TraineeController.createTrainee);

// Update trainee
router.put('/:id', TraineeController.updateTrainee);

// Delete trainee
router.delete('/:id', TraineeController.deleteTrainee);

module.exports = router;
