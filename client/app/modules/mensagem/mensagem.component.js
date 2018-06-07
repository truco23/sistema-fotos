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
var MensagemComponent = /** @class */ (function () {
    function MensagemComponent() {
        this.fechar = true;
        this.fecharMensagem = new core_1.EventEmitter();
    }
    MensagemComponent.prototype.close = function () {
        if (this.fechar) {
            this.fecharMensagem.emit("d-none");
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MensagemComponent.prototype, "classe", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MensagemComponent.prototype, "mensagem", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MensagemComponent.prototype, "fechar", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MensagemComponent.prototype, "fecharMensagem", void 0);
    MensagemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "mensagem",
            templateUrl: "./mensagem.component.html"
        })
    ], MensagemComponent);
    return MensagemComponent;
}());
exports.MensagemComponent = MensagemComponent;
//# sourceMappingURL=mensagem.component.js.map