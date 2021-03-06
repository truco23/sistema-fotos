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
            "Esportes",
            "Outros"
        ]
    }

    listagem(): Observable<FotoComponent[]> {

        return this._http
            .get(this.url)
            .map(res => res.json())
    }

    buscaPorId(id) {

        return this._http
            .get(this.url + "/" + id)
            .map(res => res.json())
    }

    cadastro(foto: FotoComponent) {

        if(foto._id) {

            return this._http
                .put(this.url + "/" + foto._id, JSON.stringify(foto), { headers: this.header })
        } else {

            return this._http
            .post(this.url, JSON.stringify(foto), { headers: this.header })
        }
    }

    remocao(foto: FotoComponent) {

        return this._http
        .delete(this.url + "/" + foto._id)
    }
}