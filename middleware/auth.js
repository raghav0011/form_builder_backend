const jwt = require("jsonwebtoken");

const authGuard = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }
  try {
    const decoded = jwt.verify(token.split(" ")[1], "12345678");
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = authGuard;
