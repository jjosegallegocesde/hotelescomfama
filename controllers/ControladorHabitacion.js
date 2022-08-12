class ControladorHabitacion{


    constructor(){}

    //buscar habitaciones
    buscarHabitacion(request,response){

        //Intento resolver la PETICION
        try{
           response.status(200).json({}) 
        }catch(error){ //FALLO RESOLVIENDO LA PETICION
            response(400).json({})
        }
    }

    //buscar habitacion por id
    buscarHabitacionPorId(request,response){
        try{
            response.status(200).json({}) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({})
         }
    }

    //agregar habitacion
    agregarHabitacion(request,response){
        try{
            response.status(200).json({}) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({})
         }
    }

    //editar habitacion
    editarHabitacion(request,response){

        try{
            response.status(200).json({}) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({})
         }

    }

    //eliminar habitacion
    eliminarHabitacion(request,response){
        try{
            response.status(200).json({}) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({})
         }
    }



}