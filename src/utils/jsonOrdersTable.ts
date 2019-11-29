export const jsonTable = [
    {

       columns: [
          {
             label: 'Item',
             field: 'Item',
             sort: 'asc',
             width: 50
          },
          {
             label: 'Fecha',
             field: 'Fecha',
             sort: 'asc',
             width: 150,
          },
          {
             label: 'Documento compra',
             field: 'DocCompra',
             sort: 'asc',
             width: 200
          },
          {
             label: 'Orden fabricacion',
             field: 'OrdenFab',
             sort: 'asc',
             width: 170
          },
          {
             label: 'Codigo material',
             field: 'CodMaterial',
             sort: 'asc',
             width: 90
          },
          {
             label: 'Material',
             field: 'Material',
             sort: 'asc',
             width: 150
          },   
          {
             label: 'Descripcion orden',
             field: 'DescOrdenTabulado',
             sort: 'asc',
             width: 200
          }  
       ],
       rows: [] 
    },
    {
       Details: [],
       Workshops: []
       
    }         
 
 ]

 export const jsonApointments =[
   {

      columns: [
         {
            label: 'Cita numero',
            field: 'CitaNumero',
            sort: 'asc',
            width: 150,

         },
         {
            label: 'Fecha Creacion',
            field: 'FechaCreacion',
            sort: 'asc',
            width: 270
         },
         {
            label: 'Transportador',
            field: 'Transportador',
            sort: 'asc',
            width: 100
         },
         {
            label: 'Fecha recogida',
            field: 'FechaRecogida',
            sort: 'asc',
            width: 270
         },
         {
            label: 'Hora recogida',
            field: 'HoraRecogida',
            sort: 'asc',
            width: 200
         },
         {
            label: 'Documentos',
            field: 'Documentos',
            sort: 'asc',
            width: 150
         },
         {
            label: 'Opciones',
            field: 'Opciones',
            sort: 'asc',
            width: 100
         }
      ],
      rows: []
   },
   {
      Details: []
   }
]

export const jsonReportsFinal = 
   {

      columns: [
         {
            label: 'Documento compra',
            field: 'doc_compra',
            sort: 'asc',
            width: 50,

         },
         {
            label: 'O.Fabricación',
            field: 'orden_fabricacion',
            sort: 'asc',
            width: 50
         },
         {
            label: 'Texto Material',
            field: 'texto_material',
            sort: 'asc',
            width: 300
         },
         {
            label: 'Campaña',
            field: 'campana_orden',
            sort: 'asc',
            width: 100
         },
         {
            label: 'Categoria Stock',
            field: 'categoria_stock',
            sort: 'asc',
            width: 100
         },
         {
            label: 'Valor Matriz',
            field: 'valor_matriz',
            sort: 'asc',
            width: 80
         },
         {
            label: 'Cantidad Inicial',
            field: 'cantidad_inicial',
            sort: 'asc',
            width: 80
         }, 
         {
            label: 'Cantidad Solicitadas en Citas',
            field: 'cantidad_confirmada',
            sort: 'asc',
            width: 80
         },
         {
            label: 'Cantidad Entregada',
            field: 'cantidad_entregar',
            sort: 'asc',
            width: 100
         },
         {
            label: 'Cantidad Pendiente',
            field: 'cantidad_pendiente',
            sort: 'asc',
            width: 100
         },
         {
            label: 'Nro. Cita',
            field: 'consecutivocita',
            sort: 'asc',
            width: 150
         }
      ],
      rows: []
   }
