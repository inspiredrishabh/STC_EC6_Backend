const express = require('express');
const router = express.Router();
const TraineeController = require('../controllers/trainee');

// Get all trainees (http://localhost:3000/api/trainees)
router.get('/', TraineeController.getAllTrainees);

// Get trainee by ID (http://localhost:3000/api/trainees/:id)
router.get('/:id', TraineeController.getTraineeById);

// Create new trainee (http://localhost:3000/api/trainees)
router.post('/', TraineeController.createTrainee);

// Update trainee (http://localhost:3000/api/trainees/:id)
router.put('/:id', TraineeController.updateTrainee);

// Delete trainee (http://localhost:3000/api/trainees/:id)
router.delete('/:id', TraineeController.deleteTrainee);

module.exports = router;
