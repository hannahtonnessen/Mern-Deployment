const PetController = require('../controllers/pet.controller');

module.exports = function(app){
    app.get('/api/pets/all', PetController.AllPets);
    app.post('/api/pets/add', PetController.Add);
    app.get('/api/pets/:id', PetController.SpecificPet);
    app.put('/api/pets/edit/:id', PetController.Edit);
    app.delete('/api/pets/delete/:id', PetController.Delete);
}