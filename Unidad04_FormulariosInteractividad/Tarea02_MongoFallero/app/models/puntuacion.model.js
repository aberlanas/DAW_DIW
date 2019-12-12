const mongoose= require('mongoose');

const PuntuacionSchema = mongoose.Schema({
    idFalla:String,
    ip:String,
    puntuacion:Number
},{
    timestamps:true
});


module.exports = mongoose.model('Puntuacion',PuntuacionSchema);