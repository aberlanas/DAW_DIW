module.exports = (app) => {
    const investigadores = require('../controllers/investigador.controller.js');

    // Create a new investigadores
    app.post('/investigadores', investigadores.create);

    // Retrieve all investigadores
    app.get('/investigadores', investigadores.findAll);

    // Retrieve a single investigadores with investigadorId
    app.get('/investigadores/:investigadorId', investigadores.findOne);

    // Update a investigadores with investigadorId
    app.put('/investigadores/:investigadorId', investigadores.update);

    // Delete a investigadores with investigadorId
    app.delete('/investigadores/:investigadorId', investigadores.delete);
}