// const { uniqueId } = require('lodash')
const mongoose = require('mongoose')

// Define the Person Schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        emum: ['chef', 'waiter', 'manager'], 
        require: true
    },
    mobile: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        require: true
    }
})

// Create Person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;