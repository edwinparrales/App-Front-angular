import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent {


  id:number=0;

  constructor(private _route:ActivatedRoute) {
    this.id = Number(this._route.snapshot.paramMap.get('id'));
  }

}
