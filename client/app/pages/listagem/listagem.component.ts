import { Component } from "@angular/core";

import { FotoComponent } from "../../modules/foto/foto.component";
import { FotoService } from "../../services/foto.service";
import { Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "listagem",
    templateUrl: "./listagem.component.html"
})

export class ListagemComponent {

    @Input() grid: string = "col-xs-12 col-sm-6 col-md-4"
    fotos: FotoComponent[];

    constructor(private _fotoService: FotoService) {

        this._fotoService
        .listagem()
        .subscribe( res => {

            this.fotos = res;
            console.log("Fotos carregadas com sucesso");
        })
    }
}