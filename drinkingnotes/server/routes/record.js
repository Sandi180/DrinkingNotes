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

router.get('/api/record',(req,res)=>{
    var records = 
    ` Select * 
      from personal_notes_schema.personal_notes`

    client.query(records,(err,record_results)=>{
        if(err){
            console.error(`Record Query Error, ${err.stack}`)
        }else {
            res.stack(200).json(record_results)
        }

    })
    
})

module.exports = router;