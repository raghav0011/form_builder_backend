const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  const token = req.body.token; // Get token from the request body
  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }
  try {
    const decoded = jwt.verify(token, "12345678"); 
    req.user = decoded;
    res.status(200).json({ message: "authorized" });
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = validateToken;
