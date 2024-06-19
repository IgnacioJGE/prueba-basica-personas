import mongoose from "npm:mongoose@8.4.3"
import { persona } from '../types.ts';


const Schema = mongoose.Schema;

const schemapersonas=new  Schema ({
    nombre:{type:String,required:true},
    edad:{type:Number,required:true},
    conocidos:{type:[String],required:false}
},{timestamps:true})

 export type tipopersona =mongoose.Document & (persona)

export const Modelopersona = mongoose.model<tipopersona>("Personas",schemapersonas)