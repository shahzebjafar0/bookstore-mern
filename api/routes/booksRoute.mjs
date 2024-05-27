import express from "express";
import { bookController } from "../controllers/bookController.mjs";
const router = express.Router();

router.get("/", bookController.getAllBooks).post("/", bookController.saveBook);
router
  .get("/:id", bookController.getBook)
  .put("/:id", bookController.updateBook)
  .delete("/:id", bookController.deleteBook);

  export default router;
