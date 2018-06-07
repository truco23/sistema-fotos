import "rxjs/add/operator/map";

// modules angular
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// modules criados
import { routing } from "./app.routes";
import { JumbotronModule } from "./modules/jumbotron/jumbotron.module";
import { PainelModule } from "./modules/painel/painel.module";
import { FotoModule } from "./modules/foto/foto.module";
import { BotaoModule } from "./modules/botao/botao.module";

// components criados
import { AppComponent } from "./app.component";
import { ListagemComponent } from "./pages/listagem/listagem.component";
import { MenuComponent } from "./components/menu/menu.component";
import { CadastroComponent } from "./pages/cadastro/cadastro.component";

// services criados
import { FotoService } from "./services/foto.service";

@NgModule({

    imports: [
        BrowserModule,
        HttpModule,
        routing,
        JumbotronModule,
        PainelModule,
        FotoModule,
        BotaoModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        ListagemComponent,
        MenuComponent,
        CadastroComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        FotoService
    ]
})

export class AppModule {}