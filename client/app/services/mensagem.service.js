"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MensagemService = /** @class */ (function () {
    function MensagemService() {
    }
    MensagemService.prototype._mensagens = function () {
        return [
            {
                cadastro: {
                    sucesso: "Foto cadastrada com sucesso",
                    erro: "Não foi possível cadastrar a sua foto, tente novamente ou procure um administrador do site"
                }
            },
            {
                alteracao: {
                    sucesso: "Foto alterada com sucesso",
                    erro: "Não foi possível alterar a sua foto, tente novamente ou procure um administrador do site"
                }
            },
            {
                remocao: {
                    sucesso: "Foto removida com sucesso",
                    erro: "Não foi possível remover a sua foto, tente novamente ou procure um administrador do site"
                }
            }
        ];
    };
    MensagemService.prototype._classes = function () {
        return [
            {
                alert: {
                    success: "alert alert-success d-block",
                    info: "alert alert-info d-block",
                    warning: "alert alert-warning d-block",
                    danger: "alert alert-danger d-block"
                }
            }
        ];
    };
    MensagemService.prototype.cadastroSucesso = function () {
        return this._mensagens()[0].cadastro.sucesso;
    };
    MensagemService.prototype.cadastroErro = function () {
        return this._mensagens()[0].cadastro.erro;
    };
    MensagemService.prototype.alteracaoSucesso = function () {
        return this._mensagens()[1].alteracao.sucesso;
    };
    MensagemService.prototype.alteracaoErro = function () {
        return this._mensagens()[1].alteracao.erro;
    };
    MensagemService.prototype.remocaoSucesso = function () {
        return this._mensagens()[2].remocao.sucesso;
    };
    MensagemService.prototype.remocaoErro = function () {
        return this._mensagens()[2].remocao.erro;
    };
    MensagemService.prototype.classeSuccess = function () {
        return this._classes()[0].alert.success;
    };
    MensagemService.prototype.classeInfo = function () {
        return this._classes()[0].alert.info;
    };
    MensagemService.prototype.classeWarning = function () {
        return this._classes()[0].alert.warning;
    };
    MensagemService.prototype.classeDanger = function () {
        return this._classes()[0].alert.danger;
    };
    MensagemService = __decorate([
        core_1.Injectable()
    ], MensagemService);
    return MensagemService;
}());
exports.MensagemService = MensagemService;
//# sourceMappingURL=mensagem.service.js.map