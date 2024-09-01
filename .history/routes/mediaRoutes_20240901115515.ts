import express, {Request,Response} from "express";

import { addMediaToMessage } from "@/services/mediaServices";
import { getMediaForMessage } from "@/services/mediaServices";
const router = express.Router();
router.post('/add', async (req:Request,res:Response)=>{
    const {mediaType,mediaUrl,messageId} =req.body;
    try{
        const results await addMediaToMessage(messageId,mediaType,mediaUrl);

        
    }
})