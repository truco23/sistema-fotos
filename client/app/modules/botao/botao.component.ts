import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "botao",
    templateUrl: "./botao.component.html"
})

export class BotaoComponent {

    @Input() nome: string;
    @Input() estilo: string;
    @Input() tipo: string = "button";
    @Input() cadastro: boolean = false;
    @Input() remocao: boolean = false;
    @Input() desabilitado: boolean = false;

    @Output() acao = new EventEmitter();

    execultaAcao(event: Event) {

        event.preventDefault();

        if(this.cadastro) {

            if(confirm("Deseja confirmar?")){

                this.acao.emit();
                return;
            }
        }

        if(this.remocao) {

            if(confirm("Deseja remover essa foto?")) {

                this.acao.emit();
            }
        }
    }
}