import { Component, Input } from "@angular/core";

import { FotoComponent } from "../../modules/foto/foto.component";

import { FotoService } from "../../services/foto.service";
import { MensagemService } from "../../services/mensagem.service";

@Component({
    moduleId: module.id,
    selector: "listagem",
    templateUrl: "./listagem.component.html"
})

export class ListagemComponent {

    @Input() grid: string = "col-xs-12 col-sm-6 col-lg-4";

    fotos: FotoComponent[];
    mensagem: string;
    classe: string = "d-none";
    categorias: string[];

    constructor(
        private _fotoService: FotoService,
        private _mensagemService: MensagemService
    ) {

        this.categorias = this._fotoService.categorias();

        this._fotoService
        .listagem()
        .subscribe( res => {

            this.fotos = res;
        })
    }

    removerFoto(foto) {

        this._fotoService
        .remocao(foto)
        .subscribe(res => {

            let novasFotos = this.fotos.slice(0);
            let indiceFoto = novasFotos.indexOf(foto);
    
            novasFotos.splice(indiceFoto, 1);
            this.fotos = novasFotos;

            this.mensagem = this._mensagemService.remocaoSucesso();
            this.classe = this._mensagemService.classeSuccess();
        }, erro => {

            console.log(erro);
            this.mensagem = this._mensagemService.remocaoErro();
            this.classe = this._mensagemService.classeDanger();
        })
    }

    close(evento) {
        this.classe = evento;
    }
}