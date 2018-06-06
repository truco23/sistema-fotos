import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { routing } from "./app.routes";

import { AppComponent } from "./app.component";
import { ListagemComponent } from "./pages/listagem/listagem.component";

@NgModule({

    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        ListagemComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})

export class AppModule {}