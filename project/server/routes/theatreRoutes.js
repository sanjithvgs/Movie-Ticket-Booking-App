const router = require('express').Router()

const Theatre = require('../models/theatreModel')


// Add a Theatre

router.post('/add-theatre' , async(req, res)=>{
    try{

        const newTheatre = new Theatre(req.body)
        await newTheatre.save()

        res.send({
            success : true,
            message : "New theatre added successfully!"
        })

    }catch(error){
        res.send({
            success : false,
            message : error.message
        })
    }
})


// Update the Theatre

router.put('/update-theatre' , async(req, res)=>{
    try{

        await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);

        res.send({
            success : true,
            message : "Theatre has been updated!"
        })

    }catch(error){
        res.send({
            success : false,
            message : error.message
        })
    }
})


// Delete a Theatre

router.delete('/delete-theatre' , async(req, res)=>{
    try{

        await Theatre.findByIdAndDelete(req.body.theatreId);

        res.send({
            success : true,
            message : "New theatre has been deleted!"
        })

    }catch(error){
        res.send({
            success : false,
            message : error.message
        })
    }
})

// Get the theatre of a specific owner
router.get('get-all-theatres-by-owner', async (req,res)=>{
    try{

        
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})




// Get all theatres for Admin route
router.get('/get-all-theatres', async(req, res)=>{
    try{

        const allTheatres = await Theatre.find().populate('owner');
        res.send({
            success: true,
            message: "All Theatre fetched",
            data: allTheatres
        });

    }catch(err){
        res.send({
            success: false,
            message: err.message
        });
    }
});


module.exports = router;