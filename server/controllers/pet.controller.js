const { Pet } = require('../models/pet.model');


module.exports.Add = (request, response) => {
    console.log(response)
    const { name, type, description } = request.body;
    console.log(name, type, description) 
    Pet.create({
        name,
        type,
        description
    })
    .then(pet => response.json(pet))
    .catch(err => response.status(400).json(err));
}

module.exports.AllPets = (request, response) => {
    Pet.find({}).sort({"type": 1})
    .then(pets => response.json(pets))
    .catch(err => response.status(400).json(err))
}

module.exports.SpecificPet = (request, response) => {
    console.log('in backend function')
    Pet.findOne({_id:request.params.id})
    .then(pet => response.json(pet))
    // console.log('in backend specific pet function')
    .catch(err => response.status(400).json(err))
}

module.exports.Edit = (request, response) => {
    console.log('this is the updateProduct function')
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators : true})
    .then(updatedPet => response.json(updatedPet))
    .catch(err => response.status(400).json(err))
}

module.exports.Delete = (request, response) => {
    console.log('in server side delete function')
    Pet.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.status(400).json(err))
}