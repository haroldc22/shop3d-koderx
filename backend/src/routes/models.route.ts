import {Request, Response, Router} from "express";
import UploadModel from "../controllers/UploadModels.controllers";
const router = Router();
import multer from "multer";
import ModelsProduct from "../controllers/Modelsproduct.controllers";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.route("/api/models")
  .get((req: Request, res: Response)=>{
    new ModelsProduct(req, res).getModels();
  })
  .post(upload.single('file'), (req: Request, res: Response)=>{
     const {model} = req.body;

     new ModelsProduct(req, res).createModel(model);
  });

module.exports = router;