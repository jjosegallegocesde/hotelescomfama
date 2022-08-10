import {Servidor} from './servidor/Servidor.js'

import 'dotenv/config'

//PARA UTILIZAR UNA CLASE LA DEBO INSTANCIAR
//PARA USAR UNA CLASE DEBO CREAR UN OBJETO (ES UNA VARIABLE)
//PÁRA USAR UNA CLASE LE DEBO SACAR COPIA
let servidorComfama=new Servidor()

//enciendo el servidor
servidorComfama.encenderServidor()
