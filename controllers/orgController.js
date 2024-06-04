import db from "../models/index.js";

const { Organization, User } = db;

export const createOrg = async (req, res) => {
  try {
    const org = await Organization.create(req.body);
    await org.save();
    await org.addUser(req.user);
    res.status(201).send(org);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const addUserToOrg = async (req, res) => {
  const org = await Organization.findByPk(req.params.orgId);
  const user = await User.findByPk(req.body.userId);
  await org.addUser(user);
  res.send({ message: "User added to organization" });
};
