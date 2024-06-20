import {Request,Response} from "npm:express@4.18.2"
import {Modelopersona} from "../db/personas.ts"

export default async function addPerson(req:Request,res:Response){
try {
const {nombre,edad,conocidos}= req.body
if(!nombre){
return res.status(407).send("Error nombre obligatorio")
}
if(!edad){
return res.status(407).send("Error edad obligatoria")
}
if(!nombre&& !edad){
return res.status(407).send("Error Edad y nombre obligatorios")
}
if(!conocidos){
const alreadyexists= await Modelopersona.findOne({nombre,edad})
if(alreadyexists){
return res.status(407).send("Perosna existente")
}
const nuevaperosna =  new Modelopersona({
    nombre:nombre,
    edad:edad
})
nuevaperosna.save()
return res.status(200).send(nuevaperosna)

}
const alreadyexists= await Modelopersona.findOne({nombre,edad,conocidos})
if(alreadyexists){
return res.status(407).send("Perosna existente")
}

const nuevaperosna = new Modelopersona({
nombre:nombre,
edad:edad,
conocidos:conocidos
})
await nuevaperosna.save()
return res.status(200).send(nuevaperosna)
} catch (error) {
    return res.status(405).send(error.message)
    }
    
    }