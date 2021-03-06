import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "painel",
    templateUrl: "./painel.component.html",
    styleUrls: [""]
})

export class PainelComponent {

    @Input() titulo: string;
    @Input() categoria: string;
}