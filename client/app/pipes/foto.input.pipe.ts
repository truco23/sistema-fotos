import { Pipe, PipeTransform } from "@angular/core";

import { FotoComponent } from "../modules/foto/foto.component";

@Pipe({
    name: "filtroInput"
})

export class FiltroInput implements PipeTransform {

    transform(fotos: FotoComponent[] = [], digitado: string) {
        
        digitado = digitado.toLowerCase();

        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado) )
    }
}