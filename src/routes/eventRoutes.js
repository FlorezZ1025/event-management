import express from 'express'
import Event from '../models/event.js'

const router = express.Router();


router.post('/create',async (req,res)=>{
    const {title,description,date} = req.body;
    const event = new Event({title,description,date});
    try{
        await event.save();
        res.status(201).send({event});
    } catch(error){
        res.status(400).send(error);
    }
})

router.get('/',async (req,res)=>
    {
    try{
        const events = await Event.find({});
        res.send(events);
    } catch(error){
        res.status(500).send(error);
}
});


export default router;
