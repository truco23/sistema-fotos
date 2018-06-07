"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var listagem_component_1 = require("./pages/listagem/listagem.component");
var cadastro_component_1 = require("./pages/cadastro/cadastro.component");
var appRouting = [
    { path: "", component: listagem_component_1.ListagemComponent },
    { path: "cadastro", component: cadastro_component_1.CadastroComponent },
    { path: "cadastro/:id", component: cadastro_component_1.CadastroComponent },
    { path: "**", component: listagem_component_1.ListagemComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRouting);
//# sourceMappingURL=app.routes.js.map