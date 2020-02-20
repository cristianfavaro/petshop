const petModel = require('../model/pet');

const petController = {
    // funcao dentro de objeto é método. Método index...
    index: (req, res) => {
        res.send(petModel.listarPets());
    },
    add: (req, res) => {
        let novoPet = req.params;
        petModel.adicionarPet(novoPet)
        res.send(`Opa, ${novoPet.nome} foi adicionado`);
    },
    buscar: (req, res) => {
        let novoPet = req.params;
        let petBusca = petModel.buscarPet(novoPet.nome);
        res.send(`Opa, ${novoPet.nome} retornou ${petBusca.length} resultados`);
    },
}

module.exports = petController;
