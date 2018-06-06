import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ListagemComponent } from "./pages/listagem/listagem.component";

@NgModule({

    imports: [
        BrowserModule
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