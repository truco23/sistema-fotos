import { NgModule } from "@angular/core";

import { FotoComponent } from "./foto.component";

import { FiltroInput } from "../../pipes/foto.input.pipe";
import { FiltroSelect } from "../../pipes/foto.select.pipe";

@NgModule({

    declarations: [ FotoComponent, FiltroInput, FiltroSelect ],
    exports: [ FotoComponent, FiltroInput, FiltroSelect ]
})

export class FotoModule {}