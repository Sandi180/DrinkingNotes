const express = require('express')
const router = express.Router();


const pg = require('pg');
const {Client} = pg



const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database:'Experimental_DrinkingNotes',
    password:'J0lieknits',
    port:'5432'
});


client.connect()
    .then(()=>{
        console.log('Connected to postgres database.')
    })
    .catch((err)=>{
        console.log(`Connection error: ${err.stack}`)
})


router.post("/myjourn", (req,res)=>{
    const submission = {
         teaName:req.body.teaName,
         brew_style:req.body.brew_style,
         aroma:req.body.aroma,
         head:req.body.head,
         body:req.body.body,
         tail:req.body.tail,
         field:req.body.comments
    }

    if(!submission.teaName || !submission.brew_style || !submission.aroma 
        || !submission.head || !submission.body || !submission.tail || !submission.field){
            res.status(411).send({message:"Empty description recieved"})
        }


    let query = `INTO INTO record_schema.record
                    ()`


})


    











module.exports = router;


