import express from "express";

const router = express.Router();

router.get("/hallo", (req, res) => {
  res.send("hello jarr")
})

export default router;