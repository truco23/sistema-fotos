import { RouterModule, Routes } from "@angular/router";

import { ListagemComponent } from "./pages/listagem/listagem.component";
import { CadastroComponent } from "./pages/cadastro/cadastro.component";

const appRouting: Routes = [

    { path: "", component: ListagemComponent },
    { path: "cadastro", component: CadastroComponent },
    { path: "**", component: ListagemComponent }
];

export const routing = RouterModule.forRoot(appRouting);