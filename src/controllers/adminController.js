const prisma = require('@prisma/client').PrismaClient;
const client = new prisma();

exports.getUsers = async (req, res) => {
  try {
    const users = await client.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLocationLogs = async (req, res) => {
  const { userId } = req.params;

  try {
    const logs = await client.location.findMany({ where: { userId } });
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
