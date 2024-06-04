import jwt from "jsonwebtoken";
import db from "../models/index.js";

const { User, Session } = db;

const authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const session = await Session.findOne({ where: { token } });

    if (!session) {
      throw new Error();
    }

    req.user = await User.findByPk(decoded.id);
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

export default authenticate;
