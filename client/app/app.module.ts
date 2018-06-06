import "rxjs/add/operator/map";

// modules angular
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

// modules criados
import { routing } from "./app.routes";
import { JumbotronModule } from "./modules/jumbotron/jumbotron.module";
import { PainelModule } from "./modules/painel/painel.module";
import { FotoModule } from "./modules/foto/foto.module";

// components criados
import { AppComponent } from "./app.component";
import { ListagemComponent } from "./pages/listagem/listagem.component";
import { MenuComponent } from "./components/menu/menu.component";

// services criados
import { FotoService } from "./services/foto.service";

@NgModule({

    imports: [
        BrowserModule,
        HttpModule,
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
    providers: [
        FotoService
    ]
})

export class AppModule {}