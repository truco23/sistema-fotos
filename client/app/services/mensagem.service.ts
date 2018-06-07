import { Injectable } from "@angular/core";

@Injectable()
export class MensagemService {

    _mensagens() {

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
        ]
    }

    _classes() {

        return [
            {
                alert: {
                    success: "alert alert-success d-block",
                    info: "alert alert-info d-block",
                    warning: "alert alert-warning d-block",
                    danger: "alert alert-danger d-block"
                }
            }
        ]
    }

    cadastroSucesso(): string {

        return this._mensagens()[0].cadastro.sucesso;
    }

    cadastroErro(): string {

        return this._mensagens()[0].cadastro.erro;
    }

    alteracaoSucesso(): string {

        return this._mensagens()[1].alteracao.sucesso;
    }

    alteracaoErro(): string {

        return this._mensagens()[1].alteracao.erro;
    }

    remocaoSucesso(): string {

        return this._mensagens()[2].remocao.sucesso;
    }

    remocaoErro(): string {

        return this._mensagens()[2].remocao.erro
    }

    classeSuccess(): string {

        return this._classes()[0].alert.success;
    }

    classeInfo(): string {

        return this._classes()[0].alert.info;
    }

    classeWarning(): string {

        return this._classes()[0].alert.warning;
    }

    classeDanger(): string {

        return this._classes()[0].alert.danger;
    } 
}