"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routes_1 = require("./app.routes");
var jumbotron_module_1 = require("./modules/jumbotron/jumbotron.module");
var painel_module_1 = require("./modules/painel/painel.module");
var foto_module_1 = require("./modules/foto/foto.module");
var app_component_1 = require("./app.component");
var listagem_component_1 = require("./pages/listagem/listagem.component");
var menu_component_1 = require("./components/menu/menu.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routing,
                jumbotron_module_1.JumbotronModule,
                painel_module_1.PainelModule,
                foto_module_1.FotoModule
            ],
            declarations: [
                app_component_1.AppComponent,
                listagem_component_1.ListagemComponent,
                menu_component_1.MenuComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map