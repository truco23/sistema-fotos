import { RouterModule, Routes } from "@angular/router";

import { ListagemComponent } from "./pages/listagem/listagem.component";

const appRouting: Routes = [

    { path: "", component: ListagemComponent },
    { path: "**", component: ListagemComponent }
];

export const routing = RouterModule.forRoot(appRouting);