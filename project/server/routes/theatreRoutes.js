const router = require('express').Router()

const Theatre = require('../models/theatreModel')


// Add a Theatre

router.post('/add-theatre' , async(req, res)=>{
    try{

        const newTheatre = new Theatre(req.body)
        await newTheatre.save()

        res.send({
            success : true,
            message : "New theatre has been added!"
        })

    }catch(error){
        res.send({
            success : false,
            message : error.message
        })
    }
})


// Update the Theatre

// router.put('/update-theatre' , async(req, res)=>{
//     try{

//         await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);

//         res.send({
//             success : true,
//             message : "New theatre has been added!"
//         })

//     }catch(error){
//         res.send({
//             success : false,
//             message : error.message
//         })
//     }
// })



module.exports = router;