"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var foto_service_1 = require("../../services/foto.service");
var core_2 = require("@angular/core");
var ListagemComponent = /** @class */ (function () {
    function ListagemComponent(_fotoService) {
        var _this = this;
        this._fotoService = _fotoService;
        this.grid = "col-xs-12 col-sm-6 col-md-4";
        this._fotoService
            .listagem()
            .subscribe(function (res) {
            _this.fotos = res;
            console.log("Fotos carregadas com sucesso");
        });
    }
    __decorate([
        core_2.Input(),
        __metadata("design:type", String)
    ], ListagemComponent.prototype, "grid", void 0);
    ListagemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "listagem",
            templateUrl: "./listagem.component.html"
        }),
        __metadata("design:paramtypes", [foto_service_1.FotoService])
    ], ListagemComponent);
    return ListagemComponent;
}());
exports.ListagemComponent = ListagemComponent;
//# sourceMappingURL=listagem.component.js.map