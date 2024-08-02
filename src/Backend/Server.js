const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const multer = require("multer");
const app = express();
const cors = require("cors");
const path = require("path");
const { Pool, CompareArrows } = require("@mui/icons-material");
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "bitlinks",
  connectionLimit: 500,
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file to avoid filename conflicts
  },
});

const upload = multer({ storage: storage });
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const { filename } = req.file;
  const imagePath = `/uploads/${filename}`;

  res.status(200).json({ message: "Image path stored successfully", path: imagePath });
});


app.get('/api/connections', (req, res) => {
  const {email} = req.body;
  console.log("Location email");

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }

    const query = 'SELECT * FROM personalinfo WHERE useremail = ?'; 

  connection.query(query,[email], (error, results) => {
    if (error) {
      console.error('Error fetching connections:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(200).json({ message: 'Fetched successfully', users: results });
  })
  });
});


app.get('/api/networks', (req, res) => {

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }

    const query = 'SELECT * FROM personalinfo'; 

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching connections:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(200).json({ message: 'Fetched successfully', users: results });
  })
  });
});







app.post("/api/person", (req, res) => {
  const { personInfo, imagePath, email } = req.body;
  console.log(req.body);

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }

    let sql = `
      INSERT INTO personalinfo (useremail, fullname, phonenumber, age, email, linkedinurl, address, shortdescription)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      email,
      personInfo.fullname,
      personInfo.phoneNumber,
      personInfo.age,
      personInfo.email,
      personInfo.linkedinUrl,
      personInfo.address,
      personInfo.shortDescription,
    ];

    // If imagePath is provided, include it in the SQL query and values
    if (imagePath) {
      sql = `
        INSERT INTO personalinfo (useremail, profile, fullname, phonenumber, age, email, linkedinurl, address, shortdescription)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      values.splice(1, 0, imagePath);
    }

    connection.query(sql, values, (err, results) => {
      connection.release();

      if (err) {
        console.error("Error executing database query:", err);
        return res.status(500).json({ message: "Database error" });
      }

      res.status(200).json({ message: "Profile saved successfully" });
    });
  });
});

app.post("/api/company", (req, res) => {
  const { CompanyInfo } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }
    const sql =
      "INSERT into company (person_id, companyname, position, experience, role, companyaddress) VALUES (?,?,?,?,?,?)";
    connection.query(
      sql,
      [
        key,
        CompanyInfo.companyName,
        CompanyInfo.position.CompanyInfo.experience,
        CompanyInfo.role,
        CompanyInfo.companyAddress,
      ],
      (err, results) => {
        connection.release();

        if (err) {
          console.error("Error executing database query:", err);
          return res.status(500).json({ message: "Database error" });
        }
        if (results.length > 0) {
          res.status(200).json({ message: "Company success" });
        } else {
          res.status(401).json({ message: "Error from server" });
        }
      }
    );
  });
});

app.post("/api/alumni", (req, res) => {
  const { Alumniinfo } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }
    const sql =
      "INSERT into alumni (person_id, name, batch, graduatedyear, phonenumber, companyaddress) VALUES (?,?,?,?,?,?)";
    connection.query(
      sql,
      [
        key,
        Alumniinfo.name,
        Alumniinfo.batch,
        Alumniinfo.graduatedyear,
        Alumniinfo.phonenumber,
        Alumniinfo.companyAddress,
      ],
      (err, results) => {
        connection.release();

        if (err) {
          console.error("Error executing database query:", err);
          return res.status(500).json({ message: "Database error" });
        }
        if (results.length > 0) {
          res.status(200).json({ message: "Alumni success" });
        } else {
          res.status(401).json({ message: "Error from server" });
        }
      }
    );
  });
});

app.post("/api/outcome", (req, res) => {
  const { Outcomeinfo } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }
    const sql =
      "INSERT into outcome (person_id, eventname, date, description) VALUES (?,?,?,?)";
    connection.query(
      sql,
      [key, Outcomeinfo.eventname, Outcomeinfo.date, Outcomeinfo.description],
      (err, results) => {
        connection.release();

        if (err) {
          console.error("Error executing database query:", err);
          return res.status(500).json({ message: "Database error" });
        }
        if (results.length > 0) {
          res.status(200).json({ message: "Outcome success" });
        } else {
          res.status(401).json({ message: "Error from server" });
        }
      }
    );
  });
});

