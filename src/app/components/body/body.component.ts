import { Component } from "@angular/core";

@Component({
    selector:'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    //varible para ocultar o mostrar la card
    mostrar = true;

    //este es un objeto
    frase : any = {
        mensaje: "un gran poder conlleva una gran responsabilidad",
        autor: "Ben Parker"
    };

    personajes: string[] = ['Spiderman', 'Venom', 'Doctor Octopus']
}