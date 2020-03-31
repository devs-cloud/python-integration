const mongoose = require('mongoose');

const IntegrationSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Integration', IntegrationSchema);