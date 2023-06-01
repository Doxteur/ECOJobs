import { Router as router } from "express";
import {
    getAllJobOffers,
    getJobOfferById,
    createJobOffer,
    updateJobOffer,
    deleteJobOffer,
} from "../controllers/JobOffersController.js";

export default router()
  .get("/job-offers", async (req, res) => {
    const offers = await getAllJobOffers(req, res);
    res.json(offers);
  })
  .post("/job-offers", async (req, res) => {
    const offer = await createJobOffer(req, res);
    res.json(offer);
  }).delete("/job-offers/:id", async (req, res) => {
    const offer = await deleteJobOffer(req, res);
    res.json(offer);
  })
  .get("/job-offers/:id", async (req, res) => {
    const offer = await getJobOfferById(req, res);
    res.json(offer);
  })
  .put("/job-offers/:id", async (req, res) => {
    const offer = await updateJobOffer(req, res);
    res.json(offer);
  })

