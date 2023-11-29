const express = require("express");
const citasSchema = require("../models/citas");

const router = express.Router();

//Crear 
router.post("/citas", (req, res) => {
    const cita = citasSchema(req.body);
    cita
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//Get all citas
router.get("/citas", (req, res) => {
    citasSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//Get a citas
router.get("/citas/:id", (req, res) =>{
    const { id } = req.params;
    citasSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//Delete a citas
router.delete("/citas/:id", (req, res) => {
    const { id } = req.params;
    citasSchema
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//Update a citas
router.put("/citas/:id", (req, res) => {
    const { id } = req.params;
    const { fecha_hora, direccion, diagnostico } = req.body;
    citasSchema
    .updateOne({ _id: id }, { $set: {fecha_hora, direccion, diagnostico}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

module.exports = router;