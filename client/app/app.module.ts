import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { routing } from "./app.routes";
import { JumbotronModule } from "./modules/jumbotron/jumbotron.module";
import { PainelModule } from "./modules/painel/painel.module";
import { FotoModule } from "./modules/foto/foto.module";

import { AppComponent } from "./app.component";
import { ListagemComponent } from "./pages/listagem/listagem.component";
import { MenuComponent } from "./components/menu/menu.component";

@NgModule({

    imports: [
        BrowserModule,
        routing,
        JumbotronModule,
        PainelModule,
        FotoModule
    ],
    declarations: [
        AppComponent,
        ListagemComponent,
        MenuComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})

export class AppModule {}