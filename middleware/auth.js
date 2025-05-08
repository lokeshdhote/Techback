const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Extract token from Authorization header
  const token = req.headers["authorization"] && req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Attach the decoded user data to the request object
    req.user = decoded;
    next();
  });
};
