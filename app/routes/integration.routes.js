module.exports = (app) => {
    const integrations = require('../controllers/integration.controller.js');

    // Create a new Note
    app.post('/integrations', integrations.create);

    // Retrieve all Notes
    app.get('/integrations', integrations.findAll);

    // Retrieve a single Note with noteId
    app.get('/integrations/:integrationId', integrations.findOne);

    // Update a Note with noteId
    app.put('/integrations/:integrationId', integrations.update);

    // Delete a Note with noteId
    app.delete('/integrations/:integrationsId', integrations.delete);
}