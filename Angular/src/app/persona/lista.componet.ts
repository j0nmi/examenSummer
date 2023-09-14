import { Component,OnInit } from "@angular/core";
import { IPersona } from "./persona";
import { PersonaService } from "./persona.service";
import { Subscription } from "rxjs";


@Component({

    selector : 'pm-lista',
    templateUrl : 'lista.component.html',
    styleUrls : ['lista.css']
})

export class ListaComponet implements OnInit{


    listapersonas : IPersona[] = [];
    sub!: Subscription;

    constructor(private personaService : PersonaService){

    }

    ngOnInit(): void {
        console.log('intentando la api');
        this.sub = this.personaService.getPersonas().subscribe(
          (listapersonas) => {
            console.log('Personas Recibidas:', listapersonas);
            this.listapersonas = listapersonas; // Assign the received data to the class property.
          },
          (error) => {
            console.error('Error al obtener personas:', error);
          }
        );
    }
    

}