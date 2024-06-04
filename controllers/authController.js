import jwt from "jsonwebtoken";
import db from "../models/index.js";
import bcrypt from "bcrypt";

const { User, Session } = db;

export const register = async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body;
    if (password === confirmPassword) {
      const checkIfAlreadyExisting = await User.findOne({
        where: { username },
      });
      if (checkIfAlreadyExisting) throw new Error("User already exists");
      const user = await User.create(req.body);
      await user.save();
      res.status(201).send(user);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) throw new Error("Invalid credentials");
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) throw new Error("Invalid Credentials");
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    await Session.create({ token });
    res.send({ User: user, Token: token });
  } catch (error) {
    res.status(400).send(error);
  }
};
