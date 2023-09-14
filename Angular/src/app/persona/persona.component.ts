import { Component,NgModule } from "@angular/core";
import { PersonaService } from "./persona.service";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { IPersona } from "./persona";
import { Subscription } from "rxjs";

@Component({
    selector: 'pm-persona',
    templateUrl:'persona.component.html',
    styleUrls : ['persona.css']
    

})

export class PersonasComponet{

    formulario: FormGroup;
    sub!: Subscription;




    constructor(private personaService: PersonaService,public fb: FormBuilder){

        this.formulario = this.fb.group({

            nombre: ['', [Validators.required]],
            fechaNacimiento: ['', [Validators.required]],
            telefono: ['', [Validators.required]]
        
        });

    }

    rellenarRegistro(formulario: FormGroup): void{

        const registro : IPersona= {

            nombre : formulario.value.nombre,
            fechaNacimiento : formulario.value.fechaNacimiento,
            telefono : formulario.value.telefono
        };

        console.log("te pido el registro");
        this.hacerRegistro(registro);

        
    }


    hacerRegistro(registro : IPersona): void{

        this.personaService.postRegistro(registro).subscribe();
    }

}