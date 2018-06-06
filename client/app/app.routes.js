"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var listagem_component_1 = require("./pages/listagem/listagem.component");
var appRouting = [
    { path: "", component: listagem_component_1.ListagemComponent },
    { path: "**", component: listagem_component_1.ListagemComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRouting);
//# sourceMappingURL=app.routes.js.map