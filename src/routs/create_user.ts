import express from "express";
import { User } from "../dataEntities/User";

const router = express.Router();

router.post("/api/user", async (req, res) => {
  const { Name, Account_number, balance } = req.body;
  const user = User.create({
    name: Name,
    account_number: Account_number,
    balance,
  });
 await user.save()

 return res.json(user)

});

export { router as createUserRouter };
