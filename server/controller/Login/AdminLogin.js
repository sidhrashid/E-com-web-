const db = require("../../connection/Connection");
const bcrypt = require("bcrypt");
// ==================================== (add users api) ====================================
// ===================================== (bcrypt.hash) =====================================

const addAdminUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and email and password are required." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const sqlQuery =
      "INSERT INTO admin_users (username, email, password) VALUES (?, ?, ?)";
    const data = [username, email, hashedPassword];

    db.query(sqlQuery, data, (err) => {
      if (err) {
        console.error("Database error:", err.message);
        return res.status(500).json({
          message: "Database query error. Please try again later.",
        });
      }

      return res.status(201).json({
        message: "User added successfully.",
      });
    });
  } catch (error) {
    console.error("Error adding user:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ===================================== (bcrypt.compare) =====================================

const loginAdminUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password are required." });
    }

    const sql = "SELECT * FROM admin_users WHERE email = ?";

    db.query(sql, [email], async (err, results) => {
      if (err) {
        console.error("Database query error:", err.message);
        return res.status(500).json({ message: "Server error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      for (user of results) {
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
          return res.status(200).json({ message: "Login successful" });
        }
      }
      return res.status(401).json({ message: "Invalid email or password" });
    });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ==================================== (show users api) ====================================
const getAdminUsers = (req, res) => {
  const sqlQuery = "SELECT * FROM admin_users";
  db.query(sqlQuery, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json({ results });
  });
};

// ==================================== (delete users api) ====================================
const deleteAdminUser = (req, res) => {
  const id = req.params.id;
  const q = "DELETE FROM admin_users WHERE id =?";
  db.query(q, id, (err) => {
    if (err) {
      return res.status(500);
    }
    return res.json(200);
  });
};

module.exports = {
  addAdminUser,
  loginAdminUser,
  getAdminUsers,
  deleteAdminUser,
};
