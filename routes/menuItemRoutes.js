const express = require('express')
const router = express.Router();

const menuItem = require('./../models/MenuItem')


// POST route to add a menuItem
router.post('/', async (req, res) => {
    try {

    const data = req.body;

    const newMenu = new menuItem(data);

    const response = await newMenu.save();
    console.log("Data saved")
    res.status(200).json(response)
    }
    catch(err) {
        console.log(err);
        res.status(500).json({err: "Internal server error (get)"})
    }
})

// GET route to get a menuItem
router.get('/', async (req, res) => {
    console.log('data fetched');
    try{
        const data = await menuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err) {
        console.log(err)
  
        res.status(500).json({err: "Internal server error (get)"})
    }
})


router.get('/:taste', async (req, res) => {
    try{
        const taste = req.params.taste;
        if(taste == 'sweet' || taste == 'sour' || taste == 'spicy') {
            const response = await menuItem.find({taste: taste});
            console.log("response fetching")
            res.status(200).json(response);
        }
        else {
            res.status(404).json({error : "Not available taste"})
        }
        
    }
    catch(err) {
        console.log(error)
        res.status(200).json({error: "Internal server error"})
        
    }
})



router.put('/:id', async(req, res) => {
    try {
        const menuId = req.params.id; // Extract the id from the URL parameter
        const updatedMenuData = req.body; // Extract the data from the request body
        const response = await menuItem.findByIdAndUpdate(menuId, updatedMenuData, {
            new: true,
            runValidators: true
        })
        if(!response) {
            return res.status(404).json({error: 'Person not found'})
        }
        console.log('data updated')
        res.status(200).json(response)
    }
    catch(error) {
        console.log(err)
        res.status(500).json({error: "Internal server error "})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const menuId = req.params.id;

        const response = await menuItem.findByIdAndDelete(menuId);
        if(!response) {
            return res.status(404).json({error: "Person not found"});
        }
        console.log('data delete')
        res.status(200).json({message: "person deleted successfully"})
    }
    catch(err) {
        console.log(err)
        res.status(500).json({error: "Internal server error "})
    }
})


// export the module
module.exports = router;





