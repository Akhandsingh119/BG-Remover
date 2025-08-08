import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    
    if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized Login Again" });
    }

    // Decode the token (Clerk tokens are typically JWTs but verified by Clerk)
    const token_decode = jwt.decode(token);
    
    if (!token_decode) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }

    // Ensure req.body exists for GET requests
    if (!req.body) {
      req.body = {};
    } 

    // The clerkId might be in different places depending on your Clerk config
    req.body.clerkId = token_decode.clerkId || token_decode.sub || token_decode.userId;
    
    if (!req.body.clerkId) {
      return res.status(401).json({ success: false, message: "ClerkId not found in token" });
    }

    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export default authUser;
