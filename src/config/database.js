const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Ensure the database directory exists
const dbDir = path.join(__dirname, '..', 'db');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(dbDir, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

// Initialize database with tables
const initializeDatabase = () => {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS trainees (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        serialNo INTEGER,
        name TEXT NOT NULL,
        fatherName TEXT,
        batch TEXT,
        sex TEXT,
        designation TEXT,
        courseCode TEXT,
        courseName TEXT,
        courseDuration TEXT,
        tNo TEXT,
        trade TEXT,
        unit TEXT,
        divisionWorkshop TEXT,
        modeOfEntry TEXT,
        doj TEXT,
        referenceNo TEXT,
        sparingDate TEXT,
        referenceNo2 TEXT,
        mobileNo TEXT,
        emailId TEXT,
        irimeeFrom TEXT,
        irimeeTo TEXT,
        zrtiFrom TEXT,
        zrtiTo TEXT,
        iridmFrom TEXT,
        iridmTo TEXT,
        remarkCertificateSrNo TEXT,
        referenceNo3 TEXT,
        employmentNoPranNo TEXT,
        letter TEXT,
        hrmsId TEXT,
        billUnit TEXT,
        workingUnder TEXT,
        station TEXT,
        educationalQualification TEXT,
        educationalQualification2 TEXT,
        branch TEXT,
        instituteCollege TEXT,
        specialization TEXT,
        passingYear TEXT,
        cgpaPercentage TEXT,
        additionalQualification TEXT,
        pastExperience TEXT,
        previousJobProfile TEXT,
        areaOfInterest TEXT,
        otherInformation TEXT,
        computerKnowledge TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Database initialized');
  });
};

module.exports = { db, initializeDatabase };
