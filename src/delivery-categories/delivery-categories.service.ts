import { jsonTable } from './../utils/jsonOrdersTable';
import { Injectable } from '@nestjs/common';
import { sap } from '../utils/HttpConnectionSAP';

@Injectable()
export class DeliveryCategoriesService {
    async all(id : string){
        try { 
            let data : any;
            
            await sap.post('/RESTAdapter/ORDENESPENDIENTESPPL',{ nit: id })
                .then( response => {
                    data = response.data;
                })
                .catch( err => {
                    data = err;
                });
                
            let data2 = data.Resp_MT_PORTALPROVEEDOR_ORDENESPENDIENTES.ORDENESPENDIENTES.CABECERA

            data2.map((dataTable, index) => {
                jsonTable[0].rows.push({
                    //AGRAGADOS PARA HACER POST GUARDAR
                    acreedor: dataTable.acreedor ? dataTable.acreedor : ' ',
                    nombre_acreedor: dataTable.nombre_acreedor ? dataTable.nombre_acreedor : ' ',
                    direccion: dataTable.direccion ? dataTable.direccion : ' ',
                    correo_electronico: dataTable.correo_electronico ? dataTable.correo_electronico : ' ',
                    campana_orden: dataTable.campana_orden ? dataTable.campana_orden : ' ',
                    version: dataTable.version ? dataTable.version : ' ',
                    usuario: dataTable.usuario ? dataTable.usuario : ' ',
                    fecha_entrega: dataTable.fecha_entrega ? dataTable.fecha_entrega : ' ',
                    categoria_stock: dataTable.categoria_stock ? dataTable.categoria_stock : 'MALA',
                    faseProve: dataTable.faseProve ? dataTable.faseProve : ' ',
                    //FIN DE AGREGADOS
                   Fecha: this.dateFormat(dataTable.fecha_entrega),
                   DocCompra: dataTable.doc_compra ? dataTable.doc_compra : ' ',
                   OrdenFab: dataTable.orden_fabricacion ? parseInt(dataTable.orden_fabricacion) : ' ',
                   CodMaterial: dataTable.material ? parseInt(dataTable.material) : ' ',
                   Material: dataTable.texto_material ? dataTable.texto_material : ' ',
                   DescOrdenCampana: dataTable.campana_orden ? 'Campaña: ' +  dataTable.campana_orden : ' ' ,
                   DescOrdenVersion: dataTable.version ? 'Version: ' + dataTable.version : ' ' ,
                   DescOrdenPedido: dataTable.usuario ? 'Resp.Pedido: ' + dataTable.usuario : ' ',
                   Order: index
                })

                jsonTable[1].Details.push(
                   dataTable.DETALLE
                )

                jsonTable[1].Workshops.push(
                    dataTable.TALLERES 
                 )   
             })
            return jsonTable
           
        } catch (error) {
            return error
        }
    }


    dateFormat(date: number) {
        let newDate = date.toString()
        return newDate = newDate.slice(0, 4) + "/" + newDate.slice(4, 6) + "/" + newDate.slice(7, 9)
     }

    getdeliveryCategoriesById(id: number): Object{
        return jsonTable[1].Details[id];
    }

    getWorkshopsById(id: number): Object {
        return jsonTable[1].Workshops[id];
     }

    async saveApointment(dataApointment: any){
        try { 
            let data : any;
            
            await sap.post('/RESTAdapter/INSERTPRODUCCIONPPL',dataApointment)
                .then( response => {
                    data = response.data;
                })
                .catch( err => {
                    data = err;
                });
                
            return data
           
        } catch (error) {
            return error
        }
    }
  
}
