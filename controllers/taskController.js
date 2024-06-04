import db from "../models/index.js";

const { Task, Organization } = db;

export const createTask = async (req, res) => {
  const org = await Organization.findByPk(req.params.orgId);
  if (!org) {
    return res.status(404).send({ error: "Organization not found" });
  }

  const task = await Task.create({ ...req.body, OrganizationId: org.id });
  res.status(201).send(task);
};

export const getTasksByOrg = async (req, res) => {
  const tasks = await Task.findAll({
    where: { OrganizationId: req.params.orgId },
  });
  res.send(tasks);
};
