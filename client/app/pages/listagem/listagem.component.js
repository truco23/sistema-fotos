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
var mensagem_service_1 = require("../../services/mensagem.service");
var ListagemComponent = /** @class */ (function () {
    function ListagemComponent(_fotoService, _mensagemService) {
        var _this = this;
        this._fotoService = _fotoService;
        this._mensagemService = _mensagemService;
        this.grid = "col-xs-12 col-sm-6 col-md-4";
        this.classe = "d-none";
        this._fotoService
            .listagem()
            .subscribe(function (res) {
            _this.fotos = res;
        });
    }
    ListagemComponent.prototype.removerFoto = function (foto) {
        var _this = this;
        this._fotoService
            .remocao(foto)
            .subscribe(function (res) {
            var novasFotos = _this.fotos.slice(0);
            var indiceFoto = novasFotos.indexOf(foto);
            novasFotos.splice(indiceFoto, 1);
            _this.fotos = novasFotos;
            _this.mensagem = _this._mensagemService.remocaoSucesso();
            _this.classe = _this._mensagemService.classeSuccess();
        }, function (erro) {
            console.log(erro);
            _this.mensagem = _this._mensagemService.remocaoErro();
            _this.classe = _this._mensagemService.classeDanger();
        });
    };
    ListagemComponent.prototype.close = function (evento) {
        this.classe = evento;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ListagemComponent.prototype, "grid", void 0);
    ListagemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "listagem",
            templateUrl: "./listagem.component.html"
        }),
        __metadata("design:paramtypes", [foto_service_1.FotoService,
            mensagem_service_1.MensagemService])
    ], ListagemComponent);
    return ListagemComponent;
}());
exports.ListagemComponent = ListagemComponent;
//# sourceMappingURL=listagem.component.js.map