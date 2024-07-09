import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log('sdsdds',token)
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  } else {

  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err){
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    req.user = decoded;
    console.log('hhhjjh',req.user)
    next();
  });
};

export default verifyToken;
