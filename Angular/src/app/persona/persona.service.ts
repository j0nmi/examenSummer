import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IPersona } from "./persona";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class PersonaService{

    private personasUrl = "https://localhost:7133/api/personas";
    registroUrl = "https://localhost:7133/api/personas";

    constructor(private http: HttpClient){}


    getPersonas():Observable<IPersona[]>{
        console.log('tomando personas');
        return this.http.get<IPersona[]>(this.personasUrl)
    }


    postRegistro(registro : IPersona): Observable<null>{
        const requestData = {
            nombre : registro.nombre,
            fechaNacimiento : registro.fechaNacimiento,
            telefono : registro.telefono
        };

        console.log(requestData);
        return this.http.post<null>(this.registroUrl,requestData);

    }
}