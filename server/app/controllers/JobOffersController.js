import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Get all job offers
export const getAllJobOffers = async (req, res) => {
  try {
    const jobOffers = await prisma.jobOffer.findMany(
      {
        include: {
          contractType: true,
          company: true,
           company: {
            include: {
              values: true,
            },
          },
        },
      },
    );
    return jobOffers;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get job offer by ID
export const getJobOfferById = async (req, res) => {
  const { id } = req.params;
  try {
    const jobOffer = await prisma.jobOffer.findUnique({ where: { id: Number(id) } });
    if (jobOffer) {
      return jobOffer;
    } else {
      res.status(404).json({ error: "Job offer not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new job offer
export const createJobOffer = async (req, res) => {
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
    return jobOffer;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a job offer
export const updateJobOffer = async (req, res) => {
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
    return jobOffer;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a job offer
export const deleteJobOffer = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.jobOffer.delete({ where: { id: Number(id) } });
    return { message: "Job offer deleted successfully" };
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
