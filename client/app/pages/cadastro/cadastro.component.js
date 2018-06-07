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
var forms_1 = require("@angular/forms");
var foto_service_1 = require("../../services/foto.service");
var foto_component_1 = require("../../modules/foto/foto.component");
var mensagem_service_1 = require("../../services/mensagem.service");
var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(_fotoService, _mensagemService, _fb) {
        this._fotoService = _fotoService;
        this._mensagemService = _mensagemService;
        this._fb = _fb;
        this.foto = new foto_component_1.FotoComponent();
        this.classe = "d-none";
        this.categorias = this._fotoService.categorias();
        this.form = this._fb.group({
            categoria: ["", forms_1.Validators.required],
            titulo: ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            url: ["", forms_1.Validators.required],
            descricao: ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(50)])]
        });
    }
    CadastroComponent.prototype.cadastroFoto = function () {
        var _this = this;
        this._fotoService
            .cadastro(this.foto)
            .subscribe(function (res) {
            _this.foto = new foto_component_1.FotoComponent();
            _this.mensagem = _this._mensagemService.cadastroSucesso();
            _this.classe = _this._mensagemService.classeSuccess();
        }, function (erro) {
            console.log(erro);
            _this.mensagem = _this._mensagemService.cadastroErro();
            _this.classe = _this._mensagemService.classeDanger();
        });
    };
    CadastroComponent.prototype.close = function (evento) {
        this.classe = evento;
    };
    CadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "cadastro",
            templateUrl: "./cadastro.component.html"
        }),
        __metadata("design:paramtypes", [foto_service_1.FotoService,
            mensagem_service_1.MensagemService,
            forms_1.FormBuilder])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map