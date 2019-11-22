import { jsonTable, jsonApointments } from './../utils/jsonOrdersTable';
import { Injectable } from '@nestjs/common';
import { sap } from '../utils/HttpConnectionSAP';

@Injectable()
export class ApointmentsService {
    async all(id:string){
        try { 
            let data : any;
            
            await sap.post('/RESTAdapter/CONSULTARCITASPPL',{ nit: id })
                .then( response => {
                    data = response.data;
                })
                .catch( err => {
                    data = err;
                });
                
            let data2 = data.Resp_MT_PORTALPROVEEDOR_CONSULTARCITAS28.CITAREGISTRADA.CABECERA

            data2.map((dataTable, index) => {
                // if(dataTable.orden_fabricacion){
                //     this.OrdenFabricacion = dataTable.orden_fabricacion
                //     this.ConsecutivoCita = vc2.consecutivocita
                // }else{
                //     this.OrdenFabricacion = ''
                //     this.ConsecutivoCita = ''
                // }

                jsonApointments[0].rows.push({
                   CitaNumero: dataTable.consecutivo_ord_procesa ? parseInt(dataTable.consecutivo_ord_procesa) : 'No hay dato',
                   FechaRecogida: parseInt(dataTable.fecha_recogida) > 0 ? dataTable.fecha_recogida : 'Sin asignar',
                   HoraRecogida: parseInt(dataTable.fecha_recogida) > 0 ? parseInt(dataTable.fecha_recogida) : 'Sin asignar',
                   Transportadora: dataTable.transporte_propio ?  dataTable.transporte_propio : 'Sin asignar',
                   Documentos: `Doc. Compra: ${dataTable.doc_compra} \n Ord.Fabricacion: ${parseInt(dataTable.orden_fabricacion)} `,
                   Order: index
                })
                jsonApointments[1].Details.push({
                   table: dataTable.DETALLE,
                   tulas: parseInt(dataTable.tulas),
                   bolsas: parseInt(dataTable.bolsas),
                   cajas: parseInt(dataTable.cajas),
                   nit: parseInt(dataTable.acreedor),
                   nombre: dataTable.nombre_acreedor,
                   dir: dataTable.direccion,
                   mail: dataTable.correo_electronico,
                   doc_compra: dataTable.doc_compra,
                   cod_material:  parseInt(dataTable.material),
                   orden: parseInt(dataTable.orden_fabricacion),
                   material: dataTable.texto_material,
                   ord_proceso: parseInt(dataTable.consecutivo_ord_procesa),
                   categoria: dataTable.categoria_stock
                }
                   
                )
            })
            return jsonApointments
           
        } catch (error) {
            return error
        }
    }


    getDetailsApoinments(id: number): Object{
        return jsonApointments[1].Details[id]
    }

    async deleteApointment(dataApointment: Object){
        try { 
            let data : any;
            
            await sap.post('/RESTAdapter/ELIMINARPRODUCCIONPPL',dataApointment)
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

    async updatesApointment(dataApointment: Object){
        try { 
            let data : any;
            
            await sap.post('/RESTAdapter/ACTUALIZARPRODUCCION',dataApointment)
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

