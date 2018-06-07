import { Pipe, PipeTransform } from "@angular/core";

import { FotoComponent } from "../modules/foto/foto.component";

@Pipe({
    name: "filtroSelect"
})

export class FiltroSelect implements PipeTransform {

    transform(fotos: FotoComponent[] = [], selecionado: string) {

        selecionado = selecionado.toLowerCase();

        return fotos.filter( foto => foto.categoria.toLowerCase().includes(selecionado) );
    }
}