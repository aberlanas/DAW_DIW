const mongoose= require('mongoose');

const InvestigadorSchema = mongoose.Schema({
    nombre:String,
    profesion:String,
    puntosVida:Number,
    puntosCordura:Number
},{
    timestamps:true
});


module.exports = mongoose.model('Investigador',InvestigadorSchema);