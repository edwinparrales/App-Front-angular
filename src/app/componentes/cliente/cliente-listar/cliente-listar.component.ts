import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent {
    clientes:any[]=[
    {
      id:4,
      tipo:"CC",
      documento:"5258522",
      nombres:"Carlos Antonio Lopez",
      email:"ca@lk.co",
      telefono:"5555555",
      ciudad:"Bogota",
      direccion:"Calle 45",
      barrio:"Suba",
      observaciones:"Cliente de zona popular",


    },
      {
        id:6,
        tipo:"CC",
        documento:"123216987878",
        nombres:"Lupita Antonio Lopez",
        email:"ca@lk.co",
        telefono:"5555555",
        ciudad:"Bogota",
        direccion:"Calle 45",
        barrio:"Suba",
        observaciones:"Cliente de zona popular",

      }
  ]


}
