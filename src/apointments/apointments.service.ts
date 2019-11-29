import { jsonTable, jsonApointments } from './../utils/jsonOrdersTable';
import { Injectable } from '@nestjs/common';
import { sap } from '../utils/HttpConnectionSAP';

@Injectable()
export class ApointmentsService {
    
    transporte_propio: any = null;
    tranportador: any = null;
    taller: any = null;

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
                if(dataTable.tranportador){
                    //this.transporte_propio = dataTable.transporte_propio
                    this.tranportador = dataTable.tranportador
                   // this.taller = dataTable.taller
                }else{
                    //this.transporte_propio = 'sin asignar'
                    this.tranportador = 'sin asignar'
                    //this.taller = 'sin asignar'
                }

                jsonApointments[0].rows.push({
                   CitaNumero: dataTable.consecutivo_ord_procesa ? parseInt(dataTable.consecutivo_ord_procesa) : 'No hay dato',
                   FechaRecogida: parseInt(dataTable.fecha_recogida) > 0 ? dataTable.fecha_recogida : 'Sin asignar',
                   HoraRecogida: dataTable.hora_recogida ? parseInt(dataTable.hora_recogida) : 'Sin asignar',
                   Transportador: dataTable.transporte_propio ?  'Transporte propio' : dataTable.transportador ? dataTable.transportador : 'Sin asginar',
                   Documentos: `Doc. Compra: ${dataTable.doc_compra} \n Ord.Fabricacion: ${parseInt(dataTable.orden_fabricacion)} `,
                   FechaCreacion: dataTable.Fecha_creacion,
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
                   doc_compra: dataTable.doc_compra ? dataTable.doc_compra : null,
                   cod_material:  parseInt(dataTable.material),
                   orden: parseInt(dataTable.orden_fabricacion),
                   material: dataTable.texto_material,
                   ord_proceso: parseInt(dataTable.consecutivo_ord_procesa),
                   categoria: dataTable.categoria_stock,
                   cantidad_maxima: dataTable.cantidad_maxima,
                   version: dataTable.version,
                   transporte_propio: dataTable.transporte_propio ,
                   tranportador: this.tranportador,
                   //taller: this.taller
                   //faseProve:  dataTable.faseProve ? dataTable.faseProve : ' ',
                   //ilimitado: dataTable.DETALLE[index].ilimitado ? dataTable.DETALLE[index].ilimitado : ' '
                })
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

