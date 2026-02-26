import { Router } from "express";
import { getPropertyCategories } from "../../controllers/metadata/metadata.controller";

const router = Router();

router.get("/property-categories", getPropertyCategories);

export default router;
