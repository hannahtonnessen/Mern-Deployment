const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: 
    {type: String,
    minlength: [
        3, 'Name must be at least 3 characters'
    ]
    },
    type: {type: String,
        minlength: [
            3, 'Type must be at least 3 characters'
        ]
    },
    description: {type: String,
        minlength: [
            3, 'Description must be at least 3 characters'
        ]
    }
}, {timestamps: true});

//validations will be here
module.exports.Pet = mongoose.model('Pet', PetSchema);


//update Product name!!