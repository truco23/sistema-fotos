import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";

import { FotoComponent } from "../modules/foto/foto.component";

@Injectable()
export class FotoService {

    header: Headers;
    url: string = "v1/fotos";

    constructor(private _http: Http) {
        
        this.header = new Headers;
        this.header.append("Content-Type", "application/json");
    }

    categorias(): string[] {

        return [
            "Paisagens",
            "Animais",
            "Esporter",
            "Outros"
        ]
    }

    listagem(): Observable<FotoComponent[]> {

        return this._http
            .get(this.url)
            .map(res => res.json())
    }

    cadastro(foto: FotoComponent) {

        if(foto._id) {

            console.log("Atualização");
        } else {

            return this._http
            .post(this.url, JSON.stringify(foto), { headers: this.header })
        }
    }
}