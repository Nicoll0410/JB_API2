const mongoose = require("mongoose");

const citasSchema = mongoose.Schema({
    fecha_hora: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    diagnostico: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('citas', citasSchema);