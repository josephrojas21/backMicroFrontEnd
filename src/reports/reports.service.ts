
import { jsonTable, jsonApointments, jsonReportsFinal } from './../utils/jsonOrdersTable';
import { Injectable } from '@nestjs/common';
import { sap } from '../utils/HttpConnectionSAP';

@Injectable()
export class ReportsService {

    OrdenFabricacion = null;
    ConsecutivoCita = null;

    async all(id: String){
        try { 
            let data : any;
            
            await sap.post('/RESTAdapter/REPORTEORDENESPPL',{ nit: id })
                .then( response => {
                    data = response.data;
                    
                })
                .catch( err => {
                    data = err;
                });
                
            let responseData = data.Resp_MT_PORTALPROVEEDOR_REPORTEORDENES.ORDENESPENDIENTES.CABECERA;
            
            responseData.map((dataTable) => {
                
                for (let vc2 of dataTable.DETALLE) {
                    if(responseData.orden_fabricacion){
                        this.OrdenFabricacion = responseData.orden_fabricacion
                        this.ConsecutivoCita = vc2.consecutivocita
                    }else{
                        this.OrdenFabricacion = ''
                        this.ConsecutivoCita = ''
                    }

                    jsonReportsFinal.rows.push({
                    doc_compra: dataTable.doc_compra,
                    orden_fabricacion: this.OrdenFabricacion,            
                    texto_material: dataTable.texto_material ? dataTable.texto_material : 'No hay dato',
                    campana_orden : dataTable.campana_orden,            
                    categoria_stock : dataTable.categoria_stock,
                    valor_matriz : vc2.valor_matriz ? vc2.valor_matriz : 'No hay dato',
                    cantidad_inicial : vc2.cantidad_inicial ? vc2.cantidad_inicial : 'No hay dato',
                    cantidad_confirmada : vc2.cantidad_confirmada,
                    DescOrden : vc2.posicion_pedido,
                    cantidad_pendiente : vc2.cantidad_pendiente,
                    cantidad_entregar : vc2.cantidad_entregar,
                    consecutivocita : this.ConsecutivoCita                   
                    })
                }


            })

            return  jsonReportsFinal;
           
        } catch (error) {
            return error
        }
    }

  
}

