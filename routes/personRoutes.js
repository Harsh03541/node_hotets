const express = require('express')
const router = express.Router();

const Person = require('./../models/Person')


// POST route to add a person
router.post('/', async (req, res) => {
    try{
        const data = req.body   // Asumming the request body contains the preson data

        // create a new person to the data using the mongoose model 
        const newPerson = new Person(data);

        // save the new person to the database
        const response = await newPerson.save();
        console.log("data saved") 
        res.status(200).json(response);
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"})
    }
})

// GET route to get a person
router.get('/', async (req, res) => {
    console.log('data fetched');
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err) {
        console.log(err)
        res.status(500).json({err: "Internal server error (get)"})
    }
})


router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;    // Extract the work type from the URL parameter
        if(workType == "chef" || workType == "manager" || workType == "waiter") {
            const response = await Person.find({work: workType});    
            console.log('response fetched')
            res.status(200).json(response);
        }
        else {
            res.status(404).json({error: "Invalid work type" })
        }
    }
    catch(error) {
    console.log(error);
    res.status(500).json({error: "Internal server error "})
}})


router.put('/:id', async(req, res) => {
    try {
        const personId = req.params.id; // Extract the id from the URL parameter
        const updatedPersonData = req.body; // Extract the data from the request body
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
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
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId);
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

module.exports = router;

