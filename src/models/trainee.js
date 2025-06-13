const { db } = require('../config/database');

class TraineeModel {
  // Get all trainees
  static getAll(callback) {
    const sql = `SELECT * FROM trainees ORDER BY serialNo`;
    db.all(sql, [], callback);
  }

  // Get trainee by ID
  static getById(id, callback) {
    const sql = `SELECT * FROM trainees WHERE id = ?`;
    db.get(sql, [id], callback);
  }

  // Create new trainee
  static create(trainee, callback) {
    const {
      serialNo, name, fatherName, batch, sex, designation, courseCode, courseName, courseDuration,
      tNo, trade, unit, divisionWorkshop, modeOfEntry, doj, referenceNo, sparingDate,
      referenceNo2, mobileNo, emailId, irimeeFrom, irimeeTo, zrtiFrom, zrtiTo, iridmFrom,
      iridmTo, remarkCertificateSrNo, referenceNo3, employmentNoPranNo, letter, hrmsId,
      billUnit, workingUnder, station, educationalQualification, educationalQualification2,
      branch, instituteCollege, specialization, passingYear, cgpaPercentage,
      additionalQualification, pastExperience, previousJobProfile, areaOfInterest,
      otherInformation, computerKnowledge
    } = trainee;

    const sql = `
      INSERT INTO trainees (
        serialNo, name, fatherName, batch, sex, designation, courseCode, courseName, courseDuration,
        tNo, trade, unit, divisionWorkshop, modeOfEntry, doj, referenceNo, sparingDate,
        referenceNo2, mobileNo, emailId, irimeeFrom, irimeeTo, zrtiFrom, zrtiTo, iridmFrom,
        iridmTo, remarkCertificateSrNo, referenceNo3, employmentNoPranNo, letter, hrmsId,
        billUnit, workingUnder, station, educationalQualification, educationalQualification2,
        branch, instituteCollege, specialization, passingYear, cgpaPercentage,
        additionalQualification, pastExperience, previousJobProfile, areaOfInterest,
        otherInformation, computerKnowledge
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
      serialNo, name, fatherName, batch, sex, designation, courseCode, courseName, courseDuration,
      tNo, trade, unit, divisionWorkshop, modeOfEntry, doj, referenceNo, sparingDate,
      referenceNo2, mobileNo, emailId, irimeeFrom, irimeeTo, zrtiFrom, zrtiTo, iridmFrom,
      iridmTo, remarkCertificateSrNo, referenceNo3, employmentNoPranNo, letter, hrmsId,
      billUnit, workingUnder, station, educationalQualification, educationalQualification2,
      branch, instituteCollege, specialization, passingYear, cgpaPercentage,
      additionalQualification, pastExperience, previousJobProfile, areaOfInterest,
      otherInformation, computerKnowledge
    ];

    db.run(sql, params, function(err) {
      if (err) {
        return callback(err, null);
      }
            const lastId = this && this.lastID !== undefined ? this.lastID : null;
      callback(null, { id: lastId });
    });
  }

  // Update trainee
  static update(id, trainee, callback) {
    const {
      serialNo, name, fatherName, batch, sex, designation, courseCode, courseName, courseDuration,
      tNo, trade, unit, divisionWorkshop, modeOfEntry, doj, referenceNo, sparingDate,
      referenceNo2, mobileNo, emailId, irimeeFrom, irimeeTo, zrtiFrom, zrtiTo, iridmFrom,
      iridmTo, remarkCertificateSrNo, referenceNo3, employmentNoPranNo, letter, hrmsId,
      billUnit, workingUnder, station, educationalQualification, educationalQualification2,
      branch, instituteCollege, specialization, passingYear, cgpaPercentage,
      additionalQualification, pastExperience, previousJobProfile, areaOfInterest,
      otherInformation, computerKnowledge
    } = trainee;

    const sql = `
      UPDATE trainees SET
        serialNo = ?, name = ?, fatherName = ?, batch = ?, sex = ?, designation = ?, 
        courseCode = ?, courseName = ?, courseDuration = ?, tNo = ?, trade = ?, 
        unit = ?, divisionWorkshop = ?, modeOfEntry = ?, doj = ?, referenceNo = ?, 
        sparingDate = ?, referenceNo2 = ?, mobileNo = ?, emailId = ?, irimeeFrom = ?, 
        irimeeTo = ?, zrtiFrom = ?, zrtiTo = ?, iridmFrom = ?, iridmTo = ?, 
        remarkCertificateSrNo = ?, referenceNo3 = ?, employmentNoPranNo = ?, letter = ?, 
        hrmsId = ?, billUnit = ?, workingUnder = ?, station = ?, educationalQualification = ?, 
        educationalQualification2 = ?, branch = ?, instituteCollege = ?, specialization = ?, 
        passingYear = ?, cgpaPercentage = ?, additionalQualification = ?, pastExperience = ?, 
        previousJobProfile = ?, areaOfInterest = ?, otherInformation = ?, computerKnowledge = ?,
        updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `;

    const params = [
      serialNo, name, fatherName, batch, sex, designation, courseCode, courseName, courseDuration,
      tNo, trade, unit, divisionWorkshop, modeOfEntry, doj, referenceNo, sparingDate,
      referenceNo2, mobileNo, emailId, irimeeFrom, irimeeTo, zrtiFrom, zrtiTo, iridmFrom,
      iridmTo, remarkCertificateSrNo, referenceNo3, employmentNoPranNo, letter, hrmsId,
      billUnit, workingUnder, station, educationalQualification, educationalQualification2,
      branch, instituteCollege, specialization, passingYear, cgpaPercentage,
      additionalQualification, pastExperience, previousJobProfile, areaOfInterest,
      otherInformation, computerKnowledge, id
    ];

    db.run(sql, params, callback);
  }

  // Delete trainee
  static delete(id, callback) {
    const sql = `DELETE FROM trainees WHERE id = ?`;
    db.run(sql, [id], callback);
  }
}

module.exports = TraineeModel;
