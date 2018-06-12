import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "menu",
    templateUrl: "./menu.component.html"
})

export class MenuComponent {

    link: string = "";

    constructor(private _rota: Router, private _parametro: ActivatedRoute) {

        this._rota
            .events
            .subscribe( parametro => this.link = parametro.url)
    }
}