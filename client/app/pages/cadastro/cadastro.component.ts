import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { FotoService } from "../../services/foto.service";
import { FotoComponent } from "../../modules/foto/foto.component";

import { MensagemService } from "../../services/mensagem.service";

@Component({
    moduleId: module.id,
    selector: "cadastro",
    templateUrl: "./cadastro.component.html"
})

export class CadastroComponent {

    categorias: string[];
    foto: FotoComponent = new FotoComponent();
    form: FormGroup;
    mensagem: string;
    classe: string = "d-none";

    constructor(
        private _fotoService: FotoService,
        private _mensagemService: MensagemService,
        private _fb: FormBuilder
    ) {

        this.categorias = this._fotoService.categorias();
        
        this.form = this._fb.group({

            categoria: ["", Validators.required],
            titulo: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
            url: ["", Validators.required],
            descricao: ["", Validators.compose([Validators.required, Validators.maxLength(50)])]
        })
    }

    cadastroFoto() {

        this._fotoService
        .cadastro(this.foto)
        .subscribe(res => {

            this.foto = new FotoComponent();
            this.mensagem = this._mensagemService.cadastroSucesso();
            this.classe = this._mensagemService.classeSuccess();
        }, erro => {

            console.log(erro);
            this.mensagem = this._mensagemService.cadastroErro();
            this.classe = this._mensagemService.classeDanger();
        })
    }

    close(evento) {

        this.classe = evento;
    }
}