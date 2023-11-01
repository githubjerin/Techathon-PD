import express from "express";

import isLoggedIn from "../middleware/isLoggedIn.middleware.js";
import memory from "../models/memory.model.js";
import { upload } from "../modules/file-handler.module.js";


const router = express.Router();

/*  SECTION - I     */
router.get('/view-memory', isLoggedIn, async (req, res) => {
    try {
        const memory_detail = await memory.find({ email: req.user.email });
        if(memory_detail) {
            res.json(memory_detail);
        } else {
            res.status(400).json({ error: "No memory found" });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
});
/*  END OF SECTION - I  */

/*  SECTION - II     */
router.post('/add-memory', [isLoggedIn, upload.single("memory_image")], async (req, res) => {
    try{
        if (req.file !== undefined) {
            req.body.memory_image = req.file.filename;
        }
        console.log(req.user.email);
        const newMemory = await memory.create({
            email: req.user.email,
            data: req.body.data,
            memory_image: req.body.memory_image,
            location: req.body.location,
            title: req.body.title
        });
        newMemory.save().then(() => console.log("saved"));
        console.log(newMemory);
        res.status(200).json("Memory added");
    } catch (error){
        res.status(400).json({ error });
    }
});

router.post('/delete-memory', async (req, res) => {
    
    
});

export default router;