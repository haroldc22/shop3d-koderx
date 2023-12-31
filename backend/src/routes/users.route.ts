import {Request, Response, Router} from "express";
import { user } from "../interfaces/users";
import Users from "../controllers/Users.controllers";

const router = Router();

router.route("/api/users")
.get((req: Request, res: Response)=>{
    new Users(req, res).viewAllUsers();
})

.post((req: Request, res: Response)=>{
    const usere: user = req.body;

    new Users(req, res).RegisterUser(usere);
})

router.route("/api/user/verify")
.post((req: Request, res: Response)=>{
    const useri: user = req.body;

    new Users(req, res).VerifyUserForApi(useri);
})

module.exports = router;