import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route('/register').post(
    // a middleware - this extracts the file fields (avatar, coverImage ), saves them to the disk, adds file metadata to req.files
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage", //agar ye naam kee file nahi aayi, toh multer issey req.files mein bhi nahi dalega
            maxCount: 1
        }
    ]),

    registerUser
); 
//register user is main task to be performed after middleware

export default router;