import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "foto",
    templateUrl: "./foto.component.html",
    styleUrls: [""]
})

export class FotoComponent {

    _id: string;
    @Input() titulo: string;
    @Input() url: string;
    @Input() descricao: string;
}