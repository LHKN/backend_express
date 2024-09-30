import express from "express";
import customerController from "../controller/customer.controller.js";

const customerRouter = express.Router();

customerRouter.get("/api/welcome", customerController.welcome);

export default customerRouter;
