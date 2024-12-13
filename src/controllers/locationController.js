const prisma = require('@prisma/client').PrismaClient;
const client = new prisma();

exports.trackLocation = async (req, res) => {
  const { latitude, longitude } = req.body;

  try {
    const location = await client.location.create({
      data: { userId: req.user.id, latitude, longitude },
    });
    res.status(201).json({ message: 'Location tracked', location });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
