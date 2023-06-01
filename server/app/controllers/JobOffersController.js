const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all job offers
const getAllJobOffers = async (req, res) => {
  try {
    const jobOffers = await prisma.jobOffer.findMany();
    res.json(jobOffers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get job offer by ID
const getJobOfferById = async (req, res) => {
  const { id } = req.params;
  try {
    const jobOffer = await prisma.jobOffer.findUnique({ where: { id: Number(id) } });
    if (jobOffer) {
      res.json(jobOffer);
    } else {
      res.status(404).json({ error: "Job offer not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new job offer
const createJobOffer = async (req, res) => {
  const { name, description, salary, contractTypeId, companyId } = req.body;
  try {
    const jobOffer = await prisma.jobOffer.create({
      data: {
        name,
        description,
        salary,
        contractTypeId,
        companyId,
      },
    });
    res.json(jobOffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a job offer
const updateJobOffer = async (req, res) => {
  const { id } = req.params;
  const { name, description, salary, contractTypeId, companyId } = req.body;
  try {
    const jobOffer = await prisma.jobOffer.update({
      where: { id: Number(id) },
      data: {
        name,
        description,
        salary,
        contractTypeId,
        companyId,
      },
    });
    res.json(jobOffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a job offer
const deleteJobOffer = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.jobOffer.delete({ where: { id: Number(id) } });
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllJobOffers,
  getJobOfferById,
  createJobOffer,
  updateJobOffer,
  deleteJobOffer,
};