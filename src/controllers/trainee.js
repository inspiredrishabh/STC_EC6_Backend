const TraineeModel = require('../models/trainee');

class TraineeController {
  // Get all trainees
  static getAllTrainees(req, res) {
    TraineeModel.getAll((err, trainees) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ data: trainees });
    });
  }

  // Get trainee by ID
  static getTraineeById(req, res) {
    const id = req.params.id;
    TraineeModel.getById(id, (err, trainee) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!trainee) {
        return res.status(404).json({ error: 'Trainee not found' });
      }
      res.status(200).json({ data: trainee });
    });
  }

  // Create new trainee
  static createTrainee(req, res) {
    if (!req.body.name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    TraineeModel.create(req.body, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({
        message: 'Trainee created successfully',
        traineeId: result.id
      });
    });
  }

  // Update trainee
  static updateTrainee(req, res) {
    const id = req.params.id;
 
    if (!req.body.name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    TraineeModel.update(id, req.body, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Trainee updated successfully' });
    });
  }

  // Delete trainee
  static deleteTrainee(req, res) {
    const id = req.params.id;
    TraineeModel.delete(id, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Trainee deleted successfully' });
    });
  }
}

module.exports = TraineeController;
