var jwt = require('jsonwebtoken');
const JWT_SECRET = 'yogeshisgood$boy';
const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET); // Use a more secure secret in production
        req.user = data.user; // Assuming the token contains user information
        next();
    } catch (error) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }


}
module.exports = fetchuser;