app.post("/api/incidents", (req, res) => {
  const { Incidentsinfo } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }
    const sql =
      "INSERT into incidents (person_id, eventname, date, description) VALUES (?,?,?,?)";
    connection.query(
      sql,
      [
        key,
        Incidentsinfo.eventname,
        Incidentsinfo.date,
        Incidentsinfo.description,
      ],
      (err, results) => {
        connection.release();

        if (err) {
          console.error("Error executing database query:", err);
          return res.status(500).json({ message: "Database error" });
        }
        if (results.length > 0) {
          res.status(200).json({ message: "Incidents success" });
        } else {
          res.status(401).json({ message: "Error from server" });
        }
      }
    );
  });
});

app.post("/api/placement", (req, res) => {
  const { Ifplacement, Placementinfo } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }
    const sql =
      "INSERT into placement (person_id, ifplacement, role, domain, skillset, eligibility) VALUES (?,?,?,?,?,?)";
    connection.query(
      sql,
      [
        key,
        Ifplacement,
        Placementinfo.role,
        Placementinfo.domain,
        Placementinfo.skillset,
        Placementinfo.eligibility,
      ],
      (err, results) => {
        connection.release();

        if (err) {
          console.error("Error executing database query:", err);
          return res.status(500).json({ message: "Database error" });
        }
        if (results.length > 0) {
          res.status(200).json({ message: "Placement success" });
        } else {
          res.status(401).json({ message: "Error from server" });
        }
      }
    );
  });
});

app.post("/api/consultancy", (req, res) => {
  const { Ifconsultancy, Consultancyinfo } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }
    const sql =
      "INSERT into consultancy (person_id, ifplacement, role, domain, skillset, eligibility, projecttype) VALUES (?,?,?,?,?,?)";
    connection.query(
      sql,
      [
        key,
        Ifconsultancy,
        Consultancyinfo.role,
        Consultancyinfo.domain,
        Consultancyinfo.skillset,
        Consultancyinfo.eligibility,
        Consultancyinfo.projecttype,
      ],
      (err, results) => {
        connection.release();

        if (err) {
          console.error("Error executing database query:", err);
          return res.status(500).json({ message: "Database error" });
        }
        if (results.length > 0) {
          res.status(200).json({ message: "Consultancy success" });
        } else {
          res.status(401).json({ message: "Error from server" });
        }
      }
    );
  });
});

app.post("/api/internship", (req, res) => {
  const { Ifinternship, Internshipinfo } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }
    const sql =
      "INSERT into internship (person_id, ifinternship, role, domain, skillset, eligibility, projecttype) VALUES (?,?,?,?,?,?)";
    connection.query(
      sql,
      [
        key,
        Ifinternship,
        Internshipinfo.role,
        Internshipinfo.domain,
        Internshipinfo.skillset,
        Internshipinfo.eligibility,
        Internshipinfo.projecttype,
      ],
      (err, results) => {
        connection.release();

        if (err) {
          console.error("Error executing database query:", err);
          return res.status(500).json({ message: "Database error" });
        }
        if (results.length > 0) {
          res.status(200).json({ message: "Internship success" });
        } else {
          res.status(401).json({ message: "Error from server" });
        }
      }
    );
  });
});


app.post("/api/expertise", (req, res) => {
  const { ExpertiseInfo } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }
    const sql =
      "INSERT into expertise (person_id, domain, specialistskills, skillset) VALUES (?,?,?,?)";
    connection.query(
      sql,
      [
        key,
        ExpertiseInfo.domain,
        ExpertiseInfo.specialistskills,
        ExpertiseInfo.skillset
      ],
      (err, results) => {
        connection.release();

        if (err) {
          console.error("Error executing database query:", err);
          return res.status(500).json({ message: "Database error" });
        }
        if (results.length > 0) {
          res.status(200).json({ message: "Expertise success" });
        } else {
          res.status(401).json({ message: "Error from server" });
        }
      }
    );
  });
});

app.post("/api/others", (req, res) => {
  const { Reference } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }
    const sql =
      "INSERT into others (person_id, reference) VALUES (?,?)";
    connection.query(
      sql,
      [
        key,
        Reference
      ],
      (err, results) => {
        connection.release();

        if (err) {
          console.error("Error executing database query:", err);
          return res.status(500).json({ message: "Database error" });
        }
        if (results.length > 0) {
          res.status(200).json({ message: "Others success" });
        } else {
          res.status(401).json({ message: "Error from server" });
        }
      }
    );
  });
});









app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
