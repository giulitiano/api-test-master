import mongoose from 'mongoose';

const {Schema} = mongoose;

const noticia = new Schema({
   
    titulo:String,
    cuerpo:String,
    tags:[String],
    fecha_creacion:{ type:Date, default:Date.now},
    fecha_edicion:{type:Date, default:Date.now},
    fecha_baja:{type:Date, default:Date.now},
    usuario_creador:{Type:String},
    usuario_editor:{type:String},
    imagen:[String],
    organismo:{
        dependencia: String,
        usuario: String,

    }
    //a


})

export const noticiacoleccion = mongoose.model ("noticia",noticia,"noticia")