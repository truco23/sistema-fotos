import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "mensagem",
    templateUrl: "./mensagem.component.html"
})

export class MensagemComponent {

    @Input() classe: string;
    @Input() mensagem: string;
    @Input() fechar: boolean = true;

    @Output() fecharMensagem = new EventEmitter();

    close() {

        if(this.fechar) {

            this.fecharMensagem.emit("d-none");
        }
    }
}