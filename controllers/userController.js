import db from "../models/index.js";

const { User, Organization } = db;

export const getUserOrganizations = async (req, res) => {
  const user = await User.findByPk(req.user.id, {
    include: Organization,
  });

  res.send(user.Organizations);
};
