# STC EC6 Backend API

## Description

This project is a backend API for managing trainee data for STC EC6. It provides RESTful endpoints for performing CRUD (Create, Read, Update, Delete) operations on trainee records stored in an SQLite database.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Database](#database)
  - [Schema: `trainees` table](#schema-trainees-table)
- [API Endpoints](#api-endpoints)
  - [Base URL](#base-url)
  - [1. Get All Trainees](#1-get-all-trainees)
  - [2. Get Trainee by ID](#2-get-trainee-by-id)
  - [3. Create New Trainee](#3-create-new-trainee)
  - [4. Update Trainee](#4-update-trainee)
  - [5. Delete Trainee](#5-delete-trainee)
- [Testing with Fetch API (Browser Console)](#testing-with-fetch-api-browser-console)
- [Technologies Used](#technologies-used)

## Prerequisites

Before you begin, ensure you have met the following requirements:
*   Node.js (v14.x or later recommended)
*   npm (Node Package Manager, comes with Node.js)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/inspiredrishabh/STC_EC6_Backend
    cd STC_EC6_Backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Running the Application

*   **Development Mode (with Nodemon for auto-restarts):**
    ```bash
    npm run dev
    ```

*   **Production Mode:**
    ```bash
    npm start
    ```

The server will start on `http://localhost:3000` by default (or the port specified in `process.env.PORT`). You will see a console message: `Server is running on port 3000`.

## Project Structure

```
STC_EC6_Backend/
├── src/
│   ├── config/
│   │   └── database.js       # Database connection, schema initialization
│   ├── controllers/
│   │   └── trainee.js        # Handles request logic for trainee operations
│   ├── db/
│   │   └── database.sqlite   # SQLite database file (auto-generated)
│   ├── models/
│   │   └── trainee.js        # Data access logic for the trainees table
│   └── routes/
│       └── trainee.js        # Defines API routes for trainees
├── .gitignore                # Specifies intentionally untracked files
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Records exact versions of dependencies
├── readme.md                 # This file
├── server.js                 # Main Express server setup and entry point for `npm start`
└── main.js                   # Note: This file appears to duplicate server startup logic from server.js and might be redundant or an alternative entry point. `npm start` uses server.js.
```

## Database

The application uses SQLite as its database.
*   The database file (`database.sqlite`) is automatically created in the `src/db/` directory if it doesn't exist.
*   The table schema is defined and initialized in `src/config/database.js`.

### Schema: `trainees` table

The `trainees` table has the following columns:

*   `id` INTEGER PRIMARY KEY AUTOINCREMENT
*   `serialNo` INTEGER
*   `name` TEXT NOT NULL
*   `fatherName` TEXT
*   `batch` TEXT
*   `sex` TEXT
*   `designation` TEXT
*   `courseCode` TEXT
*   `courseName` TEXT
*   `courseDuration` TEXT
*   `tNo` TEXT
*   `trade` TEXT
*   `unit` TEXT
*   `divisionWorkshop` TEXT
*   `modeOfEntry` TEXT
*   `doj` TEXT (Date of Joining, e.g., "YYYY-MM-DD")
*   `referenceNo` TEXT
*   `sparingDate` TEXT (e.g., "YYYY-MM-DD")
*   `referenceNo2` TEXT
*   `mobileNo` TEXT
*   `emailId` TEXT
*   `irimeeFrom` TEXT (e.g., "YYYY-MM-DD")
*   `irimeeTo` TEXT (e.g., "YYYY-MM-DD")
*   `zrtiFrom` TEXT (e.g., "YYYY-MM-DD")
*   `zrtiTo` TEXT (e.g., "YYYY-MM-DD")
*   `iridmFrom` TEXT (e.g., "YYYY-MM-DD")
*   `iridmTo` TEXT (e.g., "YYYY-MM-DD")
*   `remarkCertificateSrNo` TEXT
*   `referenceNo3` TEXT
*   `employmentNoPranNo` TEXT
*   `letter` TEXT
*   `hrmsId` TEXT
*   `billUnit` TEXT
*   `workingUnder` TEXT
*   `station` TEXT
*   `educationalQualification` TEXT
*   `educationalQualification2` TEXT
*   `branch` TEXT
*   `instituteCollege` TEXT
*   `specialization` TEXT
*   `passingYear` TEXT
*   `cgpaPercentage` TEXT
*   `additionalQualification` TEXT
*   `pastExperience` TEXT
*   `previousJobProfile` TEXT
*   `areaOfInterest` TEXT
*   `otherInformation` TEXT
*   `computerKnowledge` TEXT
*   `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
*   `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP

## API Endpoints

### Base URL
All API endpoints are prefixed with `http://localhost:3000/api`.

---

### 1. Get All Trainees

*   **Method:** `GET`
*   **URL:** `/trainees`
*   **Description:** Retrieves a list of all trainees, ordered by `serialNo`.
*   **Success Response (200 OK):**
    ```json
    {
      "data": [
        {
          "id": 1,
          "serialNo": 101,
          "name": "Rishabh Gupta",
          "fatherName": "Father Name",
          // ... all other trainee fields ...
          "computerKnowledge": "Basic",
          "createdAt": "2025-06-13T12:30:00.000Z",
          "updatedAt": "2025-06-13T12:30:00.000Z"
        },
        // ... more trainees
      ]
    }
    ```
*   **Error Response (500 Internal Server Error):**
    ```json
    {
      "error": "Database query failed"
    }
    ```

---

### 2. Get Trainee by ID

*   **Method:** `GET`
*   **URL:** `/trainees/:id`
*   **Description:** Retrieves a single trainee by their unique ID.
*   **Example URL:** `/trainees/1`
*   **Success Response (200 OK):**
    ```json
    {
      "data": {
        "id": 1,
        "serialNo": 101,
        "name": "Rishabh Gupta",
        // ... all other trainee fields ...
        "createdAt": "2025-06-13T12:30:00.000Z",
        "updatedAt": "2025-06-13T12:30:00.000Z"
      }
    }
    ```
*   **Error Response (404 Not Found):**
    ```json
    {
      "error": "Trainee not found"
    }
    ```
*   **Error Response (500 Internal Server Error):**
    ```json
    {
      "error": "Database query failed"
    }
    ```

---

### 3. Create New Trainee

*   **Method:** `POST`
*   **URL:** `/trainees`
*   **Description:** Creates a new trainee record. `name` is a required field.
*   **Request Body (JSON):**
    ```json
    {
      "serialNo": 102,
      "name": "Jane Doe",
      "fatherName": "John Doe",
      "batch": "2025-A",
      "sex": "Female",
      "designation": "Trainee Engineer",
      "courseCode": "CSE101",
      "courseName": "Computer Science Engineering",
      "courseDuration": "4 Years",
      "tNo": "T12346",
      "trade": "Software",
      "unit": "Tech Unit",
      "divisionWorkshop": "Main Workshop",
      "modeOfEntry": "Direct",
      "doj": "2025-07-01",
      "referenceNo": "REF002",
      "sparingDate": "2029-06-30",
      "referenceNo2": "REF002B",
      "mobileNo": "+919876543211",
      "emailId": "jane.doe@example.com",
      "irimeeFrom": "2025-08-01",
      "irimeeTo": "2025-08-30",
      "zrtiFrom": "2025-09-01",
      "zrtiTo": "2025-09-30",
      "iridmFrom": "2025-10-01",
      "iridmTo": "2025-10-30",
      "remarkCertificateSrNo": "CERT002",
      "referenceNo3": "REF002C",
      "employmentNoPranNo": "EMP002/PRAN002",
      "letter": "OfferLetter002.pdf",
      "hrmsId": "HRMS002",
      "billUnit": "BU002",
      "workingUnder": "Mr. Smith",
      "station": "Head Office",
      "educationalQualification": "B.Tech",
      "educationalQualification2": "M.Tech (Pursuing)",
      "branch": "Computer Science",
      "instituteCollege": "XYZ University",
      "specialization": "AI",
      "passingYear": "2025",
      "cgpaPercentage": "8.5 CGPA",
      "additionalQualification": "Certified Cloud Practitioner",
      "pastExperience": "1 Year Internship",
      "previousJobProfile": "Intern",
      "areaOfInterest": "Machine Learning",
      "otherInformation": "N/A",
      "computerKnowledge": "Proficient in Python, Java"
    }
    ```
*   **Success Response (201 Created):**
    ```json
    {
      "message": "Trainee created successfully",
      "traineeId": 2 // The ID of the newly created trainee
    }
    ```
*   **Error Response (400 Bad Request):**
    ```json
    {
      "error": "Name is required" // If name is not provided
    }
    ```
*   **Error Response (500 Internal Server Error):**
    ```json
    {
      "error": "SQLITE_ERROR: ..." // Or other database error
    }
    ```
    *(Note: The original code had an issue where the number of SQL placeholders might not match the columns, leading to an error like "SQLITE_ERROR: 46 values for 47 columns". This README assumes the API intends to support all listed fields.)*

---

### 4. Update Trainee

*   **Method:** `PUT`
*   **URL:** `/trainees/:id`
*   **Description:** Updates an existing trainee's information. `name` is required in the payload if being updated.
*   **Example URL:** `/trainees/1`
*   **Request Body (JSON):** (Include only fields to be updated)
    ```json
    {
      "name": "Rishabh Kumar Gupta",
      "mobileNo": "+919999988888",
      "batch": "2024-B"
      // ... any other fields to update
    }
    ```
*   **Success Response (200 OK):**
    ```json
    {
      "message": "Trainee updated successfully"
    }
    ```
*   **Error Response (400 Bad Request):**
    ```json
    {
      "error": "Name is required" // If name is made empty in the update
    }
    ```
*   **Error Response (500 Internal Server Error):**
    ```json
    {
      "error": "Database update failed" // Or specific SQLite error
    }
    ```
    *(Note: The API might return 500 if the ID does not exist and the update affects 0 rows, depending on error handling.)*

---

### 5. Delete Trainee

*   **Method:** `DELETE`
*   **URL:** `/trainees/:id`
*   **Description:** Deletes a trainee by their ID.
*   **Example URL:** `/trainees/1`
*   **Success Response (200 OK):**
    ```json
    {
      "message": "Trainee deleted successfully"
    }
    ```
*   **Error Response (500 Internal Server Error):**
    ```json
    {
      "error": "Database deletion failed" // Or specific SQLite error
    }
    ```
    *(Note: The API might return 500 if the ID does not exist and the delete affects 0 rows, depending on error handling.)*

---

## Testing with Fetch API (Browser Console)

You can test the API endpoints using `fetch` in your browser's developer console or any API client like Postman or Insomnia.

**Example: Get all trainees**
<!-- fetch('http://localhost:3000/api/trainees')
  .then(response => response.json())
  .then(data => console.log(data)); -->
```javascript
fetch('http://localhost:3000/api/trainees')
  .then(response => response.json())
  .then(data => console.log('All Trainees:', data))
  .catch(error => console.error('Error fetching trainees:', error));
```

**Example: Get a specific trainee (e.g., ID 1)**
```javascript
fetch('http://localhost:3000/api/trainees/1') // Replace 1 with an existing trainee ID
  .then(response => response.json())
  .then(data => console.log('Specific Trainee:', data))
  .catch(error => console.error('Error fetching trainee:', error));
```

**Example: Create a new trainee**
```javascript
const newTraineeData = {
  "serialNo": 103,
  "name": "Alex Test",
  "fatherName": "Father Test",
  "batch": "2025-C",
  "sex": "Other",
  "designation": "Associate Tester",
  "courseCode": "TST102",
  "courseName": "Advanced Testing",
  "courseDuration": "6 Months",
  "mobileNo": "+911234567899",
  "emailId": "alex.test@example.com"
  // Add other fields as needed, matching the schema
};

fetch('http://localhost:3000/api/trainees', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newTraineeData),
})
.then(response => response.json())
.then(data => console.log('Create Trainee Response:', data))
.catch(error => console.error('Error creating trainee:', error));
```

**Example: Update a trainee (e.g., ID 1)**
```javascript
const traineeIdToUpdate = 1; // Replace with an existing trainee ID
const updatedTraineeData = {
  "name": "Alex Test Updated",
  "mobileNo": "+912233445567"
  // Include other fields to update
};

fetch(`http://localhost:3000/api/trainees/${traineeIdToUpdate}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedTraineeData),
})
.then(response => response.json())
.then(data => console.log('Update Trainee Response:', data))
.catch(error => console.error('Error updating trainee:', error));
```

**Example: Delete a trainee (e.g., ID 1)**
```javascript
const traineeIdToDelete = 1; // Replace with an existing trainee ID

fetch(`http://localhost:3000/api/trainees/${traineeIdToDelete}`, {
  method: 'DELETE',
})
.then(response => response.json())
.then(data => console.log('Delete Trainee Response:', data))
.catch(error => console.error('Error deleting trainee:', error));
```

## Technologies Used

*   **Node.js:** JavaScript runtime environment.
*   **Express.js:** Web application framework for Node.js.
*   **sqlite3:** SQLite client library for Node.js.
*   **body-parser:** Middleware to parse incoming request bodies.
*   **cors:** Middleware to enable Cross-Origin Resource Sharing.
*   **nodemon:** Utility that monitors for changes and automatically restarts the server (for development).

```// filepath: d:\CODING\STC_EC6_Backend\readme.md
# STC EC6 Backend API

## Description

This project is a backend API for managing trainee data for STC EC6. It provides RESTful endpoints for performing CRUD (Create, Read, Update, Delete) operations on trainee records stored in an SQLite database.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Database](#database)
  - [Schema: `trainees` table](#schema-trainees-table)
- [API Endpoints](#api-endpoints)
  - [Base URL](#base-url)
  - [1. Get All Trainees](#1-get-all-trainees)
  - [2. Get Trainee by ID](#2-get-trainee-by-id)
  - [3. Create New Trainee](#3-create-new-trainee)
  - [4. Update Trainee](#4-update-trainee)
  - [5. Delete Trainee](#5-delete-trainee)
- [Testing with Fetch API (Browser Console)](#testing-with-fetch-api-browser-console)
- [Technologies Used](#technologies-used)

## Prerequisites

Before you begin, ensure you have met the following requirements:
*   Node.js (v14.x or later recommended)
*   npm (Node Package Manager, comes with Node.js)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd STC_EC6_Backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Running the Application

*   **Development Mode (with Nodemon for auto-restarts):**
    ```bash
    npm run dev
    ```

*   **Production Mode:**
    ```bash
    npm start
    ```

The server will start on `http://localhost:3000` by default (or the port specified in `process.env.PORT`). You will see a console message: `Server is running on port 3000`.

## Project Structure

```
STC_EC6_Backend/
├── src/
│   ├── config/
│   │   └── database.js       # Database connection, schema initialization
│   ├── controllers/
│   │   └── trainee.js        # Handles request logic for trainee operations
│   ├── db/
│   │   └── database.sqlite   # SQLite database file (auto-generated)
│   ├── models/
│   │   └── trainee.js        # Data access logic for the trainees table
│   └── routes/
│       └── trainee.js        # Defines API routes for trainees
├── .gitignore                # Specifies intentionally untracked files
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Records exact versions of dependencies
├── readme.md                 # This file
├── server.js                 # Main Express server setup and entry point for `npm start`
└── main.js                   # Note: This file appears to duplicate server startup logic from server.js and might be redundant or an alternative entry point. `npm start` uses server.js.
```

## Database

The application uses SQLite as its database.
*   The database file (`database.sqlite`) is automatically created in the `src/db/` directory if it doesn't exist.
*   The table schema is defined and initialized in `src/config/database.js`.

### Schema: `trainees` table

The `trainees` table has the following columns:

*   `id` INTEGER PRIMARY KEY AUTOINCREMENT
*   `serialNo` INTEGER
*   `name` TEXT NOT NULL
*   `fatherName` TEXT
*   `batch` TEXT
*   `sex` TEXT
*   `designation` TEXT
*   `courseCode` TEXT
*   `courseName` TEXT
*   `courseDuration` TEXT
*   `tNo` TEXT
*   `trade` TEXT
*   `unit` TEXT
*   `divisionWorkshop` TEXT
*   `modeOfEntry` TEXT
*   `doj` TEXT (Date of Joining, e.g., "YYYY-MM-DD")
*   `referenceNo` TEXT
*   `sparingDate` TEXT (e.g., "YYYY-MM-DD")
*   `referenceNo2` TEXT
*   `mobileNo` TEXT
*   `emailId` TEXT
*   `irimeeFrom` TEXT (e.g., "YYYY-MM-DD")
*   `irimeeTo` TEXT (e.g., "YYYY-MM-DD")
*   `zrtiFrom` TEXT (e.g., "YYYY-MM-DD")
*   `zrtiTo` TEXT (e.g., "YYYY-MM-DD")
*   `iridmFrom` TEXT (e.g., "YYYY-MM-DD")
*   `iridmTo` TEXT (e.g., "YYYY-MM-DD")
*   `remarkCertificateSrNo` TEXT
*   `referenceNo3` TEXT
*   `employmentNoPranNo` TEXT
*   `letter` TEXT
*   `hrmsId` TEXT
*   `billUnit` TEXT
*   `workingUnder` TEXT
*   `station` TEXT
*   `educationalQualification` TEXT
*   `educationalQualification2` TEXT
*   `branch` TEXT
*   `instituteCollege` TEXT
*   `specialization` TEXT
*   `passingYear` TEXT
*   `cgpaPercentage` TEXT
*   `additionalQualification` TEXT
*   `pastExperience` TEXT
*   `previousJobProfile` TEXT
*   `areaOfInterest` TEXT
*   `otherInformation` TEXT
*   `computerKnowledge` TEXT
*   `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
*   `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP

## API Endpoints

### Base URL
All API endpoints are prefixed with `http://localhost:3000/api`.

---

### 1. Get All Trainees

*   **Method:** `GET`
*   **URL:** `/trainees`
*   **Description:** Retrieves a list of all trainees, ordered by `serialNo`.
*   **Success Response (200 OK):**
    ```json
    {
      "data": [
        {
          "id": 1,
          "serialNo": 101,
          "name": "Rishabh Gupta",
          "fatherName": "Father Name",
          // ... all other trainee fields ...
          "computerKnowledge": "Basic",
          "createdAt": "2025-06-13T12:30:00.000Z",
          "updatedAt": "2025-06-13T12:30:00.000Z"
        },
        // ... more trainees
      ]
    }
    ```
*   **Error Response (500 Internal Server Error):**
    ```json
    {
      "error": "Database query failed"
    }
    ```

---

### 2. Get Trainee by ID

*   **Method:** `GET`
*   **URL:** `/trainees/:id`
*   **Description:** Retrieves a single trainee by their unique ID.
*   **Example URL:** `/trainees/1`
*   **Success Response (200 OK):**
    ```json
    {
      "data": {
        "id": 1,
        "serialNo": 101,
        "name": "Rishabh Gupta",
        // ... all other trainee fields ...
        "createdAt": "2025-06-13T12:30:00.000Z",
        "updatedAt": "2025-06-13T12:30:00.000Z"
      }
    }
    ```
*   **Error Response (404 Not Found):**
    ```json
    {
      "error": "Trainee not found"
    }
    ```
*   **Error Response (500 Internal Server Error):**
    ```json
    {
      "error": "Database query failed"
    }
    ```

---

### 3. Create New Trainee

*   **Method:** `POST`
*   **URL:** `/trainees`
*   **Description:** Creates a new trainee record. `name` is a required field.
*   **Request Body (JSON):**
    ```json
    {
      "serialNo": 102,
      "name": "Jane Doe",
      "fatherName": "John Doe",
      "batch": "2025-A",
      "sex": "Female",
      "designation": "Trainee Engineer",
      "courseCode": "CSE101",
      "courseName": "Computer Science Engineering",
      "courseDuration": "4 Years",
      "tNo": "T12346",
      "trade": "Software",
      "unit": "Tech Unit",
      "divisionWorkshop": "Main Workshop",
      "modeOfEntry": "Direct",
      "doj": "2025-07-01",
      "referenceNo": "REF002",
      "sparingDate": "2029-06-30",
      "referenceNo2": "REF002B",
      "mobileNo": "+919876543211",
      "emailId": "jane.doe@example.com",
      "irimeeFrom": "2025-08-01",
      "irimeeTo": "2025-08-30",
      "zrtiFrom": "2025-09-01",
      "zrtiTo": "2025-09-30",
      "iridmFrom": "2025-10-01",
      "iridmTo": "2025-10-30",
      "remarkCertificateSrNo": "CERT002",
      "referenceNo3": "REF002C",
      "employmentNoPranNo": "EMP002/PRAN002",
      "letter": "OfferLetter002.pdf",
      "hrmsId": "HRMS002",
      "billUnit": "BU002",
      "workingUnder": "Mr. Smith",
      "station": "Head Office",
      "educationalQualification": "B.Tech",
      "educationalQualification2": "M.Tech (Pursuing)",
      "branch": "Computer Science",
      "instituteCollege": "XYZ University",
      "specialization": "AI",
      "passingYear": "2025",
      "cgpaPercentage": "8.5 CGPA",
      "additionalQualification": "Certified Cloud Practitioner",
      "pastExperience": "1 Year Internship",
      "previousJobProfile": "Intern",
      "areaOfInterest": "Machine Learning",
      "otherInformation": "N/A",
      "computerKnowledge": "Proficient in Python, Java"
    }
    ```
*   **Success Response (201 Created):**
    ```json
    {
      "message": "Trainee created successfully",
      "traineeId": 2 // The ID of the newly created trainee
    }
    ```
*   **Error Response (400 Bad Request):**
    ```json
    {
      "error": "Name is required" // If name is not provided
    }
    ```
*   **Error Response (500 Internal Server Error):**
    ```json
    {
      "error": "SQLITE_ERROR: ..." // Or other database error
    }
    ```
    *(Note: The original code had an issue where the number of SQL placeholders might not match the columns, leading to an error like "SQLITE_ERROR: 46 values for 47 columns". This README assumes the API intends to support all listed fields.)*

---

### 4. Update Trainee

*   **Method:** `PUT`
*   **URL:** `/trainees/:id`
*   **Description:** Updates an existing trainee's information. `name` is required in the payload if being updated.
*   **Example URL:** `/trainees/1`
*   **Request Body (JSON):** (Include only fields to be updated)
    ```json
    {
      "name": "Rishabh Kumar Gupta",
      "mobileNo": "+919999988888",
      "batch": "2024-B"
      // ... any other fields to update
    }
    ```
*   **Success Response (200 OK):**
    ```json
    {
      "message": "Trainee updated successfully"
    }
    ```
*   **Error Response (400 Bad Request):**
    ```json
    {
      "error": "Name is required" // If name is made empty in the update
    }
    ```
*   **Error Response (500 Internal Server Error):**
    ```json
    {
      "error": "Database update failed" // Or specific SQLite error
    }
    ```
    *(Note: The API might return 500 if the ID does not exist and the update affects 0 rows, depending on error handling.)*

---

### 5. Delete Trainee

*   **Method:** `DELETE`
*   **URL:** `/trainees/:id`
*   **Description:** Deletes a trainee by their ID.
*   **Example URL:** `/trainees/1`
*   **Success Response (200 OK):**
    ```json
    {
      "message": "Trainee deleted successfully"
    }
    ```
*   **Error Response (500 Internal Server Error):**
    ```json
    {
      "error": "Database deletion failed" // Or specific SQLite error
    }
    ```
    *(Note: The API might return 500 if the ID does not exist and the delete affects 0 rows, depending on error handling.)*

---

## Testing with Fetch API (Browser Console)

You can test the API endpoints using `fetch` in your browser's developer console or any API client like Postman or Insomnia.

**Example: Get all trainees**
<!-- fetch('http://localhost:3000/api/trainees')
  .then(response => response.json())
  .then(data => console.log(data)); -->
```javascript
fetch('http://localhost:3000/api/trainees')
  .then(response => response.json())
  .then(data => console.log('All Trainees:', data))
  .catch(error => console.error('Error fetching trainees:', error));
```

**Example: Get a specific trainee (e.g., ID 1)**
```javascript
fetch('http://localhost:3000/api/trainees/1') // Replace 1 with an existing trainee ID
  .then(response => response.json())
  .then(data => console.log('Specific Trainee:', data))
  .catch(error => console.error('Error fetching trainee:', error));
```

**Example: Create a new trainee**
```javascript
const newTraineeData = {
  "serialNo": 103,
  "name": "Alex Test",
  "fatherName": "Father Test",
  "batch": "2025-C",
  "sex": "Other",
  "designation": "Associate Tester",
  "courseCode": "TST102",
  "courseName": "Advanced Testing",
  "courseDuration": "6 Months",
  "mobileNo": "+911234567899",
  "emailId": "alex.test@example.com"
  // Add other fields as needed, matching the schema
};

fetch('http://localhost:3000/api/trainees', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newTraineeData),
})
.then(response => response.json())
.then(data => console.log('Create Trainee Response:', data))
.catch(error => console.error('Error creating trainee:', error));
```

**Example: Update a trainee (e.g., ID 1)**
```javascript
const traineeIdToUpdate = 1; // Replace with an existing trainee ID
const updatedTraineeData = {
  "name": "Alex Test Updated",
  "mobileNo": "+912233445567"
  // Include other fields to update
};

fetch(`http://localhost:3000/api/trainees/${traineeIdToUpdate}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedTraineeData),
})
.then(response => response.json())
.then(data => console.log('Update Trainee Response:', data))
.catch(error => console.error('Error updating trainee:', error));
```

**Example: Delete a trainee (e.g., ID 1)**
```javascript
const traineeIdToDelete = 1; // Replace with an existing trainee ID

fetch(`http://localhost:3000/api/trainees/${traineeIdToDelete}`, {
  method: 'DELETE',
})
.then(response => response.json())
.then(data => console.log('Delete Trainee Response:', data))
.catch(error => console.error('Error deleting trainee:', error));
```

## Technologies Used

*   **Node.js:** JavaScript runtime environment.
*   **Express.js:** Web application framework for Node.js.
*   **sqlite3:** SQLite client library for Node.js.
*   **body-parser:** Middleware to parse incoming request bodies.
*   **cors:** Middleware to enable Cross-Origin Resource Sharing.
*   **nodemon:** Utility that monitors for


<!-- fetch('http://localhost:3000/api/trainees')
  .then(response => response.json())
  .then(data => console.log(data)); -->